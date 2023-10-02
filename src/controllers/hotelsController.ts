import { getUtf8DataFromDataDirUsingFS } from "../utils"
import { HotelType } from "../types"
export class HotelController {
	getHotelsData = async (): Promise<HotelType[]> => {
		try {
			const result = await getUtf8DataFromDataDirUsingFS("hotelsData.json")
			return result
		} catch (err) {
			throw err
		}
	}

	getHotelByID = async (hotelID: string): Promise<HotelType | undefined> => {
		try {
			const hotelsData = await this.getHotelsData()
			const hotelResult = hotelsData.find((hotel) => hotel?.hotelID === hotelID)
			return hotelResult
		} catch (error) {
			throw error
		}
	}

	addHotel = async (input: Partial<HotelType>) => {
		try {
			const random = Math.floor(Math.random() * 100 + 1)
			const hotels = await this.getHotelsData()
			const createInput = {
				hotelID: random.toString() + "abcd",
				address: input?.address,
				image: input?.image,
				ratings: input?.ratings,
			} as HotelType
			hotels.unshift(createInput)
			return hotels?.find((hotel) => hotel?.hotelID === createInput?.hotelID)
		} catch (error) {
			throw error
		}
	}
}
