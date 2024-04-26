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
            priority:req.body.priority,
            projectId:project1._id,
            creationDate:req.body.targetDate,
            dueDate:req.body.targetDate,
            label: req.body.label,
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

module.exports.getAllIssuesOfSignedInUser = async (req, res) => {
    try {
        const userId = req.userId; // Assuming userId is extracted from authentication middleware

        // Find all projects where the user is a member
        const projects = await Project.find({ memberIDs: userId });

        // Extract project IDs from the projects found
        const projectIds = projects.map(project => project._id);

        // Retrieve all issues associated with those project IDs and assigned to the user
        const issues = await Issue.find({ 
            projectId: { $in: projectIds }, 
            assigneeUserID: userId 
        })
        .populate('assigneeUserID', 'username') // Populate the username of the assignee
        .populate('projectId', 'title'); // Populate the title of the project

        const formattedMessages = issues.map(issue => ({
            id: issue._id, // Unique identifier of the issue
            title: issue.title, // Title of the issue
            description: issue.description, // Description of the issue
            creator: issue.creator ? issue.creator.username : null, // Username of the creator if available
            assigneeUsername: issue.assigneeUserID ? issue.assigneeUserID.username : null, // Username of the assignee if available
            stage: issue.stage, // Stage of the issue (e.g., Backlog, ToDo, InProgress, Done, Cancelled)
            priority: issue.priority, // Priority of the issue (e.g., Lowest, Low, High, Highest)
            dueDate: issue.dueDate, // Due date of the issue
            projectId: issue.projectId ? issue.projectId._id : null, // ID of the project to which the issue belongs
            projectTitle: issue.projectId ? issue.projectId.title : null // Title of the project to which the issue belongs
        }));
        
        // formattedMessages is an array containing formatted data of all the issues
        

        // Send the list of issues as a response
        res.status(200).json({ messages: formattedMessages });
    } catch (error) {
        console.error('Error fetching issues of signed-in user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


exports.getIssue = async (req, res) => {
    const { activeIssueId } = req.query;
  
    try {
     
      const issue = await Issue.findById(activeIssueId).exec();
  
      if (!issue) {
        return res.status(404).json({ message: "Issue not found" });
      }
  
      
      const assigneeUserId = issue.assigneeUserID;
  
      if (!assigneeUserId) {
        return res
          .status(404)
          .json({ message: "Assignee not found for this issue" });
      }
  
     
      const user = await User.findOne({ _id: assigneeUserId }).exec();
  
      if (!user) {
        return res.status(404).json({ message: "Assignee user not found" });
      }
  
     
      return res.status(200).json({ issue, assigneeUser: user });
    } catch (error) {
      console.error("Error fetching issue:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  // piyush
  exports.assigneDetails = async (req, res) => {
    const { id, projectId } = req.query;
    try {
      const user = await User.findOne({ _id: id }).exec();
      const project = await Project.findOne({ _id: projectId }).exec();
      if (!user) {
        return res.status(404).json({ message: "Assignee user not found" });
      }
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      res.status(200).json({ user, projectName: project.name });
    } catch (error) {
      console.error("Error fetching issue:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  
  
  
  
  
  // piyush
  exports.addComment = async (req, res) => {
    const { issueId, comment } = req.body;
  
    try {
   
      const issue = await Issue.findById(issueId);
  
      if (!issue) {
        return res.status(404).json({ message: "Issue not found" });
      }
  
     
      issue.comments.push(comment);
  
      
      await issue.save();
  
     
      return res.status(200).json({ issue });
    } catch (error) {
      console.error("Error adding comment:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  
  // piyush
  exports.getComments = async (req, res) => {
    const { issueId } = req.query;
  
    try {
      // Find the issue by issueId
      const issue = await Issue.findById(issueId);
  
      if (!issue) {
        return res.status(404).json({ message: "Issue not found" });
      }
  
      
      return res.status(200).json({ comments: issue.comments });
    } catch (error) {
      console.error("Error fetching comments:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  // piyush
  exports.updateIssueDescription = async (req, res) => {
    const { issueId, update } = req.body;
  
    try {
      
      const issue = await Issue.findByIdAndUpdate(issueId, update, { new: true });
  
      if (!issue) {
        return res.status(404).json({ message: "Issue not found" });
      }
  
      // Return the updated issue
      return res.status(200).json({ issue });
    } catch (error) {
      console.error("Error updating issue:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

