const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Story = new Schema({
    storyName: {
        type: String,
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
    storyStatus: String
    }
);

let Project = new Schema({
    userName: {
        type:String,
        required: true,
    },
    userDeleted:{
        type:Boolean,
        required: false,
        default: true
    },
    projectName: {
        type:String,
        required: true
    },
    projectDeleted:{
        type:Boolean,
        default: false
    },
    projectStories:[Story]
});


module.exports = mongoose.model("Project", Project);