import React, { useEffect } from "react";
import WorkspaceSidebar from "./components/workspaceSidebar/workspaceSidebar";
import Navbar from "../Components/Layout/navbar/navbar";
import { useState } from "react";
import WorkspaceIssues from "./workspaceIssues/workspaceIssues";
import Invite from "../Invite/Invite";
import CreateNewProject from "./CreateNewProject/CreateNewProject";
import Header from "../Components/header/header";
import Inbox from "./Inbox/InboxSidebar";
import Loader from "../loading";
import { useNavigate } from "react-router-dom";
export default function Workspace() {
  const navigate = useNavigate();
  useEffect(() => {
    const isUserLoggedIn = () => {
      const cookies = document.cookie.split(";");
      console.log(document.cookie);
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith("usertoken=")) {
          const token = cookie.substring("usertoken=".length, cookie.length);
          // If token has some value, return true indicating user is logged in
          if (token) {
            return true;
          }
        }
      }
      // If no token found or token is empty, return false
      return false;
    };

    // Check if the user is logged in
    const isLoggedIn = isUserLoggedIn();
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      navigate("/login");
    }
  },[]);
  const [showSideBar, setShowSideBar] = useState(true);
  const [issue,setIssue] = useState(false);
  const showSideBarHandler = () => {
    setShowSideBar((prevState) => !prevState);
  };

  const [showFilterSidebar, setShowFilterSidebar] = useState(false);




  const handleShowFilterSidebar=(event)=>{
      event.preventDefault();
      setShowFilterSidebar(!showFilterSidebar);
  }


  const [openInviteMembers, setOpenInviteMembers] = useState(false);
  const openInviteMembersHandler = () => {
    setOpenInviteMembers(true);
  };
  const closeInviteMembersHandler = () => {
    setOpenInviteMembers(false);
  };

  const [createProject, setCreateProject] = useState(false);
  const openCreateProject = () => {
    setCreateProject(true);
  };
  const closeCreateProject = () => {
    setCreateProject(false);
  };

  const [headerInfo, setHeaderInfo] = useState([]);
  
  const currentWorkspaceHandler = (item) => {
    console.log(item);
    setHeaderInfo([
      {
        headerIcon: item.headerIcon,
        headerTitle: item.headerTitle,
      },
    ]);
  };

  const [openWorkspace, setOpenWorkspace] = useState(true);
  const openWorkspaceHandler = () => {
    setOpenInbox(false);
    setOpenWorkspace(true);
  };

  const [openInbox, setOpenInbox] = useState(false);
  const openInboxHandler = () => {
    setOpenWorkspace(false);
    setOpenInbox(true);
  };
  const closeInboxHandler = () => {
    setOpenInbox(false);
    setOpenWorkspace(true);
  };
  

  return (
    <div className="flex flex-col">
      {!issue && <Loader />}
      <div className="flex-1">
        <Navbar showSideBarHandler={showSideBarHandler} />
      </div>
      <div className="flex flex-row">
        <div className="">
          {showSideBar && (
            <WorkspaceSidebar
              onOpenInviteMembers={openInviteMembersHandler}
              onOpenCreateProject={openCreateProject}
              showSideBar={showSideBar}
              currentWorkspace={currentWorkspaceHandler}
              inboxOpened={openInboxHandler}
              openWorkspace={openWorkspaceHandler}
            />
          )}
        </div>
        {/* Main content goes here */}
        <div className="overflow-x-auto">
          <Header
            headerInfo={headerInfo}
            handleShowFilterSidebar={handleShowFilterSidebar}
          />

          {openWorkspace && (
            <WorkspaceIssues showFilterSidebar={showFilterSidebar} setIssue={setIssue} issue={issue}/>
          )}
          {openInbox && <Inbox onCloseInbox={closeInboxHandler} />}
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
