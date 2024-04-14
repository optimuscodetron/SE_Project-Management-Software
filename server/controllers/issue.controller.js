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
            stage:"Inprogress",
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


exports.getIssue = async (req, res) => {
  const { activeIssueId } = req.query;

  try {
    // Find the issue by activeIssueId
    const issue = await Issue.findById(activeIssueId).exec();

    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }

    // Extract the assigneeUserID from the issue
    const assigneeUserId = issue.assigneeUserID;

    if (!assigneeUserId) {
      return res.status(404).json({ message: 'Assignee not found for this issue' });
    }

    // Find the user by assigneeUserId
    const user = await User.findOne({ _id: assigneeUserId }).exec();

    if (!user) {
      return res.status(404).json({ message: 'Assignee user not found' });
    }

    // Return the issue and the assignee user
    return res.status(200).json({ issue, assigneeUser: user });
  } catch (error) {
    console.error('Error fetching issue:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

