import { Request, Response } from "express"
import { PubSub } from "graphql-subscriptions"

export interface AppContext {
	req: Request
	res: Response
	uID: string
}
const appContext = async ({ req, res }: { req: Request; res: Response }) => ({
	req,
	res,
	uID: req?.params?.uID,
})

export default appContext
