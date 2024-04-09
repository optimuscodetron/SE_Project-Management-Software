const { Workspace } = require("../models/workspace.model");
const { Project } = require("../models/project.model");
const { Issue } = require('../models/issue.model');

const express = require("express");
const router = express.Router();

module.exports.getAllWorkspaceOfUser = async (req, res) => {
  try {
    // console.log(req.cookies);
    const user_id = req.userId;

    // Query the Workspace collection to find all workspaces where the user is either the admin or a member
    const workspaces = await Workspace.find({
      $or: [
        { adminuserId: user_id }, // User is the admin of the workspace
        { members: user_id }, // User is a member of the workspace
      ],
    });

    // Return the list of workspaces associated with the user
    const workspaceData = workspaces.map((workspace) => ({
      name: workspace.name,
      id: workspace._id,
    }));

    console.log(workspaceData);
    res.status(200).json({ workspaces: workspaceData });
  } catch (error) {
    console.error("Error fetching workspaces:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.saveworskapce = async (req, res) => {
  // console.log(req.adminuserId)
  const id = req.userId;
  req.body.members = [];
  req.body.adminuserId = id;
  req.body.members.push(id);
  // const data=await User.findById(req.adminuserId);
  // console.log(data);
  Workspace.create(req.body)
    .then((Workspace) => {
      res.json({
        message: "Workspace Successfully created!",
        workspace: Workspace,
      });
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.getActiveWorkspaceOfUser = async (req, res) => {
  try {
    const user_id = req.userId;
    //  console.log(req.cookies);
    // console.log("pk",user_id)
    const activeWorkspaceId = req.query.activeWorkspaceId;

    // Query the Workspace collection to find the active workspace
    const workspace = await Workspace.findOne({
      $or: [
        { adminuserId: user_id, _id: activeWorkspaceId },
        { members: user_id, _id: activeWorkspaceId },
      ],
    });

    if (!workspace) {
      return res.status(404).json({ message: "Active workspace not found" });
    }

    // Return the active workspace
    res.status(200).json(workspace);
  } catch (error) {
    console.error("Error fetching active workspace:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports.getAllIssuesWorkspace = async (req, res) => {
  try {
    const activeWorkspaceId = req.query.activeWorkspaceId;
  
    const projects = await Project.find({ workspaceId: activeWorkspaceId });

    const allIssues = await Issue.find({ projectId: { $in: projects.map(project => project._id) } });

    res.status(200).json(allIssues);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports.updateWorkspaceSetting = async (req, res) => {
  try {
    const userId = req.userId; // Assuming userId is set in the authentication middleware

    // Extracting data from the request body
    const { activeWorkspaceId, newName, newUrl } = req.body;

    // Validate if all required fields are present
    if (!activeWorkspaceId || !newName || !newUrl) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Update the workspace
    const updatedWorkspace = await Workspace.findOneAndUpdate(
      { _id: activeWorkspaceId, adminuserId: userId }, // Query condition
      { name: newName, url: newUrl }, // New data to be updated
      { new: true } // Return the updated document
    );

    if (!updatedWorkspace) {
      return res
        .status(404)
        .json({
          message: "Workspace not found or user is not authorized to update",
        });
    }

    // Send the updated workspace as response
    res.status(200).json(updatedWorkspace);
  } catch (error) {
    console.error("Error updating workspace settings:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};





module.exports.deleteWorkspaceSetting = async (req, res) => {
  try {
    const userId = req.userId; // Assuming userId is set in the authentication middleware

    // Extracting the active workspace ID from the request parameters or user's session
    const activeWorkspaceId = req.query.activeWorkspaceId;

    // Find the workspace
    const workspace = await Workspace.findOne({
      _id: activeWorkspaceId,
      adminuserId: userId
    });

    if (!workspace) {
      return res.status(404).json({ message: "Workspace not found or user is not authorized to delete" });
    }

    // Find all projects associated with the workspace
    const projects = await Project.find({ workspaceID: workspace._id });

    // Delete all issues associated with each project
    for (let project of projects) {
      await Issue.deleteMany({ projectId: project._id });
    }

    // Delete all projects associated with the workspace
    await Project.deleteMany({ workspaceID: workspace._id });

    // Delete the workspace
    const deletedWorkspace = await Workspace.findOneAndDelete({
      _id: activeWorkspaceId,
      adminuserId: userId
    });

    // Send success response
    res.status(200).json({ message: "Workspace, associated projects, and issues deleted successfully" });
  } catch (error) {
    console.error("Error deleting workspace, associated projects, and issues:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};




module.exports.getAllMemberOfWorkspace = async (req, res) => {
  try {
    const { workspaceId } = req.body;
    if (!workspaceId) {
      return res.status(400).json({ message: 'Workspace ID is required' });
    }

    // Find the workspace by ID
    const workspace = await Workspace.findById(workspaceId).populate('members', 'username');

    if (!workspace) {
      return res.status(404).json({ message: 'Workspace not found' });
    }

    // Get the members array from the workspace
    const members = workspace.members.map(member => ({
      _id: member._id,
      username: member.username
    }));
    console.log(members);
    res.status(200).json({ members:members });
  } catch (error) {
    console.error('Error fetching workspace members:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
  

}        