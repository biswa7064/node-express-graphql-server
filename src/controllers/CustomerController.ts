import { getUtf8DataFromDataDirUsingFS } from "../utils"
import { CustomerType } from "../types/customerTypes"
export class CustomerController {
	getCustomers = async (): Promise<CustomerType[]> => {
		try {
			const result = await getUtf8DataFromDataDirUsingFS("customersData.json")
			return result
		} catch (error) {
			throw error
		}
	}
}
