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
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addSkill(userId: ID!, skill: String!): User
    removeUser: User
    removeSkill(skill: String!): User
  }
`;

module.exports = typeDefs;
