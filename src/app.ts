import express from "express"
import startServer from "./graphql/server"
import dotenv from "dotenv"
const app = express()
const port = 8080
dotenv.config()

startServer(app, port)
