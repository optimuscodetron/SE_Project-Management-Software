import React from "react";
import WorkspaceListSidebar from "./components/workspacesListSidebar";
import ProjectListSidebar from "./components/projectListSidebar";
import { NavLink } from "react-router-dom";
import './workspaceSidebar.css';
import { AiFillSetting } from "react-icons/ai"
import { IoPersonAdd } from "react-icons/io5";
import { HiPlus } from "react-icons/hi";
import CreateNewProject from "../../CreateNewProject/CreateNewProject";
const WorkspaceSidebar = (props) => {

  return (

      <aside
        className={`sm:relative w-64 h-full transition-transform ${props.showSideBar?"":"-translate-x-full"} bg-gray-800 border-r border-gray-200 sm:translate-x-0`}
      >
        <div className="h-full px-2 overflow-y-auto bg-[#171e28] dark:bg-[#171e28]">
          <ul className="space-y-2 font-medium pt-2">
            <li>
              <WorkspaceListSidebar headerInfo={props.currentWorkspace} />
            </li>

            <li>
              <NavLink to={'/workspace/settings/general'} className={'text-decoration-none '}>
              <div
                className="flex items-center p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-900 group"
              >
                  <AiFillSetting/>
                <span className="flex row ms-3 text-sm  whitespace-nowrap text-decoration-none">
                  Workspace Settings
                </span>
              </div>
              </NavLink>
            </li>

            <li>
              <div
                className="flex items-center p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-900 group hover:cursor-pointer"
                onClick={props.onOpenInviteMembers} 
              >
                <IoPersonAdd/>
                <span className="flex-1 ms-3 text-sm ">Invite Members</span>
              </div>
            </li>

            <li>
            <NavLink to={'/create_workspace'} className={'text-decoration-none '}>
              <div
                className="flex items-center p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-900 group"
              >
                <HiPlus/>
                <span className="flex-1 ms-3 text-sm whitespace-nowrap">
                  Create Workspace
                </span>
              </div>
              </NavLink>
            </li>

            <div className="border-b border-white my-2 w-full"></div>
            <li>
              <ProjectListSidebar onOpenCreateProject={props.onOpenCreateProject}/>
             
            </li>
          </ul>
        </div>
      </aside>
  );
};

export default WorkspaceSidebar;
