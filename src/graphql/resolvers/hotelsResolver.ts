import { PubSub } from "graphql-subscriptions"
import { HotelController } from "../../controllers"
import { HotelType } from "../../types"
import logger from "../../utils/logger"
import { AppContext } from "../context"

const pubSub = new PubSub()
const hotelsController = new HotelController()
const hotelsResolver = {
	Query: {
		hotels: async () => {
			logger.info(`Resolver: HotelsResolver, Query: hotels, Get hotels data`)
			const hotels = await hotelsController.getHotelsData()
			return hotels
		},
	},
	Mutation: {
		addHotel: async (
			_: HotelType | null,
			args: { req: Partial<HotelType> },
			context: AppContext
		) => {
			logger.info(
				`Resolver: HotelsResolver, Mutation: addHotel, RequestBody:${JSON.stringify(
					args?.req
				)}, Add new hotel details`
			)
			try {
				const result = await hotelsController.addHotel(args?.req, context)
				pubSub.publish("DEMO_SUBSCRIPTION", {
					demoSubscription: {
						...args.req,
					},
				})
				return result
			} catch (error) {
				throw error
			}
		},
	},

	Subscription: {
		demoSubscription: {
			subscribe: () => pubSub.asyncIterator(["DEMO_SUBSCRIPTION"]),
		},
	},
}

export default hotelsResolver
