const { ApolloServer, gql } = require('apollo-server')
const typeDefs = require("./schema");

let stories = 
[{
    "userName": "Mike",
    "stories": [{
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
    }]
}]

const resolvers = {
    Query: {
        userCount: ()=> stories.length,
        allStories: ()=> stories,
        findUser: (root, args)=> stories.find(s=>s.userName===args.userName)
    },
    Story:{
        storyID: (root)=>root.storyID,
        storyName: (root)=> root.storyName, 
        storyPriority: (root)=> root.storyPriority, 
        storyEstimate: (root)=> root.storyEstimate, 
        storyUserDescription: (root)=> root.storyUserDescription, 
        storyFunctionality: (root)=> root.storyFunctionality, 
        storyBenefit: (root)=> root.storyBenefit, 
        storyAcceptanceCriteriaBegin: (root)=> root.storyAcceptanceCriteriaBegin, 
        storyAcceptanceCriteriaAction: (root)=> root.storyAcceptanceCriteriaAction, 
        storyAcceptanceCriteriaOutcome: (root)=> root.storyAcceptanceCriteriaOutcome, 
    },
    User:{
        userID:(root)=> root.userID,
        userName: (root)=> root.userName,
        stories: (root)=> root.stories,
    }
}

const server = new ApolloServer({
    typeDefs, 
    resolvers
})

server.listen().then(({url})=>{
    console.log(`Server ready at ${url}`)
})