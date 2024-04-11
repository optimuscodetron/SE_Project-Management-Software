const mongoose = require("mongoose");

 
const issueSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    assigneeUserID :{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    stage:{
        type:String,
        enum:['Backlog','ToDo','InProgress','Done','Cancelled'],
        required:true
    },
    label:
    {type:String
    },
    priority:{
        type:String,
        enum:['Lowest','Low','High','Highest'],
        required:true
    },
    cycleId:{
     type:mongoose.Schema.Types.ObjectId,
     ref:'Cycle'
    },
    dueDate:Date,
    projectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Project',
        required:true
    },
    creationDate:{
    type:Date,
    required:true
    }

},{timestamps: true})
module.exports.Issue = mongoose.model('Issue', issueSchema);
