import React from "react";
import WorkspaceSidebar from "./components/workspaceSidebar/workspaceSidebar";
import Navbar from "../Components/Layout/navbar/navbar";
import { useState } from "react";
import WorkspaceIssues from "./workspaceIssues/workspaceIssues";
export default function Workspace() {
  const [showSideBar, setShowSideBar] = useState(false);
  const showSideBarHandler = () => {
    setShowSideBar((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col">
      <Navbar showSideBarHandler={showSideBarHandler} />
      <div className="flex flex-row">
        <div className="w-fit">
          <WorkspaceSidebar showSideBar={showSideBar} />
        </div>
        {/* Main content goes here */}
        <div className="overflow-x-scroll ">
          <WorkspaceIssues />
        </div>
      </div>
    </div>
  );
}
