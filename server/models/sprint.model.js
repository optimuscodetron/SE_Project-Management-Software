const mongoose = require("mongoose");


const sprintSchema=new mongoose.Schema({
    projectID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Project',
        required:true
    },
    name:{
        type:String,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true,
    },
    issueId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Issue'
    }]

},{timestamps: true},)

module.exports.Sprint = mongoose.model('Sprint', sprintSchema);
