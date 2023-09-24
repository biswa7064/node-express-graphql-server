import TodoController from "../controllers/TodoController"
import todoRoute from "./todoRoute"
import { Router } from "express"

const rootRoute = (): Router => {
	let router = Router({ mergeParams: true })
	router.post(
		"/todo",
		async (req, res) => await todoRoute(req, res, new TodoController())
	)

	router.all("*", (_, res) => {
		res.json({ status: 404, errMsg: "No route found" })
	})
	return router
}

export default rootRoute
