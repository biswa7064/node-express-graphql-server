const hotelsSchema = `#graphql
type Hotel{
    hotelID:String!
    address:String
    price:String
    ratings:Int
    image:String
    rooms:Int
    avail:String
}


type Query{
    hotels:[Hotel]
}
`
export default hotelsSchema
