const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Story = require("./story.model")

let Project = new Schema({
    projectName: {
        type:String,
        required: true
    },
    projectDeleted:{
        type:Boolean,
        default: false
    },
    projectStories:[Story]
})

module.exports = mongoose.model("Project", Project)