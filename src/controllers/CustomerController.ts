import fs from "fs"
import { getUtf8DataFromDataDirUsingFS } from "../utils"
export class CustomerController {
	getCustomers = async () => {
		try {
			const result = await getUtf8DataFromDataDirUsingFS("customersData.json")
			return result
		} catch (error) {
			throw error
		}
	}
}
