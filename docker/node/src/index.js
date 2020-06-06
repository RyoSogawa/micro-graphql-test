const {ApolloServer, gql} = require('apollo-server-micro')
const {resolvers} = require('./resolvers')

const typeDefs = gql`
    type User{
        id: Int!
        name: String
        birth: String
        countryCode: Int
        email: String
        prefectureCode: Int!
        createdAt: String
        updatedAt: String
    }

    type Query {
        sayHello(name: String): String!
        getUsers: [User]
        getUser(id: Int!): User
    }

    type Mutation{
        createUser(name: String
            birth: String
            countryCode: Int
            email: String
            prefectureCode: Int!):User!
        updateUser( id: Int!
            name: String
            birth: String
            countryCode: Int
            email: String
            prefectureCode: Int):Boolean!
        deleteUser(id:Int!):Boolean!
    }
`

const apolloServer = new ApolloServer({typeDefs, resolvers})
module.exports = apolloServer.createHandler()