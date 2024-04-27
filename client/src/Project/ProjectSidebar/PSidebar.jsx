import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import CreateNewIssue from "../../Workspace/CreateNewIssue/CreateNewIssue";
import { BsFillInboxesFill } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import PSidebarCycleList from "./PSidebarCycleList";

const PSidebar = (props) => {
  const [showCreateIssuePanel, setShowCreateIssuePanel] = useState(false);
  const openCreateIssuePanel = () => {
    setShowCreateIssuePanel(true);
  };
  const closeCreateIssuePanel = () => {
    setShowCreateIssuePanel(false);
  };
  return (
    <aside
      className={`sm:relative w-64 h-full transition-transform ${
        props.showSideBar ? "" : "-translate-x-full"
      } bg-gray-800 border-r border-gray-200 sm:translate-x-0`}
    >
      <div className="h-full px-2 overflow-y-auto bg-[#171e28] dark:bg-[#171e28]">
        <ul className="space-y-2 font-medium pt-2">
          <li data-testid = "issues" onClick={props.handleProjectIssuesTrue}>
            <NavLink className={"text-decoration-none "}>
              <div className="flex items-center p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-950 group">
                <BsFillInboxesFill />
                <span  className="flex row ms-3 text-sm  whitespace-nowrap text-decoration-none">
                  Issues
                </span>
              </div>
            </NavLink>
          </li>
          <li>
            <PSidebarCycleList
              handleProjectIssuesFalse={props.handleProjectIssuesFalse}

            />
          </li>
          <hr className="w-full h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-500" />
          <li data-testid = "createissue" onClick={openCreateIssuePanel}>
            <NavLink className={"text-decoration-none "}>
              <div className="flex items-center p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-950 group">
                <AiFillPlusCircle />
                <span className="flex row ms-3 text-sm  whitespace-nowrap text-decoration-none">
                  Create Issue
                </span>
              </div>
            </NavLink>
          </li>
          <li data-testid = "setting">
            <NavLink
              to={"/workspace/project/settings"}
              className="text-decoration-none"
            >
              <div className="flex items-center p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-950 group">
                <IoSettings />
                <span className="flex row ms-3 text-sm  whitespace-nowrap text-decoration-none">
                  Settings
                </span>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      {showCreateIssuePanel && (
        <CreateNewIssue
          onCloseCreateIssue={closeCreateIssuePanel}
          isWorkspaceContext={false}
        />
      )}
    </aside>
  );
};

export default PSidebar;
