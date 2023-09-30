import fs from "fs"
import { getUtf8DataFromDataDirUsingFS } from "../utils"
export class HotelController {
	getHotelsData = async () => {
		try {
			const result = await getUtf8DataFromDataDirUsingFS("hotelsData.json")
			return result
		} catch (err) {
			throw err
		}
	}
}
