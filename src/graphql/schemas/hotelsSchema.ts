const hotelsSchema = `#graphql
type Hotel{
    hotelID:String!
    address:String
    price:String
    ratings:Int
    image:String
}

type Query{
    hotels:[Hotel]
}
`
export default hotelsSchema
