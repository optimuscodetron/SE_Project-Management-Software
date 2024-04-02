import React, { useState } from "react";
import { useEffect } from "react";
import WorkspaceListSidebar from "./components/workspacesListSidebar";
import ProjectListSidebar from "./components/projectListSidebar";
import { NavLink } from "react-router-dom";
import "./workspaceSidebar.css";
import { FiInbox } from "react-icons/fi";
import { AiFillSetting } from "react-icons/ai";
import { IoPersonAdd } from "react-icons/io5";
import { HiPlus } from "react-icons/hi";
import Axios from "axios";

import CreateNewProject from "../../CreateNewProject/CreateNewProject";

const WorkspaceSidebar = (props) => {
  const [workspaceId, setWorkspaceId] = useState();

  // useEffect(() => {

  //   // fetchWorkspaceData();

  // }, []);

  // const getWorkspaceId = (id) => {
  //   console.log(id);
  //   setWorkspaceId(id);
  // };
  const [isHide, setIsHide] = useState(true);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside
      className={`sm:relative w-64 h-full transition-transform ${props.showSideBar ? "" : "-translate-x-full"
        } bg-gray-800 border-r border-gray-200 sm:translate-x-0`}
    >
      <div className="h-full px-2 overflow-y-auto bg-[#171e28] dark:bg-[#171e28]">
        <ul className="space-y-2 font-medium pt-2">
          <li>
            <WorkspaceListSidebar
              headerInfo={props.currentWorkspace}
              openWorkspace={props.openWorkspace}
              // workspaceId={getWorkspaceId}
            />
          </li>

          <li>
            <NavLink
              to={"/workspace/settings/general"}
              className={"text-decoration-none "}
            >
              <div className="flex items-center p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-950 group">
                <AiFillSetting />
                <span className="flex row ms-3 text-sm  whitespace-nowrap text-decoration-none">
                  Workspace Settings
                </span>
              </div>
            </NavLink>
          </li>

          <li>
            <div
              className="flex items-center p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-950 group hover:cursor-pointer "
              onClick={props.onOpenInviteMembers}
            >
              <IoPersonAdd />
              <span className="flex-1 ms-3 text-sm ">Invite Members</span>
            </div>
          </li>

          <li>
            <div
              className="flex items-center p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-950 group hover:cursor-pointer"
              onClick={props.inboxOpened}
            >
              <FiInbox />
              <span className="flex-1 ms-3 text-sm whitespace-nowrap">
                Inbox
              </span>
            </div>
          </li>

          <li>
            <NavLink
              to={"/create_workspace"}
              className={"text-decoration-none "}
            >
              <div className="flex items-center p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-950 group">
                <HiPlus />
                <span className="flex-1 ms-3 text-sm whitespace-nowrap">
                  Create Workspace
                </span>
              </div>
            </NavLink>
          </li>

          <div className="border-b border-white my-2 w-full"></div>
          <li>
            
             { !isHide?  <ProjectListSidebar
                  onOpenCreateProject={props.onOpenCreateProject}
                  // workspaceId={workspaceId}
                />:null}
           

          </li>
        </ul>
      </div>
    </aside>
  );
};

export default WorkspaceSidebar;
