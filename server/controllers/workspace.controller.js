const {Workspace}=require("../models/workspace.model");
exports.saveworskapce=async(req,res)=>{
    // console.log(req.adminuserId)
    const id=req.adminuserId;
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