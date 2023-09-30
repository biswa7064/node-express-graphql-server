import bookResolver from "./bookResolver"
import { customerResolver } from "./customerResolver"
import hotelsResolver from "./hotelsResolver"
import { todoResolver } from "./todoResolver"

const rootResolver = [
	bookResolver,
	todoResolver,
	hotelsResolver,
	customerResolver,
]

export default rootResolver
