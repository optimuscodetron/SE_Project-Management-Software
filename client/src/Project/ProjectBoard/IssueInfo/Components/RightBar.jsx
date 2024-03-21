import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function RightBar() {
  const [status, setStatus] = useState("1");
  const [priority, setPriority] = useState("1");
  const [cycle, setCycle] = useState("1");
  const [dueDate, setDueDate] = useState(null);
  const [assigne, setAssigne] = useState("Harsh");
  const [project, setProject] = useState("Project_name");
  return (
    <div
      className="bg-gray-900 w-[38vw] flex flex-col overflow-auto text-white p-3"
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(0,0,0,0) rgba(0,0,0,0)",
      }}
    >
      <div className="mt-10 mb-4 flex justify-start ">
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

      <div className="mb-4 flex justify-start">
        <div className="text-white w-[20%] mr-3">Priority</div>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="block appearance-none w-[30%]  h-7  bg-[rgb(15,19,29)] border border-gray-400 hover:border-gray-500 px-2 rounded shadow leading-tight focus:outline-none focus:border-blue-500 text-white overflow-x-hidden"
        >
          <option value="1">
            No priority{"   "}
            {priority === "1" && <span className="ml-2">&#10003;</span>}
          </option>
          <option value="2">
            Urgent{"   "}
            {priority === "2" && <span className="ml-2">&#10003;</span>}
          </option>
          <option value="3">
            High{"   "}
            {priority === "3" && <span className="ml-2">&#10003;</span>}
          </option>
          <option value="4">
            Medium{"   "}
            {priority === "4" && <span className="ml-2">&#10003;</span>}
          </option>
          <option value="5">
            Low{"   "}
            {priority === "5" && <span className="ml-2">&#10003;</span>}
          </option>
        </select>
      </div>

      <div className="mb-4 flex justify-start">
        <div className="text-white w-[20%] mr-3">Assigne</div>
        <div className="block appearance-none w-[30%]  h-7  bg-[rgb(15,19,29)] border border-gray-400 hover:border-gray-500 px-2 rounded shadow leading-tight focus:outline-none focus:border-blue-500 text-white">
          {assigne}
        </div>
      </div>

      <div className="mb-4 flex justify-start">
        <div className="text-white w-[20%] mr-3">Cycle</div>
        <select
          value={cycle}
          onChange={(e) => setCycle(e.target.value)}
          className="block appearance-none w-[30%]  h-7  bg-[rgb(15,19,29)] border border-gray-400 hover:border-gray-500 px-2 rounded shadow leading-tight focus:outline-none focus:border-blue-500 text-white overflow-x-hidden"
        >
          <option value="1">
            Cycle 1{"   "}
            {cycle === "1" && <span className="ml-2">&#10003;</span>}
          </option>
          <option value="2">
            Cycle 2{"   "}
            {cycle === "2" && <span className="ml-2">&#10003;</span>}
          </option>
          <option value="3">
            Cycle 3{"   "}
            {cycle === "3" && <span className="ml-2">&#10003;</span>}
          </option>
          <option value="4">
            Cycle 4{"   "}
            {cycle === "4" && <span className="ml-2">&#10003;</span>}
          </option>
          <option value="5">
            Cycle 5{"   "}
            {cycle === "5" && <span className="ml-2">&#10003;</span>}
          </option>
          <option value="6">
            Cycle 6{"   "}
            {cycle === "6" && <span className="ml-2">&#10003;</span>}
          </option>
          <option value="7">
            Cycle 7{"   "}
            {cycle === "7" && <span className="ml-2">&#10003;</span>}
          </option>
          <option value="8">
            Cycle 8{"   "}
            {cycle === "8" && <span className="ml-2">&#10003;</span>}
          </option>
          {/* Add duration options */}
        </select>
      </div>

      <hr class="w-[95%] h-1 mx-auto mb-5 mt-3 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-400"></hr>

      <div className="mb-4 flex justify-start">
        <div className="text-white w-[20%] mr-3">Project</div>
        <div className="block appearance-none w-[30%] h-7 bg-[rgb(15,19,29)] border border-gray-400 hover:border-gray-500 px-2 rounded shadow leading-tight focus:outline-none focus:border-blue-500 text-white overflow-x-hidden">
          {project}
        </div>
      </div>

      <div className="mb-4 flex justify-start">
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
