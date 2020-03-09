const {ApolloServer, gql} = require('apollo-server')

let stories = 
[
    {
        storyName: "Add stories",
        storyPriority: "High",
        storyEstimate: "1 Week",
        storyUserDescription:"Product Manager",
        storyFunctionality: "add stories",
        storyBenefit: "express a narrative",
        storyAcceptanceCriteriaBegin: "writing things out",
        storyAcceptanceCriteriaAction: "we had ideas",
        storyAcceptanceCriteriaOutcome: "tracking them manually",
    }, 
    {
        storyName: "Update stories",
        storyPriority: "High",
        storyEstimate: "1 Week",
        storyUserDescription:"Product Manager",
        storyFunctionality: "update stories",
        storyBenefit: "track progress",
        storyAcceptanceCriteriaBegin: "modify stories via paper",
        storyAcceptanceCriteriaAction: "we changed ideas",
        storyAcceptanceCriteriaOutcome: "updating them manually",
    }, 
    {
        storyName: "Delete stories",
        storyPriority: "High",
        storyEstimate: "1 Week",
        storyUserDescription:"Product Manager",
        storyFunctionality: "delete stories",
        storyBenefit: "track progress",
        storyAcceptanceCriteriaBegin: "delete stories via paper",
        storyAcceptanceCriteriaAction: "we removed ideas",
        storyAcceptanceCriteriaOutcome: "deleting them manually",
    }, 
]

const typeDefs = gql`
type Story {
    storyName: String!
    storyPriority: String!
    storyEstimate: Int!
    storyUserDescription: String!
    storyFunctionality: String!
    storyBenefit: String!
    storyAcceptanceCriteriaBegin: String!
    storyAcceptanceCriteriaAction: String!
    storyAcceptanceCriteriaOutcome: String!

    type Query{
        storyCount:Int!
        allStories:[Story!]!
        findStory(name: String!): Person
    }
   
}
`