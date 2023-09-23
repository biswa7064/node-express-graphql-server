import express from "express"
import startServer from "./graphql/server"
const app = express()
const port = 8080

startServer(app, port)
