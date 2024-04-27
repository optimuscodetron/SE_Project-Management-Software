import React, { useEffect } from "react";
import { useState } from "react";
import PSidebar from "./ProjectSidebar/PSidebar";
import ProjectIssues from "./ProjectIssues/issues/ProjectIssues";
import Navbar from "../Components/Layout/navbar/navbar";
import Header from "./ProjectIssues/Component/Header";
import { useSelector } from "react-redux";
import Sprint from "./Sprint/Sprint";
import Loader from "../loading";

export default function Project() {
  const [showSideBar, setShowSideBar] = useState(true);
  const showSideBarHandler = () => {
    setShowSideBar((prevState) => !prevState);
  };

  const [showFilterSidebar, setShowFilterSidebar] = useState(false);

  const handleShowFilterSidebar = (event) => {
    event.preventDefault();
    setShowFilterSidebar(!showFilterSidebar);
  };

  const sprintId = useSelector((store) => store.activeSprint.value?._id);
  const list = useSelector((store) => store.activeProjectSprintList.value);

  const [activesprint, setActivesprint] = useState();

  const [sprintName, setSprintName] = useState();
  const [sprintStartDate, setSprintStartDate] = useState();
  const [sprintEndDate, setSprintEndDate] = useState();

  //apply moveissue functionality in backend in sprint
  const [projectIssues, setProjectIssues] = useState(true);

  const handleProjectIssuesFalse = () => {
    // setProjectIssues(!projectIssues);
    setProjectIssues(false);
  };

  const handleProjectIssuesTrue = () => {
    setProjectIssues(true);

  }

  const [isHide, setIsHide] = useState(true);

  setTimeout(() => setIsHide(false), 500);

  useEffect(() => {
    console.log(sprintId + "Yo");
    if (!projectIssues) {
      const Activesprint = list.find((obj) =>
        sprintId ? obj._id == sprintId : obj
      );

      setActivesprint(Activesprint);
      console.log(Activesprint);
      setSprintName(Activesprint.name);
      setSprintStartDate(Activesprint.startDate);
      setSprintEndDate(Activesprint.endDate);
    }
    //console.log(sprintStartDate);
  }, [sprintId, projectIssues]);

  return (
    <>
    {isHide && <Loader/>}
      <div className="flex flex-col ">
        <div className="flex-1 ">
          <Navbar showSideBarHandler={showSideBarHandler} />
        </div>
        <div className="flex flex-row  ">
          <div className="">
            {showSideBar && (
              <PSidebar
                showSideBar={showSideBar}
                handleProjectIssuesFalse={handleProjectIssuesFalse}
                handleProjectIssuesTrue={handleProjectIssuesTrue}
                // className="sm:fixed sm:top-0 sm:left-0 sm:z-50 hidden"
              />
            )}
          </div>
          {/* Main content goes here */}

          <div className="overflow-x-auto ">
            <Header handleShowFilterSidebar={handleShowFilterSidebar} />

            {!projectIssues && sprintStartDate && (
              <div className="flex justify-around bg-[#171e28] text-white border-b-[1px] border-gray-400">
                <div>Start Date : {sprintStartDate.split("T")[0]}</div>
                <div>{sprintName}</div>
                <div>End Date : {sprintEndDate.split("T")[0]}</div>
              </div>
            )}

            {projectIssues && (
              <ProjectIssues showFilterSidebar={showFilterSidebar} />
            )}
            {!projectIssues ? (
              <Sprint showFilterSidebar={showFilterSidebar} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
