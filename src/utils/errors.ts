import {
	GraphQLError,
	GraphQLErrorExtensions,
	GraphQLFormattedError,
} from "graphql"
import { ObjectKeys } from "../types"

export const errorStatus = {
	FORBIDDEN: 403,
	UNAUTHENTICATED: 401,
	BAD_USER_INPUT: 400,
} as const

type ErrorStatusKey = ObjectKeys<typeof errorStatus>
const ERROR_CODES = Object.keys(errorStatus)?.reduce((acc, curr) => {
	acc[curr as ErrorStatusKey] = curr?.toUpperCase()
	return acc
}, {} as { [key in ErrorStatusKey]: string })

export const formatError = (err: GraphQLFormattedError) => {
	console.log({ err })
	return {
		message: err?.message,
		error_code: err?.extensions?.code,
		status: errorStatus[err?.extensions?.code as ErrorStatusKey] ?? "UNKNOWN",
		stack: process.env.NODE_ENV === "production" ? undefined : err?.extensions,
	}
}

export class UnAuthorizedError extends GraphQLError {
	extensions: GraphQLErrorExtensions
	constructor(message: string) {
		super(message)
		this.extensions = {
			code: ERROR_CODES["FORBIDDEN"],
		}
	}
}
