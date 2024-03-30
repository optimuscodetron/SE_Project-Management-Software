import React from "react";
import { useState } from "react";
import PSidebar from "../Components/PSidebar";
import ProjectIssues from "./issues/ProjectIssues";
import UpcomingCycles from "../Upcoming_Cycles/Upcoming_Cycles";
import Navbar from "../../Components/Layout/navbar/navbar";


export default function Board() {
    const style = {
        "backgroundColor": "rgb(31, 41, 55)",
    }
    const [showSideBar, setShowSideBar] = useState(true);
    const showSideBarHandler = () => {
        setShowSideBar((prevState) => !prevState);
    };
    const [showUpcomingCycle,setShowUpcomingCycle]=useState(false);
    const openUpcomingCycleHandler=()=>{
        setShowIssues(false);
        setShowUpcomingCycle(true);
    }
    const [showIssues,setShowIssues]=useState(true);
    const openIssuesHandler=()=>{
        setShowUpcomingCycle(false);
        setShowIssues(true);
    }
    return (
        <div className="flex flex-col">
        <div className="flex-1">
        <Navbar showSideBarHandler={showSideBarHandler} />
        </div>
        <div className="flex flex-row">
          <div className="">
            {showSideBar&&
          <PSidebar
          showSideBar={showSideBar}
          openUpcomingCycle={openUpcomingCycleHandler}
          openIssues={openIssuesHandler}
          // className="sm:fixed sm:top-0 sm:left-0 sm:z-50 hidden"
      />
            }
          </div>
          {/* Main content goes here */}
          <div className="overflow-x-scroll">
            {/* <Header headerInfo={headerInfo}/>/ */}
            {showIssues&&<ProjectIssues/>}     
            {showUpcomingCycle&& <UpcomingCycles/>}
          </div>
          <div className="flex-1">
            {/* for popUps */}
            
        </div>
        </div>
      </div>
    )
}