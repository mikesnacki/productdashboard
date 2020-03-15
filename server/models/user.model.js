const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Story = new Schema({
    storyName: {
        type:String,
        required: false,
    },
    storyPriority: String,
    storyEstimate: Number,
    storyUserDescription: String,
    storyFunctionality: String,
    storyBenefit: String,
    storyAcceptanceCriteriaBegin: String,
    storyAcceptanceCriteriaAction: String,
    storyAcceptanceCriteriaOutcome: String,
    }
)

let Project = new Schema({
    projectName: {
        type:String,
        required: false
    },
    projectDeleted:{
        type:Boolean,
        default: false
    },
    projectStories:[Story]
})

let User = new Schema({
    userName: {
        type:String,
        required: true,
    },
    userEmail: String,
    userDeleted:{
        type:Boolean,
        required: true,
        default: false
    },
    userProjects:[Project]
})

module.exports = mongoose.model("User", User)