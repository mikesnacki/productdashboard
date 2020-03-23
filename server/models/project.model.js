const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ProjectSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    userDeleted:{
        type:Boolean,
        required: true,
        default: false
    },
    projectName: {
        type:String,
        required: false
    },
    projectDeleted:{
        type:Boolean,
        default: false
    },
    projectStories: Array
});

module.exports = mongoose.model("ProjectSchema", ProjectSchema);