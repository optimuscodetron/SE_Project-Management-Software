const { Project } = require('../models/project.model');
const express = require('express');
const router = express.Router();
const { User } = require('../models/user.model');
const { Workspace } = require('../models/workspace.model');
const { Issue } = require('../models/issue.model');
const {Sprint} =require('../models/sprint.model');
module.exports.getAllProjectOfUser = async (req, res) => {
    try {
        const { workspaceId } = req.body;

        const userId = req.userId;
        console.log(1234);
        console.log(userId);
        console.log(workspaceId);

        // console.log(req.body);


        // Query projects based on workspaceId and userId
        const projects = await Project.find({
            workspaceID: workspaceId,
            memberIDs: userId
        });


        // Extract project names from retrieved documents
        const projectData = projects.map(project => ({
            name: project.name,
            id: project._id
        }));
        console.log(projectData);
        // Send the list of project names as a response
        res.status(200).json({ project: projectData });
    } catch (error) {
        console.error('Error fetching project names:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

module.exports.createProject = async (req, res) => {
    // console.log("88");

    console.log(req.body);
    const { name, description, workspaceID, memberIDs, startDate, targetDate, status, lead } = req.body;
    if (memberIDs.includes(lead) === false) {
        memberIDs.push(lead);
    }

    try {
        const newProject = new Project({
            name,
            description,
            workspaceID,
            memberIDs,
            startDate,
            targetDate,
            status,
            lead
        });
        console.log()
        const savedProject = await newProject.save();

        await Workspace.findByIdAndUpdate(workspaceID, { $push: { projects: savedProject._id } });

        res.status(201).json({ message: "Project created successfully" });


    }
    catch (err) {
        console.error('Error while creating project:', err);
        res.status(500).json({ message: 'Internal server error' });

    }
}

module.exports.createSprint=async(req,res)=>{
    try {
        const { projectID, name, startDate, endDate } = req.body;
        const userId = req.userId;

        // Check if projectId is provided
        if (!projectID) {
            return res.status(400).json({ error: 'Project ID is required' });
        }

        // Find the project by projectId
        const project = await Project.findById(projectID);

        // If project doesn't exist, return error
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        else if(project.lead!=userId){
            return res.status(505).json({ error: 'Only lead can create sprint' });
        }

        const sprint = new Sprint({
            projectID,
            name,
            startDate,
            endDate
        });

        await sprint.save();

        project.sprintIDs.push(sprint._id);
        await project.save();

        res.status(201).json({ message: 'Sprint created successfully', sprint: sprint });
    } catch (error) {
        console.error('Failed to create sprint:', error);
        res.status(500).json({ error: 'Failed to create sprint' });
    }
};

module.exports.getSprintList = async (req, res) => {
  try {
    const { projectID } = req.body;
    // console.log(projectID);
    const sprintList = await Sprint.find({ projectID })
      .select('_id name startDate endDate')
      .exec();

    // Check if sprints are found
    if (!sprintList) {
      return res.status(404).json({ error: 'No sprints found for the specified project' });
    }

    // Send the list of sprints in the response
    console.log("sprint: "+sprintList);
    res.status(200).json({ sprintList });
  } catch (error) {
    console.error("Failed to get sprint list:", error);
    res.status(500).json({ error: "Failed to get sprint list" });
  }
};


module.exports.fetchallmembers = async (req, res) => {
    const projectId = req.body.projectid;
    console.log(req.body);
    const id = req.userId;
    console.log(id);
    try {

        const project = await Project.findOne({ _id: projectId });
        console.log(project)

        const memberIds = project.memberIDs;
        // console.log(memberIds);

        const memberUsernames = await User.find({ _id: { $in: memberIds } }).select('username');
        console.log(memberUsernames)

        const usernames = memberUsernames.map(user => user.username);
        // console.log(usernames);

        res.json({ message: "Members list Successfully fetched!", members: usernames, id: id });
    } catch (err) {
        res.status(400).json(err);
    }


}


module.exports.projectInfo = async (req, res) => {
    try {

        const projectID = req.body.projectID;
        console.log(projectID + "**");
        if (!projectID) {
            return res.status(400).json({ error: "Project ID is required" });
        }
        console.log("*");
        const project = await Project.findById(projectID);
        if (!project) {
            return res.status(404).json({ error: "Project not found" });
        }
        const projectMembers = await Project.findById(projectID).populate({
            path: 'memberIDs',
            select: 'name email _id username' // Only select name and email fields, excluding _id
        });
        const members = projectMembers.memberIDs.map(member => ({
            id: member._id,
            name: member.name,
            email: member.email,
            username: member.username,
            role: member._id.equals(project.lead) ? 'Admin' : 'Member' // Check if member is lead or not
        }));
        console.log(members);
        console.log(project);
        res.status(200).json({
            project: project,
            members: members
        });
    } catch (error) {

        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }

}

module.exports.projectUpdateInfo = async (req, res) => {
    try {

        const projectID = req.body.projectID;
        const userId = req.userId;
        if (!projectID) {
            return res.status(400).json({ error: "Project ID is required" });
        }
        let project = await Project.findById(projectID);
        if (!project) {
            return res.status(404).json({ error: "Project not found" });
        }
        else if(project.lead!=userId){
            return res.status(201).json({ error: "Only lead can create sprint" });
        }
        if (req.body.name) {
            project.name = req.body.name;
        }
        if (req.body.description) {
            project.description = req.body.description;
        }
        if (req.body.status) {
            project.status = req.body.status;
        }
        project = await project.save();
        res.status(200).json({ project });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }

}



module.exports.allIssues = async (req, res) => {
    try {
        const { projectId } = req.params;

        // Fetch all issues associated with the provided projectId
        const issues = await Issue.find({ projectId });

        // Get usernames of creator and assignee users
        const issuesWithUsernames = await Promise.all(issues.map(async (issue) => {
            // console.log(issue.creator);
            const creatorUser = await User.findById(issue.creator);
            const assigneeUser = await User.findById(issue.assigneeUserID);
            // console.log(assigneeUser.username);


            // Add creator's username to the issue object
            issue.creatorUsername = creatorUser ? creatorUser.username : null;

            // Add assignee's username to the issue object
            issue.assigneeUsername = assigneeUser ? assigneeUser.username : null;
            issue.assigneename=assigneeUser?assigneeUser.name:null;


            return {
                _id: issue._id,
                title: issue.title,
                description: issue.description,
                assigneeUserID: issue.assigneeUserID,
                assignee: assigneeUser ? assigneeUser.username : null, // Assuming username field in User model
                assigneename:assigneeUser ? assigneeUser.name:null,
                creator: issue.creator,
                creatorUsername: creatorUser ? creatorUser.username : null, // Assuming username field in User model
                stage: issue.stage,
                label: issue.label,
                priority: issue.priority,
                sprintId: issue.sprintId,
                dueDate: issue.dueDate,
                projectId: issue.projectId,
                creationDate: issue.creationDate
            }; // Convert to plain JavaScript object
        }));

        // Return the modified list of issues with usernames
        res.status(200).json({ issues: issuesWithUsernames });

    } catch (error) {
        console.error('Error fetching project names:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}


module.exports.addMemberToProject = async (req, res) => {

    try {
        const { projectId, email } = req.body;
        console.log(req.body);
        const userId = req.userId;

        // Find the user by email to get the userId
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Add the userId to the project's memberIDs array
        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        if (project.lead.toString() !== userId) {
            return res.status(403).json({ message: 'Only the project lead can add members' });
        }

        // Check if the user is already a member of the project
        if (project.memberIDs.includes(user._id)) {
            return res.status(400).json({ message: 'User is already a member of the project' });
        }
        const member = {
            id: user._id,
            name: user.name,
            email: user.email,
            username: user.username,
            role: 'member',
          };      

        // Add the userId to the project's memberIDs array
        project.memberIDs.push(user._id);
        await project.save();

        res.status(200).json({ message: 'Member added to the project successfully' ,member});
    } catch (error) {
        console.error('Error adding member to project:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

};

exports.removeMemberFromProject = async (req, res) => {
    try {
        console.log('hello');
        const { projectId, memberId } = req.body;
        const userId = req.userId;
        console.log(memberId);
        console.log(typeof(memberId));
    
        // Find the project by ID
        const project = await Project.findById(projectId);
    
        if (!project) {
          return res.status(404).json({ message: 'Project not found' });
        }
        if (project.lead.toString() !== userId) {
            return res.status(403).json({ message: 'Only the project lead can remove members' });
          }
          if(project.lead.toString()===memberId){
            return res.status(403).json({ message: 'Delete project!Project lead can not assign' });
          }
    
        // Remove the member from the project's memberIDs array
        project.memberIDs = await project.memberIDs.filter(id => id.toString() !== memberId);
        console.log(project.memberIDs);
    
        // Save the updated project
        await project.save();
    
        res.status(200).json({ message: 'Member removed from project successfully' });
      } catch (error) {
        console.error('Error removing member from project:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
  };
