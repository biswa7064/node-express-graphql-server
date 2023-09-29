import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from "@apollo/server/express4"
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer"
import { Express } from "express"
import { json } from "body-parser"
import http from "http"
import cors from "cors"
import rootRoute from "../routes"
import typeDefs from "./schemas"
import rootResolver from "./resolvers"

async function startServer(app: Express, port: number) {
	const httpServer = http.createServer(app)
	const apolloServer = new ApolloServer({
		typeDefs,
		resolvers: rootResolver,
		introspection: process.env.NODE_ENV !== "production",
		plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
	})

	await apolloServer.start()

	app.use(json())
	app.use(cors())
	// Graphql Entry point
	app.use(
		"/graphql",
		expressMiddleware(apolloServer, {
			context: async ({ req, res }) => ({
				// Add optional configuration options
				request: req,
				response: res,
			}),
		})
	)
	app.get("/", (req, res) => {
		console.log({ req: req?.path })
		res.send("Node Server")
	})
	app.use("/", rootRoute)

	httpServer.listen(process.env.PORT || port, () => {
		console.log(`server started on ${port}!`)
	})
}

export default startServer