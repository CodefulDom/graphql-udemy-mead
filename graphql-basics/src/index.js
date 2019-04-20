import { GraphQLServer } from 'graphql-yoga'

// Type Definitions = Schema
const typeDefs = `
	type Query {
		id: ID!
		name: String!
		age: Int!
		isEmployed: Boolean!
		gpa: Float
	}
`

// Resolvers
const resolvers = {
  Query: {
    id() {
      return '1'
    },
    name() {
      return 'Dominique Hallan'
    },
    age() {
      return 36
    },
    isEmployed() {
      return true
    },
    gpa() {
      return 4.0
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => {
  console.log('server is running')
})
