const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Story = require("./story.model");

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
    projectDescription: String,
    projectDeleted:{
        type:Boolean,
        default: false
    },
    projectCreated: { type : Date },
    projectStories:[Story.schema]
});


module.exports = mongoose.model("Project", Project);