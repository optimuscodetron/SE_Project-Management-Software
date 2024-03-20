const mongoose = require("mongoose");
const validator = require("validator");
// const {User}= require("../models/user.model");
// const { default: Workspace } = require("../../client/src/Workspace");


const userworkspaceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    adminuserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        // required:true
    },
    members:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            // required :true
        }
    ],
    projects: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Project',
            // required :true
        }
    ]

});


// user otp model
// const Workspace = new mongoose.model("Workspace",userworkspaceSchema);

module.exports.Workspace = mongoose.model("Workspace",userworkspaceSchema);