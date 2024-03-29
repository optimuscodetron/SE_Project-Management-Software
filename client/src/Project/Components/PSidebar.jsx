import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import CreateNewIssue from "../../Workspace/CreateNewIssue/CreateNewIssue"; // Import the CreateNewIssue component

const PSidebar = (props) => {
  const [showCyclesList, setShowCyclesList] = useState(false);
  const [showCreateIssuePanel, setShowCreateIssuePanel] = useState(false); // State to manage visibility of the Create Issue panel

  const showCyclesListHandler = () => {
    setShowCyclesList((prevState) => !prevState);
  };

  const openCreateIssuePanel = () => {
    setShowCreateIssuePanel(true);
  };

  const closeCreateIssuePanel = () => {
    setShowCreateIssuePanel(false);
  };

  const cycleList = ["Upcoming Cycle", "Current Cycle", "Previous Cycle"];

  return (
    <aside
      id="cta-button-sidebar"
      className={`z-1 w-60 h-full transition-transform ${
        props.showSideBar ? "" : "-translate-x-full"
      } sm:translate-x-0 fixed sm:relative sm:h-full`}
    >
      <div className="h-full px-2 py-4 overflow-y-auto bg-[#161c29]">
        <ul className="space-y-2 font-medium">
          <li onClick={props.openIssues}>
            {/* Issue link */}
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700  dark:hover:text-white group no-underline hover:no-underline"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                {/* Your SVG icon */}
              </svg>
              <span className="ms-3">Issues</span>
            </a>
          </li>
          <li>
            {/* Create Issue button */}
            <div
              className="flex justify-between items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700  dark:hover:text-white group no-underline hover:no-underline"
              onClick={openCreateIssuePanel} // Call openCreateIssuePanel function when clicked
            >
              <div className="flex">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  {/* Your SVG icon */}
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Create Issue
                </span>
              </div>
            </div>
          </li>
          {/* Other menu items */}
          <li>
            {/* Settings link */}
            <NavLink
              to={"/workspace/project/settings"}
              className="text-decoration-none"
            >
              <div className="flex items-center p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-700 group">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  {/* Your SVG icon */}
                </svg>
                <span className="flex row ms-3  whitespace-nowrap text-decoration-none">
                  Settings
                </span>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Render CreateNewIssue component when showCreateIssuePanel is true */}
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
