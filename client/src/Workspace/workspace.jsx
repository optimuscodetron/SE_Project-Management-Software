import React from "react";
import WorkspaceSidebar from "./components/workspaceSidebar/workspaceSidebar";
import Navbar from "../Components/Layout/navbar/navbar";
import { useState } from "react";
import WorkspaceIssues from "./workspaceIssues/workspaceIssues";
import Invite from "../Invite/Invite";
import CreateNewProject from "./CreateNewProject/CreateNewProject";

export default function Workspace() {
  const [showSideBar, setShowSideBar] = useState(false);
  const showSideBarHandler = () => {
    setShowSideBar((prevState) => !prevState);
  };

  const [openInviteMembers, setOpenInviteMembers] = useState(false);
  const [createProject, setCreateProject] = useState(false);

  const openInviteMembersHandler = () => {
    setOpenInviteMembers(true);
  };
  const closeInviteMembersHandler = () => {
    setOpenInviteMembers(false);
  };

  const openCreateProject = () => {
    setCreateProject(true);
  };
  const closeCreateProject = () => {
    setCreateProject(false);
  };

  return (
    <div className="flex flex-col">
      <Navbar showSideBarHandler={showSideBarHandler} />
      <div className="flex flex-row">
        <div className="w-fit">
          <WorkspaceSidebar
            onOpenInviteMembers={openInviteMembersHandler}
            onOpenCreateProject={openCreateProject}
            showSideBar={showSideBar}
          />
        </div>
        {/* Main content goes here */}
        <div className="overflow-x-scroll ">
          <WorkspaceIssues />
        </div>
        <div className="flex-1">
          {openInviteMembers && (
            <Invite onCloseInviteMembers={closeInviteMembersHandler} />
          )}
          {createProject && (
            <CreateNewProject onCloseCreateProject={closeCreateProject} />
          )}
        </div>
      </div>
    </div>
  );
}
