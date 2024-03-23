import React from "react";
import { useState } from "react";

import PSidebar from "../Components/PSidebar";
import Header from "./Componets/Header";
import Issue from "./Componets/IssuesScreen";
import IssueSearch from "./Componets/IssueSearch";
import PNavbar from "../Components/PNavbar";
import UpcomingCycles from "../Upcoming_Cycles/Upcoming_Cycles";

export default function Board() {
  const style = {
    backgroundColor: "rgb(31, 41, 55)",
  };
  const [showSideBar, setShowSideBar] = useState(false);
  const showSideBarHandler = () => {
    setShowSideBar((prevState) => !prevState);
  };
  const [showUpcomingCycle, setShowUpcomingCycle] = useState(false);
  const openUpcomingCycleHandler = () => {
    setShowIssues(false);
    setShowUpcomingCycle(true);
  };
  const [showIssues, setShowIssues] = useState(true);
  const openIssuesHandler = () => {
    setShowUpcomingCycle(false);
    setShowIssues(true);
  };
  return (
    <div className="flex flex-col h-screen w-screen">
      <PNavbar showSideBarHandler={showSideBarHandler} />
      <div className="flex flex-row flex-1">
        <PSidebar
          showSideBar={showSideBar}
          openUpcomingCycle={openUpcomingCycleHandler}
          openIssues={openIssuesHandler}
          // className="sm:fixed sm:top-0 sm:left-0 sm:z-50 hidden"
        />
        <div className="flex  w-full h-screen " style={style}>
          {/* <Header></Header> */}
          {showIssues && <Issue />}

          {showUpcomingCycle && <UpcomingCycles />}
        </div>
      </div>
    </div>
  );
}
