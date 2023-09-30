import { CustomerController } from "../../controllers"

const customerController = new CustomerController()
export const customerResolver = {
	Query: {
		customers: async () => {
			const data = await customerController.getCustomers()
			return data
		},
	},
}
