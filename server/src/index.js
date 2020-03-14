const { ApolloServer, UserInputError } = require('apollo-server')
// const {find, filter} = require('lodash')
const typeDefs = require("./schema");

let stories = 
[
    {
        userName: "Mike",
        userStories: 
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

        addStory:(root, args)=>{
            const user = stories.filter(s=>s.userName === args.userName)
                            
            if (!user) {return null}

            const story = user.filter(s=>s.storyName === args.storyName)

            if (!story) {return null}

            const newStory = {
                userName: args.userName,
                projectName: args.projectName,
                storyName: args.storyName,
                storyPriority: args.storyPriority,
                storyEstimate: args.storyEstimate,
                storyUserDescription: args.storyUserDescription,
                storyFunctionality: args.storyFunctionality,
                storyBenefit: args.storyBenefit,
                storyAcceptanceCriteriaBegin: args.storyAcceptanceCriteriaBegin,
                storyAcceptanceCriteriaAction: args.storyAcceptanceCriteriaAction,
                storyAcceptanceCriteriaOutcome: args.storyAcceptanceCriteriaOutcome,
            }

            stories = stories.concat(newStory)
            return newStory
        },
        modifyStory:(root, args)=>{
            const story = stories.filter(s=>s.userName === args.userName)
        
            if (!story) {return null}

            const modifiedStory = {
                userName: args.userName,
                projectName: args.projectName,
                storyName: args.storyName,
                storyPriority: args.storyPriority,
                storyEstimate: args.storyEstimate,
                storyUserDescription: args.storyUserDescription,
                storyFunctionality: args.storyFunctionality,
                storyBenefit: args.storyBenefit,
                storyAcceptanceCriteriaBegin: args.storyAcceptanceCriteriaBegin,
                storyAcceptanceCriteriaAction: args.storyAcceptanceCriteriaAction,
                storyAcceptanceCriteriaOutcome: args.storyAcceptanceCriteriaOutcome,
            }

            stories = stories.concat(modifiedStory)
            return modifiedStory
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