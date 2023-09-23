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
