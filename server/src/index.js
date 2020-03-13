const { ApolloServer, UserInputError } = require('apollo-server')
const {find, filter} = require('lodash')
const typeDefs = require("./schema");

let stories = 
[
    {
    "userName": "Mike",
    "userID": "2b24e0b0-343c-11e9-8c2a-cb57c2bf804f",
    "userStories":
        [{
            projectName: "Product Management Dashboard",
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
            projectName: "Product Management Dashboard",
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
            projectName: "Product Management Dashboard",
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
    },
    {
        "userName": "Jess",
        "userID": "2b24e0b0-343c-11e9-8c2a-cb57c2bf804f",
        "userStories":
            [{
                projectName: "Product Management Dashboard",
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
                projectName: "Product Management Dashboard",
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
                projectName: "Product Management Dashboard",
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
        }
]

const resolvers = {
    Query: {
        getUsers:()=>stories,
        findUser:(root, args)=> stories.find(s=>s.userName===args.userName)
    },
    User:{
        userStories:(root)=>{
            return{
                projectName: root.projectName,
                storyID: root.storyID,
                storyName: root.storyName,
                storyPriority: root.storyPriority,
                storyEstimate: root.storyEstimate,
                storyUserDescription: root.storyUserDescription,
                storyFunctionality: root.storyFunctionality,
                storyBenefit: root.storyBenefit,
                storyAcceptanceCriteriaBegin: root.storyAcceptanceCriteriaBegin,
                storyAcceptanceCriteriaAction: root.storyAcceptanceCriteriaAction,
                storyAcceptanceCriteriaOutcome: root.storyAcceptanceCriteriaOutcome,
            }
        }
    },
    Mutation:{
        addUser: (root, args) => {
            if (stories.find(s=>s.userName === args.userName)){
                throw new UserInputError("Name must be unique",{
                    invalidArgs: args.userName
                })
            }
            const user = {...args}
            stories = stories.concat(user)
            return user
          },
    }
}

const server = new ApolloServer({
    typeDefs, 
    resolvers
})

server.listen().then(({url})=>{
    console.log(`Server ready at ${url}`)
})