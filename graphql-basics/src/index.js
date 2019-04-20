import { GraphQLServer } from 'graphql-yoga'

// Type Definitions = Schema
const typeDefs = `
	type Query {
		hello: String!
		name: String!
		location: String!
		bio: String
	}
`

// Resolvers
const resolvers = {
  Query: {
    hello() {
      return 'This is the hello query!'
    },
    name() {
      return `Dom!`
    },
    location() {
      return `St. Louis, Mo`
    },
    bio() {
      return `My name is Dom and I live in STL.`
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
