const { Project } = require('../models/project.model');
const express = require('express');
const router = express.Router();

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