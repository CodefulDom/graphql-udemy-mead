import { GraphQLServer } from 'graphql-yoga'

// Type Definitions = Schema
const typeDefs = `
	type Query {
		hello: String!
	}
`

// Resolvers
const resolvers = {
  Query: {
    hello() {
      return 'This is the hello query!'
    }
  }
}
