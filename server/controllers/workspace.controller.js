const { Workspace } = require("../models/workspace.model");
const { Project } = require("../models/project.model");
const {Issue}=require("../models/issue.model")
const {User}=require("../models/user.model")
const nodemailer = require('nodemailer');


const express = require("express");
const router = express.Router();


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: '2021csb1107@iitrpr.ac.in', // Update with your email
    pass: 'KUSHagra08092004@', // Update with your email password
  },
});

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
      url:workspace.url
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
    const activeWorkspaceId1= req.query.activeWorkspaceId;
  
    const projects = await Project.find({ workspaceID: activeWorkspaceId1 });

    const allIssues = await Issue.find({ projectId: { $in: projects.map(project => project._id) } });

    const issuesWithUsernames = await Promise.all(allIssues.map(async (issue) => {
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
          assignee: assigneeUser ? assigneeUser.username : null, // Assuming username field in User model
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
  console.log("hhh"+issuesWithUsernames);
    res.status(200).json(issuesWithUsernames);
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
    const workspace = await Workspace.findById(workspaceId)
      .populate('adminuserId', 'id name email username') // Populate admin details with username
      .populate('members', 'id name email username'); // Populate members details with username

    if (!workspace) {
      return res.status(404).json({ message: 'Workspace not found' });
    }

    // Extract admin details
    // const admin = {
    //   id: workspace.adminuserId._id,
    //   name: workspace.adminuserId.name,
    //   email: workspace.adminuserId.email,
    //   username: workspace.adminuserId.username,
    //   role: 'admin'
    // };

    // Extract members details with their roles
    const members = workspace.members.map(member => ({
      id: member._id,
      name: member.name,
      email: member.email,
      username: member.username,
      role: member._id.equals(workspace.adminuserId._id) ? 'admin' : 'member'
    }));

    // Combine admin and members into a single array
    // const allMembers = [admin, ...members];

    res.status(200).json({ members: members });
  } catch (error) {
    console.error('Error fetching workspace members:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
  

}        

exports.removeMemberFromWorkspace = async (req, res) => {
  try {
    const { workspaceId, memberId } = req.body;
    const userId = req.userId;
  
    // Find the workspace by ID
    const workspace = await Workspace.findById(workspaceId);
  
    if (!workspace) {
      return res.status(404).json({ message: 'Workspace not found' });
    }
  
    // Check if the user is the admin of the workspace
    if (workspace.adminuserId.toString() !== userId) {
      return res.status(403).json({ message: 'Only the workspace admin can remove members' });
    }
    if(workspace.adminuserId.toString()===memberId){
      return res.status(403).json({ message: 'Delete workspace!Admin can\'t assign' });
    }
  
    // Remove the member from the workspace's members array
    workspace.members = workspace.members.filter(id => id.toString() !== memberId);
  
    // Iterate through all projects within the workspace
    const projects = await Project.find({ workspaceID: workspaceId });
  
    // Remove the member from each project's memberIDs array
    for (const project of projects) {
      project.memberIDs = project.memberIDs.filter(id => id.toString() !== memberId);
  
      await project.save();
    }
  
    // Save the updated workspace
    await workspace.save();
  
    res.status(200).json({ message: 'Member removed from workspace and projects successfully' });
  } catch (error) {
    console.error('Error removing member:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.addMemberByEmail = async (req, res) => {
  try {
    const { workspaceId, email } = req.body;
    const userId = req.userId; // Assuming you have the userId from authentication

    // Find the workspace by ID and check if the user is the admin
    const workspace = await Workspace.findById(workspaceId);
    if (!workspace || workspace.adminuserId.toString() !== userId) {
      return res.status(403).json({ message: 'Only the workspace admin can add members' });
    }

    // Check if the provided email exists in the database
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found in the database' });
    }

    // Send email invitation to the user
    const mailOptions = {
      from: '2021csb1107@iitrpr.ac.in',
      to: email,
      subject: `Invitation to join ${workspace.name} workspace`,
      text: `Hello ${existingUser.name},\n\nYou have been invited to join the ${workspace.name} workspace.\n\nPlease click on the following link to accept the invitation: http://your-frontend-url/accept-invitation/${workspaceId}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending email' });
      } else {
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Email invitation sent successfully' });
      }
    });
  } catch (error) {
    console.error('Error adding member by email:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
