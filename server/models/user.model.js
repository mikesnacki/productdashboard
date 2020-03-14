const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Project = require("./project.model")

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