import { buildSchema } from "graphql"

const todoSchema = buildSchema(`
type TodoType{
    id:Int!
    title:String!
    description:String!
}

type ProdDetails{
    id:String!
    name:String!
    price:Int!
}

type CartItems{
    cartId:Int!
    prodDetails:ProdDetails
    quantity:Int!
}

type Query{
    todoTitles : [TodoType]
    cartItems(userId:String!):[CartItems]
}
`)

export default todoSchema
