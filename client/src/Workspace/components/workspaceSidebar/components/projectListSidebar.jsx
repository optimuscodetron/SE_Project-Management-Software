import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const ProjectListSidebar = () => {
  const [showProject, setShowProject] = useState(false);
  const showProjectHandler = () => {
    setShowProject((prevState) => !prevState);
  };

  const teamName = "My Team Name";
  const userProjects = ["Project 1", "Project 2", "Project 3"];

  return (
    <>
      <div className="flex items-center p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-900 group">
        <span className="flex-1 ms-3 whitespace-nowrap">{teamName}</span>
      </div>
      <ul>
        <li>
          <div className="flex items-center p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-900 group">
            <span className="flex-1 ms-3 font-medium whitespace-nowrap">
              Create Project
            </span>
          </div>
        </li>
        <li>
          <div
            className="flex items-center p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-900 group justify-between"
            onClick={showProjectHandler}
          >
            <span className="ms-3 font-medium">All Projects</span>
            {showProject ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {showProject && (
            <ul className={""}>
              {userProjects.map((item) => (
                <li>
                  <div className="flex items-center font-semibold p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-900 group justify-between">
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </>
  );
};
export default ProjectListSidebar;
