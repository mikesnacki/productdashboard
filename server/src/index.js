const { ApolloServer, gql } = require('apollo-server')
const {find, filter} = require('lodash')
const typeDefs = require("./schema");

let stories = 
[{
    "userName": "Mike",
    "userID": "2b24e0b0-343c-11e9-8c2a-cb57c2bf804f",
    "projects":
    [{"projectName":"Product Management Dashboard",
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
}]

const resolvers = {
    Query: {
        user(parent, args, context, info){
            return find(users, {name: args.name})
        }
    },

    User:{
        projects(user){
            return filter(projects, {user: user.name})
        }
        // userID:(root)=> root.userID,
        // userName: (root)=> root.userName,
        // projects: (root)=> {
        //     return {
        //         projectID: root.projectID,
        //         projectName: root.projectName,
        //         stories: (root)=> {
        //             return {
        //                 storyID: root.storyID,
        //                 storyName: root.storyName, 
        //                 storyPriority: root.storyPriority, 
        //                 storyEstimate: root.storyEstimate, 
        //                 storyUserDescription: root.storyUserDescription, 
        //                 storyFunctionality: root.storyFunctionality, 
        //                 storyBenefit: root.storyBenefit, 
        //                 storyAcceptanceCriteriaBegin: root.storyAcceptanceCriteriaBegin, 
        //                 storyAcceptanceCriteriaAction: root.storyAcceptanceCriteriaAction, 
        //                 storyAcceptanceCriteriaOutcome: root.storyAcceptanceCriteriaOutcome, 
        //             }
        //         },
        //     }
        // }
    },
}

const server = new ApolloServer({
    typeDefs, 
    resolvers
})

server.listen().then(({url})=>{
    console.log(`Server ready at ${url}`)
})