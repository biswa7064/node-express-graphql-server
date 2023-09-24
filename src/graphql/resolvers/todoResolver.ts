import TodoController from "../../controllers/TodoController"

export interface TodoType {
	id: number
	title: string
	description: string
}

export const getTodoResolver = (todo: TodoType[]): TodoType[] => todo
export const getCartItemsByUserResolver = (
	userId: string,
	resp: any[]
): any[] => resp

const todoController = new TodoController()
export const todoResolver = {
	Query: {
		todoItems: async () => {
			const { data, errMsg } = await todoController.getTodo()
			console.log({ data, errMsg })
			return data
		},
	},
}
