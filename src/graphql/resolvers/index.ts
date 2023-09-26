import bookResolver from "./bookResolver"
import hotelsResolver from "./hotelsResolver"
import { todoResolver } from "./todoResolver"

const rootResolver = [bookResolver, todoResolver, hotelsResolver]

export default rootResolver
