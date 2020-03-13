const { gql } = require('apollo-server')

const typeDefs = gql`

    type User {
        userID: ID!
        userName: String!
        userStories: [Story]
    }

    type Story {
        user: User
        projectName: String!
        storyID: ID!
        storyName: String!
        storyPriority: String!
        storyEstimate: Int!
        storyUserDescription: String!
        storyFunctionality: String!
        storyBenefit: String!
        storyAcceptanceCriteriaBegin: String!
        storyAcceptanceCriteriaAction: String!
        storyAcceptanceCriteriaOutcome: String!
    }

    type Query {
        getUsers: [User]
        findUser(userName: String!): User
    }

    type Mutation {
        addUser(
        userName: String!
        ): User
    }  
`
module.exports = typeDefs;