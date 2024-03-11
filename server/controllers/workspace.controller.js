const { Workspace }=require("../models/workspace.model");
const express = require('express');
const router = express.Router();

module.exports.getAllWorkspaceOfUser = async (req, res) => {
    try {
        // console.log(req.cookies);
        const user_id = req.userId;

        // Query the Workspace collection to find all workspaces where the user is either the admin or a member
        const workspaces = await Workspace.find({
            $or: [
                {adminuserId: user_id},  // User is the admin of the workspace
                { members: user_id } // User is a member of the workspace
            ]
        });

        // Return the list of workspaces associated with the user
        const workspaceData = workspaces.map(workspace => ({
            name: workspace.name,
            id: workspace._id
        }));
        
        console.log(workspaceData);
        res.status(200).json({ workspaces: workspaceData });

    } catch (error) {
        console.error('Error fetching workspaces:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

exports.saveworskapce=async(req,res)=>{
    // console.log(req.adminuserId)
    const id=req.userId;
    req.body.members=[];
    req.body.adminuserId=id;
    req.body.members.push(id);
    // const data=await User.findById(req.adminuserId);
    // console.log(data);
    Workspace.create(req.body)
    .then((Workspace) => {
      res
      
        .json({ message: "Workspace Successfully created!", workspace: Workspace });
    })
    .catch((err) => res.status(400).json(err));
  }