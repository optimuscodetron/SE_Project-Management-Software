import React from "react";
import { NavLink } from "react-router-dom";
import WorkspaceListSidebar from "./components/workspacesListSidebar";
import ProjectListSidebar from "./components/projectListSidebar";
import './workspaceSidebar.css';
const WorkspaceSidebar = (props) => {

  return (

      <aside
        className={` fixed sm:relative custom-sidebar w-64 mt-16 h-screen overflow-hidden transition-transform ${props.showSideBar?"":"-translate-x-full"} bg-gray-800 border-r border-gray-200 sm:translate-x-0`}
      >
        <div className="h-full px-2 overflow-y-auto bg-[#171e28] dark:bg-[#171e28]">
          <ul className="space-y-2 font-medium pt-2">

            <li>
              <WorkspaceListSidebar/>
            </li>

            <li>
              <div
                className="flex items-center p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-900 group"
              >
                <span className="flex-1 ms-3 font-medium  whitespace-nowrap">
                  Workspace Settings
                </span>
              </div>
            </li>

            <li>
              <div
                className="flex items-center p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-900 group"
              >
                <span className="flex-1 ms-3 font-medium ">Invite & Manage Members</span>
              </div>
            </li>

            <li>
              <div
                className="flex items-center p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-900 group"
              >
                <span className="flex-1 ms-3 font-medium whitespace-nowrap">
                  Add Members
                </span>
              </div>
            </li>

            <div className="border-b border-white my-2 w-full"></div>
            <li>
              <ProjectListSidebar/>
            </li>
          </ul>
        </div>
      </aside>
  );
};

export default WorkspaceSidebar;
