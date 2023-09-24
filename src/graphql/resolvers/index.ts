import bookResolver from "./bookResolver"
import { todoResolver } from "./todoResolver"

const rootResolver = [bookResolver, todoResolver]

export default rootResolver
