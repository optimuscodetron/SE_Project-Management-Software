import { useState } from "react";

import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
const WorkspaceListSidebar = () => {
  const [showWorkspaces, setShowWorkspaces] = useState(false);
  const showWorkspaceHandler = () => {
    setShowWorkspaces((prevState) => !prevState);
  };

  const userWorkspaces = ["Workspace 1", "Workspace 2", "Workspace 3"];
  const [currentWorkspace, setCurrentWorkspace] = useState(userWorkspaces[0]);
  const chooseWorkspaceHandler = (item, index) => {
    // console.log(index);
    setCurrentWorkspace(userWorkspaces[index]);
    setShowWorkspaces(!showWorkspaces);
  };

  return (
    <>
      <div
        className="flex items-center p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-900 group justify-between"
        onClick={showWorkspaceHandler}
      >
        <span className="ms-3">{currentWorkspace}</span>

        {showWorkspaces ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {showWorkspaces && (
        <ul className={""}>
          {userWorkspaces.map((item, index) => (
            <li key={index}>
              <div
                className="flex justify-center p-2 font-semibold text-white text-decoration-none  rounded-lg hover:bg-gray-900 group "
                onClick={() => chooseWorkspaceHandler(item, index)}
              >
                {item}
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default WorkspaceListSidebar;
