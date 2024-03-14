import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function RightBar() {
  const [status, setStatus] = useState("1");
  const [cooldownDuration, setPriority] = useState("1");
  const [dueDate, setDueDate] = useState(null);
  const [assigne, setAssigne] = useState("Harsh");
  const [cycle, setCycle] = useState("Cycle 2");
  const [project, setProject] = useState("Project_name");
  return (
    <div
      className="bg-black w-[38vw] flex flex-col overflow-auto text-gray-900 p-3"
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(0,0,0,0) rgba(0,0,0,0)",
      }}
    >
      <div className="mt-10 mb-4 flex justify-start border-b border-gray-600 pb-4">
        <div className="text-white w-[20%] mr-3">Status</div>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="block appearance-none w-[30%]  h-7  bg-[rgb(15,19,29)] border border-gray-400 hover:border-gray-500 px-2 rounded shadow leading-tight focus:outline-none focus:border-blue-500 text-white overflow-x-hidden"
        >
          <option value="1">
            Backlog{"   "}
            {status === "1" && <span className="ml-2">&#10003;</span>}
          </option>
          <option value="2">
            Todo{"   "}
            {status === "2" && <span className="ml-2">&#10003;</span>}
          </option>
          <option value="3">
            In Progress{"   "}
            {status === "3" && <span className="ml-2">&#10003;</span>}
          </option>
          <option value="4">
            In Review{"   "}
            {status === "4" && <span className="ml-2">&#10003;</span>}
          </option>
          <option value="5">
            Done{"   "}
            {status === "5" && <span className="ml-2">&#10003;</span>}
          </option>
          <option value="6">
            Canceled{"   "}
            {status === "6" && <span className="ml-2">&#10003;</span>}
          </option>
          <option value="7">
            Duplicate{"   "}
            {status === "7" && <span className="ml-2">&#10003;</span>}
          </option>

        </select>
      </div>


      <div className="mb-4 flex justify-start border-b border-gray-600 pb-4">
        <div className="text-white w-[20%] mr-3">Priority</div>
        <select
          value={cooldownDuration}
          onChange={(e) => setPriority(e.target.value)}
          className="block appearance-none w-[30%]  h-7  bg-[rgb(15,19,29)] border border-gray-400 hover:border-gray-500 px-2 rounded shadow leading-tight focus:outline-none focus:border-blue-500 text-white overflow-x-hidden"
        >
          <option value="1">
            No priority{"   "}
            {cooldownDuration === "1" && <span className="ml-2">&#10003;</span>}
          </option>
          <option value="2">
            Urgent{"   "}
            {cooldownDuration === "2" && <span className="ml-2">&#10003;</span>}
          </option>
          <option value="3">
            High{"   "}
            {cooldownDuration === "3" && <span className="ml-2">&#10003;</span>}
          </option>
          <option value="4">
            Medium{"   "}
            {cooldownDuration === "4" && <span className="ml-2">&#10003;</span>}
          </option>
          <option value="5">
            Low{"   "}
            {cooldownDuration === "5" && <span className="ml-2">&#10003;</span>}
          </option>

        </select>
      </div>

      <div className="mb-4 flex justify-start border-b border-gray-600 pb-4">
        <div className="text-white w-[20%] mr-3">
          Assigne
        </div>
        <div className="block appearance-none w-[30%]  h-7  bg-[rgb(15,19,29)] border border-gray-400 hover:border-gray-500 px-2 rounded shadow leading-tight focus:outline-none focus:border-blue-500 text-white">
          {assigne}
        </div>
      </div>

      <div className="mb-4 flex justify-start border-b border-gray-600 pb-4">
        <div className="text-white w-[20%] mr-3">
          Cycle
        </div>
        <div className="block appearance-none w-[30%]  h-7  bg-[rgb(15,19,29)] border border-gray-400 hover:border-gray-500 px-2 rounded shadow leading-tight focus:outline-none focus:border-blue-500 text-white overflow-x-hidden">
          {cycle}
        </div>
      </div>

      <div className="mb-4 flex justify-start border-b border-gray-600 pb-4">
        <div className="text-white w-[20%] mr-3">
          Project
        </div>
        <div className="block appearance-none w-[30%] h-7 bg-[rgb(15,19,29)] border border-gray-400 hover:border-gray-500 px-2 rounded shadow leading-tight focus:outline-none focus:border-blue-500 text-white overflow-x-hidden">
          {project}
        </div>
      </div>


      <div className="mb-4 flex justify-start border-b border-gray-600 pb-4">
        <div className="text-white w-[20%] mr-3">Due date</div>
        <DatePicker
          selected={dueDate}
          onChange={(date) => setDueDate(date)}
          className=" bg-[rgb(15,19,29)]  h-7  border border-gray-400 hover:border-gray-500 px-2 rounded shadow leading-tight focus:outline-none focus:border-blue-500 text-white w-[8vw] "
          placeholderText="Select Date"
        />
      </div>
    </div>
  );
}

export default RightBar;
