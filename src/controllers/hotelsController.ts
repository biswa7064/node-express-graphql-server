import fs from "fs"
export class HotelController {
	getHotelsData = async () => {
		try {
			const data = fs.readFileSync("__data__/hotelsData.json", "utf8")
			const result = JSON.parse(data)
			return result
		} catch (err) {
			throw err
		}
	}
}
