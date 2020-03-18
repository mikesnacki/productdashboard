const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let StorySchema = new Schema({
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
    }
);

module.exports = mongoose.model("StorySchema", StorySchema);
