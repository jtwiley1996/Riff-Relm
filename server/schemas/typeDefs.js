const typeDefs = `
type User {
  _id: ID!
  username: String!
  email: String!
  password: String!
  createdAt: Date
  genres: [String!]
}

type: Auth {
  token: ID!
  profile: Profile
}
`

module.exports = typeDefs;