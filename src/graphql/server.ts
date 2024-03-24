import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from "@apollo/server/express4"
import { WebSocketServer } from "ws"
import { useServer } from "graphql-ws/lib/use/ws"
import { makeExecutableSchema } from "@graphql-tools/schema"
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer"
import { Express } from "express"
import { json } from "body-parser"
import http from "http"
import cors from "cors"
import rootRoute from "../routes"
import typeDefs from "./schemas"
import rootResolver from "./resolvers"
import appContext, { AppContext } from "./context"
import { throwError } from "../middlewares"
import { formatError } from "../utils"

async function startServer(app: Express, port: number) {
	const httpServer = http.createServer(app)
	const schema = makeExecutableSchema({ typeDefs, resolvers: rootResolver })
	const wsServer = new WebSocketServer({
		server: httpServer,
		path: "/graphql/:uID",
	})
	const wsServerCleanup = useServer({ schema }, wsServer)
	const apolloServer = new ApolloServer<AppContext>({
		schema,
		introspection: process.env.NODE_ENV !== "production",
		plugins: [
			ApolloServerPluginDrainHttpServer({ httpServer }),
			{
				// shutdown the ws Server
				async serverWillStart() {
					//inbuilt function
					return {
						async drainServer() {
							//inbuilt function
							await wsServerCleanup.dispose() //call dispose for ws to cleanup
						},
					}
				},
			},
		],
		formatError,
	})

	await apolloServer.start()

	app.use(json())
	app.use(cors())
	// Graphql Entry point
	app.use(
		"/graphql/:uID",
		expressMiddleware(apolloServer, {
			context: appContext,
		})
	)
	app.get("/", (req, res) => {
		console.log({ req: req?.path })
		res.send("Node Server")
	})
	app.use("/", rootRoute)

	app.use(throwError)
	httpServer.listen(process.env.PORT || port, () => {
		const PORT = process.env.PORT || port
		console.log(`🚀 Query endpoint ready at http://localhost:${PORT}/graphql`)
		console.log(
			`🚀 Subscription endpoint ready at ws://localhost:${PORT}/graphql`
		)
	})
}

export default startServer
