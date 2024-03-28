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

    console.log(req.body);
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

        res.status(201).json({message:"Project saved successfully"});


    }
    catch(err){
        console.error('Error while creating project:', err);
        res.status(500).json({ message: 'Internal server error' });

    }
}