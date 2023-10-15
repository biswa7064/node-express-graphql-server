import { AppContext } from "../../src/graphql/context"
import hotelsResolver from "../../src/graphql/resolvers/hotelsResolver"
import { HotelType } from "../../src/types"
import { CustomerController } from "../../src/controllers/CustomerController"
import { HotelController } from "../../src/controllers"
import { GraphQLError } from "graphql"
import fs from "fs"

jest.mock("fs")

const mockHotel: HotelType = {
	hotelID: "abc123",
	address: "Address-1, Address-2",
	image: "img-url",
	price: "250.00",
	ratings: 4.5,
}

const mockAppContext: AppContext = {
	req: jest.fn() as any,
	res: jest.fn() as any,
	uID: "da9c1857-e211-41a2-9edd-0b45a874e45d",
}
const mockCustomer = {
	customerID: "da9c1857-e211-41a2-9edd-0b45a874e45d",
	role: "ADMIN",
}

const mockHotelReq = {
	address: "Address-1, Address-2",
	image: "img-url",
	price: "250.00",
	ratings: 4.5,
}

describe(hotelsResolver.Query.hotels, () => {
	const customerController = new CustomerController()
	const hotelsController = new HotelController()
	let spyFS: jest.SpyInstance
	beforeEach(() => {
		spyFS = jest.spyOn(fs, "readFileSync")
		hotelsController.getHotelsData = jest.fn().mockReturnValue([mockHotel])
		customerController.getCustomers = jest.fn().mockReturnValue([mockCustomer])
	})

	afterEach(() => {
		jest.clearAllMocks()
		jest.resetAllMocks()
	})

	// query
	it("Should successfully fetch hotels data", async () => {
		spyFS.mockReturnValue(JSON.stringify([mockHotel]))
		const resp = await hotelsResolver.Query.hotels()
		expect(resp).toBeDefined
		expect(resp?.[0]).toMatchObject(mockHotel)
	})

	it("should throw error if any", async () => {
		spyFS.mockImplementation(() => {
			throw new Error("error")
		})
		try {
			await hotelsResolver.Query.hotels()
		} catch (error) {
			expect(error).toBeInstanceOf(Error)
			expect((error as Error)?.message).toBe("error")
		}
	})

	// mutation
	it("Should successfully add hotel details", async () => {
		spyFS.mockReturnValue(JSON.stringify([mockCustomer]))
		const resp = await hotelsResolver.Mutation.addHotel(
			mockHotel,
			{ req: mockHotelReq },
			mockAppContext
		)
		expect(resp).toBeDefined
		expect(resp).toMatchObject(mockHotelReq)
	})

	it("should throw error if role is not ADMIN", async () => {
		spyFS.mockReturnValue(
			JSON.stringify([{ ...mockCustomer, customerID: "abc123" }])
		)
		try {
			await hotelsResolver.Mutation.addHotel(
				mockHotel,
				{ req: mockHotelReq },
				mockAppContext
			)
		} catch (error) {
			expect(error).toBeInstanceOf(GraphQLError)
		}
	})
})
