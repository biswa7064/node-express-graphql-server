import { HotelController } from "../../controllers/hotelsController"

const hotelsController = new HotelController()
const hotelsResolver = {
	Query: {
		hotels: async () => {
			const hotels = await hotelsController.getHotelsData()
			return hotels
		},
	},
}

export default hotelsResolver
