import { HotelController } from "../../controllers"
import { HotelType } from "../../types"

export interface HotelArgsType {
	address: string
	price: string
	image: string
	ratings: number
}

const hotelsController = new HotelController()
const hotelsResolver = {
	Query: {
		hotels: async () => {
			const hotels = await hotelsController.getHotelsData()
			return hotels
		},
	},
	Mutation: {
		addHotel: async (_: HotelType, args: HotelArgsType) => {
			try {
				const result = await hotelsController.addHotel(args)
				return result
			} catch (error) {
				throw error
			}
		},
	},
}

export default hotelsResolver
