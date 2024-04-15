const mongoose = require("mongoose");


const cycleSchema=new mongoose.Schema({
    projectID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Project',
        required:true
    },
    name:{
        type:String,
        required:true
    },
    currentCycleStartDate:{
        type:Date,
        required:true
    },
    currentCycleEndDate:{
        type:Date,
        required:true,
    },
    issueId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Issue'
    }]

},{timestamps: true},)

module.exports.Cycle = mongoose.model('Cycle', cycleSchema);
