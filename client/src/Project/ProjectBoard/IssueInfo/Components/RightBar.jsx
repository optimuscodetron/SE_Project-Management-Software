import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import Dropdown from "./dropdown";
import "react-datepicker/dist/react-datepicker.css";

function formatDate(dateString) {
  const [day, month, year] = dateString.split('/');
  return `${year}-${month}-${day}`;
}

function RightBar() {
  const [project, setProject] = useState(
    "Project_namewecnwjneicuewicjiwejcjowejc"
  );

  

  const projectOptions = ["Project 1", "Project 2", "Project 3", "Project 4", "Project 5"];
  const initialSelectedProjectOption = "Project 1";

  const statusOptions = ["Backlog", "Todo", "In Progress", "Done", "Canceled"];
  const initialSelectedStatusOption = "Backlog";

  const PriorityOptions = ["No priority", "Urgent", "High", "Medium", "Low"]; // Your options array
  const initialSelectedPriorityOption = "No priority"; // Initial selected option

  const AssigneOptions = ["Het", "Kushagra", "Nikhil"]; // Your options array
  const initialSelectedAssigneOption = "Het"; // Initial selected option

  const LabelOptions = ["Improvement", "Feature", "Bug", "None"]; // Your options array
  const initialSelectedLabelOption = "None"; // Initial selected option

  const cycleOptions = [
    "Cycle 1",
    "Cycle 2",
    "Cycle 3",
    "Cycle 4",
    "Cycle 5",
    "Cycle 6",
    "Cycle 7",
    "Cycle 8",
  ]; // Your options array
  const initialSelectedCycleOption = "Cycle 1"; // Initial selected option

  const [dueDate, setStartDate] = useState(formatDate("22/03/2024"));
  

  return (
    <div
      className="bg-gray-900 w-[30vw] flex flex-col overflow-auto text-white p-3"
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(0,0,0,0) rgba(0,0,0,0)",
      }}
    >
      <div className="my-4 flex justify-start items-center">
        <div className="text-white w-[20%] mr-3">Status</div>
        <Dropdown
          options={statusOptions}
          initialSelectedOption={initialSelectedStatusOption}
        />
      </div>

      <div className="mb-4 flex justify-start items-center">
        <div className="text-white w-[20%] mr-3">Priority</div>
        <Dropdown
          options={PriorityOptions}
          initialSelectedOption={initialSelectedPriorityOption}
        />
      </div>

      <div className="mb-4 flex justify-start items-center">
        <div className="text-white w-[20%] mr-3">Assigne</div>
        <Dropdown
          options={AssigneOptions}
          initialSelectedOption={initialSelectedAssigneOption}
        />
      </div>

      <div className="mb-4 flex justify-start items-center">
        <div className="text-white w-[20%] mr-3">Cycle</div>
        <Dropdown
          options={cycleOptions}
          initialSelectedOption={initialSelectedCycleOption}
        />
      </div>

      <div className="mb-4 flex justify-start items-center">
        <div className="text-white w-[20%] mr-3">Labels</div>
        <Dropdown
          options={LabelOptions}
          initialSelectedOption={initialSelectedLabelOption}
        />
      </div>

      <hr class="w-[95%] h-1 mx-auto mb-5 mt-3 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-400"></hr>

      <div className="mb-4 flex justify-start items-center">
        <div className="text-white w-[20%] mr-3">Project</div>
        <Dropdown
          options={projectOptions}
          initialSelectedOption={initialSelectedProjectOption}
        />
      </div>

      <div className="mb-4 flex justify-start items-center">
        <div className="text-white w-[20%] mr-3">Due date</div>
        <DatePicker
          selected={dueDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy"
          className="bg-gray-800 text-white py-1 px-4 rounded inline-flex items-center focus:outline-none w-40"
        />
      </div>
    </div>
  );
}

export default RightBar;
