const { Project } = require('../models/project.model');
const express = require('express');
const router = express.Router();
module.export.getAllProjectOfUser=async(req,res)=>{
    try {
        const { workspaceId, userId } = req.query;

        // Query projects based on workspaceId and userId
        const projects = await Project.find({
            workspaceID: workspaceId,
            memberIDs: userId
        }, 'name');

        // Extract project names from retrieved documents
        const projectNames = projects.map(project => project.name);

        // Send the list of project names as a response
        res.status(200).json(projectNames);
    } catch (error) {
        console.error('Error fetching project names:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}