import { GraphQLServer } from 'graphql-yoga'

const posts = [
  {
    id: 'isbn-34728394723',
    title: 'GraphQL',
    body: 'GraphQL 101 is a fundamental foundations course',
    published: false
  },
  {
    id: 'isbn-34728394724',
    title: 'React Native',
    body: 'Learn to build native mobile applications in React',
    published: true
  },
  {
    id: 'isbn-34728394725',
    title: 'Java',
    body: 'Shitty, slow infratructure code that everyone loves to hate. This is Java',
    published: true
  }
]

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
    posts(query: String): [Post!]!
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
      if (args.numbers.length === 0) {
        return 0
      }

      return args.numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      })
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
    posts(parent, args, ctx, info) {
      if (!args.query) {
        return posts
      }

      return posts.filter((post) => {
        const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase())
        const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase())
        return isTitleMatch || isBodyMatch
      })
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
