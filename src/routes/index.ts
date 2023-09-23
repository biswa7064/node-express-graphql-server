import { graphqlHTTP } from "express-graphql"
import TodoController from "../controllers/TodoController"
import { getCartItemsByUserResolver } from "../graphql/resolvers/todoResolver"
import todoRoute from "./todoRoute"
import { Router } from "express"
import todoSchema from "../graphql/schemas/todoSchema"

const todoController = new TodoController()
const rootRoute = (): Router => {
  let router = Router({ mergeParams: true })
  router.post(
    "/todo",
    async (req, res) => await todoRoute(req, res, new TodoController())
  )
  router.post("/cart-items/:userId", async (req, res) => {
    const { userId } = req?.params
    const resp = await todoController.getCartItemsByUser(userId)
    const rootValue = {
      cartItems: getCartItemsByUserResolver(userId, resp?.data),
    }
    return await graphqlHTTP({
      schema: todoSchema,
      graphiql: true,
      rootValue,
    })(req, res)
  })

  router.all("*", (_, res) => {
    res.json({ status: 404, errMsg: "No route found" })
  })
  return router
}

export default rootRoute
