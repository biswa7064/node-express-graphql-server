import axios, { AxiosInstance } from "axios"
class Config {
	private baseUrl = "http://localhost:9000"
	api = (): AxiosInstance => {
		return axios.create({
			baseURL: this.baseUrl,
			headers: {
				"Content-Type": "application/json",
			},
		})
	}
}
export default new Config()
