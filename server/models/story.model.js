const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Story = new Schema({
    storyName: String,
    storyPriority: String,
    storyEstimate: Int,
    storyUserDescription: String,
    storyFunctionality: String,
    storyBenefit: String,
    storyAcceptanceCriteriaBegin: String,
    storyAcceptanceCriteriaAction: String,
    storyAcceptanceCriteriaOutcome: String,
    }
)

module.exports = mongoose.model("Story", Story)