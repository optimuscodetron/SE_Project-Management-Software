import React from "react";
import WorkspaceSidebar from "./components/workspaceSidebar/workspaceSidebar";
import Navbar from "../Components/Layout/navbar/navbar";
import { useState } from "react";
import WorkspaceIssues from "./workspaceIssues/workspaceIssues";
import Invite from "../Invite/Invite";
import CreateNewProject from "./CreateNewProject/CreateNewProject";
import Header from "../Components/header/header";
export default function Workspace() {
  const [showSideBar, setShowSideBar] = useState(true);
  const showSideBarHandler = () => {
    setShowSideBar((prevState) => !prevState);
  };

  const [showFilterSidebar,setShowFilterSidebar]=useState(false);

  const handleShowFilterSidebar=()=>{
      setShowFilterSidebar(!showFilterSidebar);
  }

  const [openInviteMembers , setOpenInviteMembers] = useState(false);
  const openInviteMembersHandler=() => {
    setOpenInviteMembers(true)
  }
  const closeInviteMembersHandler=() => {
    setOpenInviteMembers(false)
  }
  
  const [createProject , setCreateProject] = useState(false);
  const openCreateProject=() => {
      setCreateProject(true)
  }
  const closeCreateProject=() => {
    setCreateProject(false)
}

  const [headerInfo, setHeaderInfo]=useState([]);
  const currentWorkspaceHandler=(item)=>{
    console.log(item);
    setHeaderInfo([{ 
      headerIcon: item.headerIcon,
      headerTitle: item.headerTitle,
    }]);
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1">
      <Navbar showSideBarHandler={showSideBarHandler} />
      </div>
      <div className="flex flex-row">
        
        <div className="">
          {showSideBar&&
        <WorkspaceSidebar onOpenInviteMembers={openInviteMembersHandler} onOpenCreateProject={openCreateProject} showSideBar={showSideBar} currentWorkspace={currentWorkspaceHandler} />
          }
        </div>
        {/* Main content goes here */}
        <div className="overflow-x-scroll">
          <Header headerInfo={headerInfo} handleShowFilterSidebar={handleShowFilterSidebar}/>
          <WorkspaceIssues showFilterSidebar={showFilterSidebar} />
        </div>

        <div className="flex-1">
        {openInviteMembers  && <Invite onCloseInviteMembers={closeInviteMembersHandler}/>}
        {createProject  && <CreateNewProject onCloseCreateProject={closeCreateProject}/>}
       </div>

          

      </div>
    </div>
  );
}
