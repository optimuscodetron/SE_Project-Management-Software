const { Project } = require('../models/project.model');
const express = require('express');
const router = express.Router();
const { User } = require('../models/user.model');
const { Workspace } = require('../models/workspace.model');
const { Issue } = require('../models/issue.model');
module.exports.getAllProjectOfUser = async (req, res) => {
    try {
        const { workspaceId } = req.body;

        const userId = req.userId;
        console.log(userId);
        console.log(workspaceId);

        // console.log(req.body);


        // Query projects based on workspaceId and userId
        const projects = await Project.find({
            workspaceID: workspaceId,
            memberIDs:   userId 
        });


        // Extract project names from retrieved documents
        const projectData = projects.map(project => ({
            name: project.name,
            id: project._id
        }));
        console.log(projectData);
        // Send the list of project names as a response
        res.status(200).json({ project : projectData });
    } catch (error) {
        console.error('Error fetching project names:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

module.exports.createProject=async(req,res)=>{
    // console.log("88");

    console.log(req.body);
    const { name, description, workspaceID, memberIDs, startDate, targetDate, status,lead } = req.body;
    if(memberIDs.includes(lead)===false){
        memberIDs.push(lead);
    }

    try{
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

        res.status(201).json({message:"Project created successfully"});


    }
    catch(err){
        console.error('Error while creating project:', err);
        res.status(500).json({ message: 'Internal server error' });

    }
}

module.exports.fetchallmembers=async(req,res)=>{
    const projectId = req.body.projectid;
    console.log(req.body);
    const id=req.userId;
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

        res.json({ message: "Members list Successfully fetched!", members: usernames ,id:id});
    } catch (err) {
        res.status(400).json(err);
    }


}


module.exports.projectInfo=async(req,res)=>{
    try {
    
        const projectID = req.body.projectID;
        console.log(projectID+"**");
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
            select: 'name email _id' // Only select name and email fields, excluding _id
        });
        const members = projectMembers.memberIDs.map(member => ({
            id: member._id,
            name: member.name,
            email: member.email,
            role: member._id.equals(project.lead) ? 'Admin' : 'Member' // Check if member is lead or not
        }));
        res.status(200).json({ 
            project:project, 
            members:members
        });
    } catch (error) {
        
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
    
}

module.exports.projectUpdateInfo=async(req,res)=>{
    try {
        
        const projectID = req.body.projectID;
        if (!projectID) {
            return res.status(400).json({ error: "Project ID is required" });
        }
        let project = await Project.findById(projectID);
        if (!project) {
            return res.status(404).json({ error: "Project not found" });
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
        const { projectId } = req.body;

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
            

             return {
                _id: issue._id,
                title: issue.title,
                description: issue.description,
                assigneeUserID: issue.assigneeUserID,
                assigneeUsername: assigneeUser ? assigneeUser.username : null, // Assuming username field in User model
                creator: issue.creator,
                creatorUsername: creatorUser ? creatorUser.username : null, // Assuming username field in User model
                stage: issue.stage,
                label: issue.label,
                priority: issue.priority,
                cycleId: issue.cycleId,
                dueDate: issue.dueDate,
                projectId: issue.projectId,
                creationDate: issue.creationDate
            }; // Convert to plain JavaScript object
        }));

        // Return the modified list of issues with usernames
        res.status(200).json({issues:issuesWithUsernames});
    
    } catch (error) {
        console.error('Error fetching project names:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

