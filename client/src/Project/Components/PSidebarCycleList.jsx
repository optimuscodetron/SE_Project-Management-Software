import { useState } from "react";
import { FaRecycle } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
const PSidebarCycleList = (props) => {
  const [showCyclesList, setShowCyclesList] = useState(false);
  const showCyclesListHandler = () => {
    setShowCyclesList((prevState) => !prevState);
  };
  const cycleList = ["Upcoming Cycle", "Current Cycle", "Previous Cycle"];
  return (
    <div>
      <div
        className="flex items-center p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-950 group justify-between cursor-pointer"
        onClick={showCyclesListHandler}
      >
        <div className="flex">
          <FaRecycle />
          <span class="text-sm ms-3">Cycles</span>
        </div>
        {showCyclesList ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {showCyclesList && (
        <ul className={"flex row ml-8"}>
          <li onClick={props.openUpcomingCycle}>
            <div className="p-2 text-sm text-white text-decoration-none  rounded-lg hover:bg-gray-950 group ">
              {cycleList[0]}
            </div>
          </li>
          <li>
            <div className="p-2 text-sm text-white text-decoration-none  rounded-lg hover:bg-gray-950 group ">
              {cycleList[1]}
            </div>
          </li>
          <li>
            <div className="p-2 text-sm text-white text-decoration-none  rounded-lg hover:bg-gray-950 group ">
              {cycleList[2]}
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};
export default PSidebarCycleList;
