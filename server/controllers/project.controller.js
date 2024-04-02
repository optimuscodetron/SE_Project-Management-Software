const { Project } = require('../models/project.model');
const express = require('express');
const router = express.Router();
const { User } = require('../models/user.model');
const { Workspace } = require('../models/workspace.model');
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

    console.log("craeteProject Frontend Data"+req.body);
    const { name, description, workspaceID, memberIDs, startDate, targetDate, status } = req.body;

    try{
        const newProject = new Project({
            name,
            description,
            workspaceID,
            memberIDs,
            startDate,
            targetDate,
            status
        });
        const savedProject = await newProject.save();

        await Workspace.findByIdAndUpdate(workspaceID, { $push: { projects: savedProject._id } });

        res.status(201).json({message:"Project saved successfully",projectid:savedProject._id});


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
        
        const projectID = req.body.projectID || req.params.projectID;
        if (!projectID) {
            return res.status(400).json({ error: "Project ID is required" });
        }
        const project = await Project.findById(projectID);
        if (!project) {
            return res.status(404).json({ error: "Project not found" });
        }
        res.status(200).json({ project });
    } catch (error) {
        
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
    
}

module.exports.projectUpdateInfo=async(req,res)=>{
    try {
        
        const projectID = req.body.projectID || req.params.projectID;
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

module.exports.getUser = async (req, res) => {
    try {
        // Retrieve userID from request parameters
        const userID = req.body.userID || req.params.userID;

        // Check if userID is provided
        if (!userID) {
            return res.status(400).json({ error: "User ID is required" });
        }

        // Find the user by userID
        const user = await User.findById(userID);

        // Check if user exists
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // If user is found, send userID, name, and email in the response
        const userData = {
            userID: user._id,
            name: user.name,
            email: user.email
        };

        res.status(200).json(userData);
    } catch (error) {
        // Handle errors
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

