import { useState } from "react";
import { useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { RiTeamFill } from "react-icons/ri";
import { GoProjectRoadmap } from "react-icons/go";
import { MdFormatListBulletedAdd } from "react-icons/md";
import CreateNewProject from "../../../CreateNewProject/CreateNewProject";
const ProjectListSidebar = (props) => {
  const [showProject, setShowProject] = useState(false);
  const [isopen, setisopen] = useState(false);

  const showProjectHandler = () => {
    setShowProject((prevState) => !prevState);
  };

  const handlePopup = () => {
    setisopen(!isopen);
  };

  const teamName = "My Team Name";
  const userProjects = [
    {
      projectName: "Our Project",
      projectId: "",
    },
    {
      projectName: "Project 2",
      projectId: "",
    },
    {
      projectName: "Project 3",
      projectId: "",
    },
    {
      projectName: "Project 4",
      projectId: "",
    },
  ];

  return (
    <>
      <div className="flex items-center p-2 text-sm text-white text-decoration-none  rounded-lg hover:bg-gray-900 group">
        <RiTeamFill />
        <span className="flex-1 ms-3 whitespace-nowrap">{teamName}</span>
      </div>
      <ul>
        <li>
          <div
            className="flex items-center text-sm p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-900 group"
            onClick={props.onOpenCreateProject}
          >
            <MdFormatListBulletedAdd />
            <span className="flex-1 ms-3 font-medium whitespace-nowrap">
              Create Project
            </span>
          </div>
        </li>
        <li>
          <div
            className="flex items-center p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-900 group justify-between cursor-pointer"
            onClick={showProjectHandler}
          >
            <div className="flex ">
              <GoProjectRoadmap />
              <span className="ms-3 text-sm">All Projects</span>
            </div>
            {showProject ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {showProject && (
            <ul className={"flex row ml-8"}>
              {userProjects.map((item) => (
                <li>
                  <NavLink
                    to={"/workspace/project/board"}
                    className="text-decoration-none "
                  >
                    <div className=" text-sm font-semibold p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-900 group truncate">
                      {item.projectName}
                    </div>
                  </NavLink>
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
