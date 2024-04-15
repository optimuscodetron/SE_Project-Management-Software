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
    const creatorId = req.userId;
    const projectId = req.body.projectId;
    const username=req.body.assignee;
    try {

        const user = await User.findOne({ _id: creatorId });
        const assignee=await User.findOne({username:username});
        const project1=await Project.findOne({_id:projectId});
        const data={
            title:req.body.projectName,
            description:req.body.description,
            assigneeUserID:assignee._id,
            creator:user._id,
            stage:"InProgress",
            priority:"High",
            projectId:project1._id,
            creationDate:req.body.targetDate,
            dueDate:req.body.targetDate,
        }
        console.log(data);
 
        const newIssue = await Issue.create(data);
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

exports.changeIssueStatus = async (req, res) => {
    try {
        // Extract the issue ID from the request parameters
        const { issueId } = req.params;

        // Extract the new status from the request body
        const { newStatus } = req.body;

        // Find the issue by its ID
        const issue = await Issue.findById(issueId);
        console.log(issue);

        // Check if the issue exists
        if (!issue) {
            return res.status(404).json({ message: 'Issue not found' });
        }

        // Update the status of the issue
        issue.stage = newStatus;

        // Save the updated issue
        await issue.save();

        // Send a success response
        res.status(200).json({ message: 'Issue status updated successfully' });
    } catch (error) {
        // Handle errors
        console.error('Error updating issue status:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
