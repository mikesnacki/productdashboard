const { gql } = require('apollo-server')

const typeDefs = gql`

    type User {
        userName: String!
        userStories: [Story]
    }

    type Story {
        userName: User
        projectName: String!
        storyName: String!
        storyPriority: String
        storyEstimate: Int
        storyUserDescription: String
        storyFunctionality: String
        storyBenefit: String
        storyAcceptanceCriteriaBegin: String
        storyAcceptanceCriteriaAction: String
        storyAcceptanceCriteriaOutcome: String
    }

    type Query {
        getUsers: [User]
        findUser(userName: String!): User
    }

    type Mutation {
        addUser(
            userName: String!
        ): User
        addStory(
            userName: String!
            projectName: String!
            storyName: String!
            storyPriority: String
            storyEstimate: Int
            storyUserDescription: String
            storyFunctionality: String
            storyBenefit: String
            storyAcceptanceCriteriaBegin: String
            storyAcceptanceCriteriaAction: String
            storyAcceptanceCriteriaOutcome: String
        ): Story
        modifyStory(
            userName: String!
            projectName: String!
            storyName: String!
            storyPriority: String
            storyEstimate: Int
            storyUserDescription: String
            storyFunctionality: String
            storyBenefit: String
            storyAcceptanceCriteriaBegin: String
            storyAcceptanceCriteriaAction: String
            storyAcceptanceCriteriaOutcome: String
        ): Story
    }  
`
module.exports = typeDefs;