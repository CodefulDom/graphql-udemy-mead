import { GraphQLServer } from 'graphql-yoga'

// Type Definitions = Schema
const typeDefs = `
	type Query {
		greeting(name: String, position: String): String!
		add(numbers: [Float!]!): Float!
		grades: [Int!]!
		id: ID!
		name: String!
		age: Int!
		isEmployed: Boolean!
		gpa: Float
		isMarried: String!
		post: Post!
	}

	type User {
		id: ID!
		name: String!
		email: String!
	}

	type Post {
		id: ID!,
		title: String!
		body: String!,
		published: Boolean!
	}
`

// Resolvers
const resolvers = {
  Query: {
    add(parent, args, ctx, info) {
      const sum = `${args.a + args.b}`
      return sum
    },
    grades(parent, args, ctx, info) {
      return [99, 80, 93]
    },
    greeting(parent, args, ctx, info) {
      if (args.name) {
        return `Hello, ${args.name}! You are my favorite ${args.position}!!`
      } else {
        return `Hello user!`
      }
    },
    post() {
      return {
        id: `isbn-342389749823748923`,
        title: `Holy Bible`,
        body: `In the beginning...`,
        published: true
      }
    },
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
    },
    isMarried() {
      return true
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => {
  console.log(`server is running at http://localhost:4000`)
})
