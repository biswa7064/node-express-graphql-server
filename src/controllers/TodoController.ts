import config from "../config"

class TodoController {
  getTodo = async () => {
    try {
      const resp = await config
        .api()
        .get("/todos/get-todos")
        .then((data) => data)
      const json = {
        status: resp?.status || 200,
        data: resp?.data?.data || [],
      }

      return json
    } catch (err) {
      const json = {
        status: 404,
        data: null,
        errMsg: (err as Error).message,
      }
      return json
    }
  }

  getCartItemsByUser = async (userId: string) => {
    try {
      const resp = await config
        .api()
        .get(`/auth/cart/${userId}`)
        .then((data) => data)
      const json = {
        status: resp?.status || 200,
        data: resp?.data?.data || [],
      }

      return json
    } catch (err) {
      const json = {
        status: 404,
        data: null,
        errMsg: (err as Error).message,
      }
      return json
    }
  }
}

export default TodoController
