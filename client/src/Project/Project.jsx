import React from "react";
import { useState } from "react";
import PSidebar from "./ProjectSidebar/PSidebar";
import ProjectIssues from "./ProjectIssues/issues/ProjectIssues";
import UpcomingCycles from "./ProjectCycles/Upcoming_Cycles/Upcoming_Cycles";
import Navbar from "../Components/Layout/navbar/navbar";
import CurrentCycles from "./ProjectCycles/CurrentCycles/CurrentCycles";
import PreviousCycles from "./ProjectCycles/Previous_Cycles/Previous_Cycles";
import Header from "./ProjectIssues/Component/Header";

export default function Project() {
  const [showSideBar, setShowSideBar] = useState(true);
  const showSideBarHandler = () => {
    setShowSideBar((prevState) => !prevState);
  };
  const [showUpcomingCycle, setShowUpcomingCycle] = useState(false);
  const openUpcomingCycleHandler = () => {
    setShowIssues(false);
    setShowPreviousCycle(false);
    setShowCurrentCycle(false);
    setShowUpcomingCycle(true);
  };
  const [showCurrentCycle, setShowCurrentCycle] = useState(false);
  const openCurrentCycleHandler = () => {
    setShowIssues(false);
    setShowPreviousCycle(false);
    setShowUpcomingCycle(false);
    setShowCurrentCycle(true);
  };
  const [showPreviousCycle, setShowPreviousCycle] = useState(false);
  const openPreviousCycleHandler = () => {
    setShowIssues(false);
    setShowCurrentCycle(false);
    setShowUpcomingCycle(false);
    setShowPreviousCycle(true);
  };
  const [showIssues, setShowIssues] = useState(true);
  const openIssuesHandler = () => {
    setShowUpcomingCycle(false);
    setShowPreviousCycle(false);
    setShowCurrentCycle(false);
    setShowIssues(true);
  };

  const [showFilterSidebar, setShowFilterSidebar] = useState(false);

  
  const handleShowFilterSidebar=(event)=>{
    event.preventDefault();
    setShowFilterSidebar(!showFilterSidebar);
}


  return (
    <div className="flex flex-col ">
      <div className="flex-1 ">
        <Navbar showSideBarHandler={showSideBarHandler} />
      </div>
      <div className="flex flex-row  ">
        <div className="">
          {showSideBar && (
            <PSidebar
              showSideBar={showSideBar}
              openUpcomingCycle={openUpcomingCycleHandler}
              openCurrentCycle={openCurrentCycleHandler}
              openPreviousCycle={openPreviousCycleHandler}
              openIssues={openIssuesHandler}
              // className="sm:fixed sm:top-0 sm:left-0 sm:z-50 hidden"
            />
          )}
        </div>
        {/* Main content goes here */}

          
        <div className="overflow-x-auto ">
       
          <Header  handleShowFilterSidebar={handleShowFilterSidebar}/>
          {showIssues && <ProjectIssues showFilterSidebar={showFilterSidebar} />
          {showUpcomingCycle && <UpcomingCycles />}
          {showCurrentCycle && <CurrentCycles />}
          {showPreviousCycle && <PreviousCycles />}
       
        </div>
      </div>
    </div>
  );
}
