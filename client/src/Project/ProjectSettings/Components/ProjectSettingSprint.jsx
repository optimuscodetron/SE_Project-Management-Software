import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Switch from "react-switch";
import { useSelector, useDispatch } from "react-redux";
import { changeActiveProjectField } from "../../../redux/ProjectData/activeProjectSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function formatDate(dateString) {
  const [day, month, year] = dateString.split("/");
  return `${year}-${month}-${day}`;
}

function ProjectSettingSprint() {
  
  const workspaceName = useSelector((state) => state.workspaceNameId.value.name);
  const projectName = useSelector((state) => state.activeProject.value.name);
  const [startDate, setStartDate] = useState(formatDate("22/03/2024"));
  const [endDate, setEndDate] = useState(formatDate("22/03/2024"));

  return (
    <div className="bg-gray-800 w-full h-screen text-white justify-center p-10">
      <div
        className="flex flex-col rounded mx-auto h-[100%] mb-4 w-full lg:w-[60%] bg-gray-900 p-3 overflow-auto "
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(0,0,0,0) rgba(0,0,0,0)",
        }}
      >
        <div className="text-gray-400 text-base mb-2">
          {workspaceName}
          <span className="mx-2"> / </span> {projectName}
        </div>
        <h1 className="text-3xl tracking-wide font-semibold mb-10 border-b border-gray-600 pb-3 ">
          Create Sprint
        </h1>
        <div className="flex flex-row items-center">
          <div class="block text-lg text-white w-40">Sprint name</div>
          <input
            name="name"
            // onChange={handleInputChangeProjectName}
            class="h-9 ml-10 bg-gray-800 text-white px-4 rounded inline-flex justify-center items-center w-80"
          />
        </div>
        <div className="flex flex-row items-center mt-3">
          <div class="block text-lg text-white w-40">Select Start date </div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            className="h-9 ml-10 bg-gray-800 text-white px-4 rounded inline-flex justify-center items-center focus:outline-none w-80"
          />
        </div>
        <div className="flex flex-row items-center mt-3">
          <div class="block text-lg text-white w-40">Select Start date </div>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="dd/MM/yyyy"
            className="h-9 ml-10 bg-gray-800 text-white px-4 rounded inline-flex justify-center items-center focus:outline-none w-80"
            onClick={() => {
              console.log(startDate);
              console.log(endDate);
            }}
          />
        </div>
        {endDate > startDate ? (
          <spain class="block text-lg text-white">Select Start date </spain>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ProjectSettingSprint;
