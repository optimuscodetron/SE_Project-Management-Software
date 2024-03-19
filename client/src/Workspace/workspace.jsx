import React from "react";
import WorkspaceSidebar from "./components/workspaceSidebar/workspaceSidebar";
import Navbar from "../Components/Layout/navbar";
import { useState } from "react";
import Invite from "../Invite/Invite";
import MyModal
 from "./MyModal";
export default function Workspace() {
  const [showSideBar, setShowSideBar] = useState(false);
  const showSideBarHandler = () => {
    setShowSideBar((prevState) => !prevState);
  };
  const [openInviteMembers , setOpenInviteMembers] = useState(false);
  
  const openInviteMembersHandler=() => {
      setOpenInviteMembers(true)
  }
  const closeInviteMembersHandler=() => {
    setOpenInviteMembers(false)
}

  return (
    <div className="relative">
      <Navbar showSideBarHandler={showSideBarHandler} />
      <WorkspaceSidebar onOpenInviteMembers={openInviteMembersHandler} showSideBar={showSideBar} />
      {/* Main content goes here */}
      <div className="flex-1">
        {openInviteMembers  && <Invite onCloseInviteMembers={closeInviteMembersHandler}/>}
      </div>
      </div>
  );  
}
