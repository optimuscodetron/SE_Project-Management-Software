const { Workspace } = require("../models/workspace.model");
const express = require("express");
const router = express.Router();
const {User}=require("../models/user.model")

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

exports.WorkspaceSetting = async (req, res) => {
  try {
    
  } catch (error) {

  }
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

    // Delete the workspace
    const deletedWorkspace = await Workspace.findOneAndDelete({
      _id: activeWorkspaceId,
      adminuserId: userId
    });

    if (!deletedWorkspace) {
      return res.status(404).json({ message: "Workspace not found or user is not authorized to delete" });
    }

    // Send success response
    res.status(200).json({ message: "Workspace deleted successfully" });
  } catch (error) {
    console.error("Error deleting workspace:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
