import { Request, Response } from "express"
import TodoController from "../controllers/TodoController"
import { getTodoResolver } from "../graphql/resolvers/todoResolver"

const todoRoute = async (
	_: Request,
	res: Response,
	todoController: TodoController
): Promise<void> => {
	const resp = await todoController.getTodo()
	const rootValue = {
		todoTitles: getTodoResolver(resp?.data),
	}
	res.json(rootValue)
}
export default todoRoute
