const mongoose = require("mongoose");
const validator = require("validator");
// const { default: Workspace } = require("../../client/src/Workspace");


const userworkspaceSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Not Valid Email")
            }
        }
    },
    workspace:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    }
});


// user otp model
const userworkspace = new mongoose.model("userworkspace",userworkspaceSchema);

module.exports = userworkspace