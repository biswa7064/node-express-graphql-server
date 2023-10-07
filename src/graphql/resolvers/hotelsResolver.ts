import { HotelController } from "../../controllers"
import { HotelType } from "../../types"
import { AppContext } from "../context"

const hotelsController = new HotelController()
const hotelsResolver = {
	Query: {
		hotels: async () => {
			const hotels = await hotelsController.getHotelsData()
			return hotels
		},
	},
	Mutation: {
		addHotel: async (
			_: HotelType,
			args: { req: Partial<HotelType> },
			context: AppContext
		) => {
			try {
				const result = await hotelsController.addHotel(args?.req, context)
				return result
			} catch (error) {
				throw error
			}
		},
	},
}

export default hotelsResolver
