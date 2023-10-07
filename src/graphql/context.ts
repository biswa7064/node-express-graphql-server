import { Request, Response } from "express"

export interface AppContext {
	req: Request
	res: Response
	uID: string
}
export const context = async () => {}
