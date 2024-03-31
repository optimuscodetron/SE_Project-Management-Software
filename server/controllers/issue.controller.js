const { Issue } = require('../models/issue.model');
const { Project } = require('../models/project.model');
const { User } = require('../models/user.model');

const express = require('express');
const router = express.Router();

module.exports.getAllIssueOfWorkspace = async (req, res) => {
    try {
        const { workspaceId } = req.body;

        const userId = req.userId;
        console.log(userId);
        console.log(workspaceId);

        // console.log(req.body);


        // Find all projects within the given workspace
        const projects = await Project.find(
        {  
            workspaceID: workspaceId,
            memberIDs:   userId  
        });

        //  Extract project IDs from the projects found
        const projectIds = projects.map(project => project._id);

        console.log(projectIds);

        //  Retrieve all issues associated with those project IDs
        const issues = await Issue.find({ projectId: { $in: projectIds } });
        console.log(issues);

        // Send the list of issues as a response
        res.status(200).json({issues:issues});

        
    } catch (error) {
        console.error('Error fetching Issues :', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}
exports.createIssue = async (req, res) => {
    console.log(req.body);
    const creatorId = req.body.creator;
    const projectId = req.body.project;
    try {

        const user = await User.findOne({ _id: creatorId });
        // console.log(user);
 
        const newIssue = await Issue.create(req.body);
        const project=await Project.findOne({_id:projectId});
        console.log(project);


        const updatedProject = await Project.findOneAndUpdate(
            { _id: projectId },
            { $push: { issuesIDs: newIssue._id } },
            { new: true }
        );

        res.json({ message: "Issue Successfully created!", issue: newIssue, user: user, project: updatedProject });
    } catch (err) {
        res.status(400).json(err);
    }
}
