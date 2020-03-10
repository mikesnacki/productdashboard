const { gql } = require('apollo-server')

const typeDefs = gql`
    type Story {
        storyID:ID!
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

    type User {
        userID:ID!
        userName: String!
        stories: [Story]
    }

    type Query{
        userCount:Int!
        allStories:[Story!]!
        findUser(userName: String!): User
        findStory(storyName: String!): Story
    }
`
module.exports = typeDefs;