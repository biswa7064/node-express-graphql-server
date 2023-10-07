import { NextFunction, Request, Response } from "express"

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
