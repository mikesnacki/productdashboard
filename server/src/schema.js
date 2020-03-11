const { gql } = require('apollo-server')

const typeDefs = gql`

    type User {
        userID:ID!
        userName: String!
        projects: [Project]
    }

    type Project {
        projectID: ID!
        projectName: String!
        stories: [Story]
    }

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

    type Query {
        userCount: Int!
        user: User
        allUsers:[User!]!
        allProjects:[Project!]!
        allStories:[Story!]!
        findUser(userName: String!): User
        findProject(projectName: String!): Project
        findStory(storyName: String!): Story
    }
`
module.exports = typeDefs;