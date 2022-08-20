const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    scores: [Score]!
  }

  type Score {
    _id: ID
    username: String
    score: Int
    createdDate: String
    }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    scores(username: String): [Score]
    score(scoreId: ID!): Score
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addScore(score: Int!): Score
  }
`;

module.exports = typeDefs;
