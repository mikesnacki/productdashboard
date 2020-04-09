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
    storyStatus: String,
    storyDeleted: Boolean,
    storyCreated: { type : Date },
    storyLastUpdated: { type : Date },
    storyCompleted: { type : Date },
    }
);

module.exports = Story = mongoose.model("Story", Story);
