import React from "react";
// import WorkspaceSidebar from "./components/workspaceSidebar/workspaceSidebar";
// import Navbar from "../Components/Layout/navbar/navbar";
import { useState } from "react";
import Current_Cycles from "./CurrentCycles/CurrentCycles";
import Invite from "../Invite/Invite";

export default function Project() {
  // const [showSideBar, setShowSideBar] = useState(false);
  // const showSideBarHandler = () => {
  //   setShowSideBar((prevState) => !prevState);
  // };

  const [openInviteMembers , setOpenInviteMembers] = useState(false);

  const openInviteMembersHandler=() => {
      setOpenInviteMembers(true)
  }
  const closeInviteMembersHandler=() => {
    setOpenInviteMembers(false)
}

  return (
    <div className="flex flex-col">
      {/* <Navbar showSideBarHandler={showSideBarHandler} /> */}
      <div className="flex flex-row">
        {/* <div className="w-fit">
        <WorkspaceSidebar onOpenInviteMembers={openInviteMembersHandler} showSideBar={showSideBar} />
        </div> */}
        {/* Main content goes here */}
        <div className="overflow-x-scroll ">
          <Current_Cycles/>
        </div>
        <div className="flex-1">
        {openInviteMembers  && <Invite onCloseInviteMembers={closeInviteMembersHandler}/>}
      </div>
      </div>
    </div>
  );
}
