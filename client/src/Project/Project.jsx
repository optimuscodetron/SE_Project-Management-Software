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

  
  const handleShowFilterSidebar=(event)=>{
    event.preventDefault();
    setShowFilterSidebar(!showFilterSidebar);
}

const sprintId = useSelector((store)=>store.activeSprint.value?._id);
const list = useSelector((store)=>store.activeProjectSprintList.value);


const [activesprint,setActivesprint]=useState();

const [sprintStartDate,setSprintStartDate]=useState();
const [sprintEndDate,setSprintEndDate]=useState();

    
  
  //apply moveissue functionality in backend in sprint
  const [projectIssues,setProjectIssues]=useState(true);

  const handleProjectIssues=()=>{
    // setProjectIssues(!projectIssues);
    setProjectIssues(false);
  }
   

  useEffect(()=>{
    const Activesprint = list.find(obj => obj._id==sprintId);
    setActivesprint(Activesprint);
    setSprintStartDate(Activesprint.startDate);
    setSprintEndDate(Activesprint.endDate);
    //console.log(sprintStartDate);
  },[sprintId])

  return (
    <>
    {sprintId && sprintStartDate ? <div className="flex flex-col ">
      <div className="flex-1 ">
        <Navbar showSideBarHandler={showSideBarHandler} />
      </div>
      <div className="flex flex-row  ">
        <div className="">
          {showSideBar && (
            <PSidebar
              showSideBar={showSideBar}
              handleProjectIssues={handleProjectIssues}
              // className="sm:fixed sm:top-0 sm:left-0 sm:z-50 hidden"
            />
          )}
        </div>
        {/* Main content goes here */}

          
        <div className="overflow-x-auto ">
       
          <Header  handleShowFilterSidebar={handleShowFilterSidebar}/>

          {!projectIssues && <div className="flex justify-around bg-[#171e28] text-white border-b-[1px] border-gray-400">
            
          <div>Start Date : {sprintStartDate.split("T")[0]}</div>
          <div>End Date : {sprintEndDate.split("T")[0]}</div>
          </div>}

          {projectIssues && <ProjectIssues showFilterSidebar={showFilterSidebar} />}
          {sprintId!=undefined?<Sprint showFilterSidebar={showFilterSidebar} />:""}
          
          
        </div>
      </div>
    </div>:Loader}
    </>
  );

}
