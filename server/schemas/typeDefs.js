const typeDefs = `
type User {
  _id: ID!
  username: String!
  email: String!
  password: String!
  createdAt: Date
}
`

module.exports = typeDefs;