const mongoose = require("mongoose");


const cycleSchema=new mongoose.Schema({
    projectID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Project',
        required:true
    },
    period:{
        type:[Date],
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    issueId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Issue'
    }]

},{timestamps: true},)

module.exports.Cycle = mongoose.model('Cycle', cycleSchema);
