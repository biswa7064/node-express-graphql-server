import { NextFunction, Request, Response } from "express"
import { GraphQLError } from "graphql"

export const throwError = async (
	err: Error | GraphQLError,
	_: Request,
	res: Response,
	next: NextFunction
) => {
	if (err instanceof GraphQLError) {
		console.log({ err })
		const error = {
			message: err.message,
			status: err.extensions.code,
		}
		res.json({ error })
	}
	res.json({ error: err })
	next()
}
