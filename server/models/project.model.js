const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    description:{
        type:String,
    },
    workspaceID:{
        type: Schema.Types.ObjectId,
        ref:'Worskpace',
        required:true
    },
    lead:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    issuesIDs:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Issue'
        }
    ],
    memberIDs:[
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    startDate:{
        type:Date,
        // required:true
    },
    targetDate:{
        type:Date,
        // required:true
    },
    isCycle:{
        type:Boolean,
        required:true,
        default:false
    },
    cycleIDs:[{
        type:Schema.Types.ObjectId,
       ref:'Cycle'
    }],
    status:{
        type:String,
        enum:['Backlog','Planned','In Progress','Completed','Cancelled'],
        default:'Backlog'
    },
    
}, {timestamps: true});

module.exports.Project = mongoose.model('Project', ProjectSchema);