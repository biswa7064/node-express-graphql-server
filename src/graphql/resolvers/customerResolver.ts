import { CustomerController } from "../../controllers"

const customerController = new CustomerController()

interface CustomerType {
	customerID: string
	name: string
	address: string
	bookedRooms?: any[]
}

interface CustomerArgsType {
	cID: string
}
export const customerResolver = {
	Query: {
		customers: async () => {
			const data = await customerController.getCustomers()
			return data
		},
		customerByID: async (_: CustomerType, { cID }: CustomerArgsType) => {
			const data = await customerController.getCustomers()
			const customerData = data.find(
				(customer: any) => customer?.customerID === cID
			)
			return customerData
		},
	},
}
