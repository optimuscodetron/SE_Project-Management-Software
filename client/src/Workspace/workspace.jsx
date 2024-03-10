import React from "react";
import WorkspaceSidebar from "./components/workspaceSidebar/workspaceSidebar";
import Navbar from "../Components/Layout/navbar";
import { useState } from "react";
export default function Workspace() {
  const [showSideBar, setShowSideBar] = useState(false);
  const showSideBarHandler = () => {
    setShowSideBar((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <Navbar showSideBarHandler={showSideBarHandler} />
      <WorkspaceSidebar showSideBar={showSideBar} />
      {/* Main content goes here */}
      <div className="flex-1"></div>
    </div>
  );  
}
