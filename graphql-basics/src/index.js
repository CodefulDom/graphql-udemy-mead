import { GraphQLServer } from 'graphql-yoga'

// Type Definitions = Schema
const typeDefs = `
	type Query {
		id: ID!
		name: String!
		age: Int!
		isEmployed: Boolean!
		gpa: Float
		isMarried: String!
	}

	type User {
		id: ID!
		name: String!
		email: String!
	}

	type Post {
		id: ID!,
		title: String!
		body!: String!,
		published: Int!
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
    },
    isMarried() {
      return true
    }
  },
  post() {
    return {
      id: `isbn 374982374893274893245783462873647823648723`,
      title: `Harry Potter does Harry Potter Thangs`,
      author: `J.K. Rowling`,
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus commodi nulla dolores in similique, quis facere sit libero non perferendis illo tempora reprehenderit dolore voluptatem, quas voluptates aperiam omnis sint!`
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
