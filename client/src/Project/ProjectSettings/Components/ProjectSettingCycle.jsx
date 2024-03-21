import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Switch from "react-switch";

function ProjectSettingCycle() {
  const [workspaceName, setWorkspaceName] = useState("IIT_Ropar");
  const [projectName, setProjectName] = useState("SE Project");
  const [cycleEnabled, setCycleEnabled] = useState(false);
  const [cycleLasts, setCycleLasts] = useState("1");
  const [cooldownDuration, setCooldownDuration] = useState("1");
  const [cycleStarts, setCycleStarts] = useState(null);
  const [numCycles, setNumCycles] = useState("1");

  const handleToggleCycle = () => {
    setCycleEnabled(!cycleEnabled);
  };

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
          {workspaceName} <span className="mx-2"> / </span> Projects{" "}
          <span className="mx-2"> / </span> {projectName}
        </div>
        <h1 className="text-3xl tracking-wide font-semibold mb-10 border-b border-gray-600 pb-3 ">
          Cycles
        </h1>
        <div className="flex justify-between mb-4">
          <div className="text-2xl ">Enable Cycle</div>
          <div>
            <Switch
              checked={cycleEnabled}
              onChange={handleToggleCycle}
              onColor="#007bff"
              offColor="#6c757d"
              height={28}
              width={60}
            />
          </div>
        </div>
        {cycleEnabled ? (
          <div className="rounded border bg-gray-950 border-gray-700 p-3 border-rou">
            <div className="mb-4 flex justify-between  border-b border-gray-600 pb-3">
              <div className="text-white">Each Cycle Lasts</div>
              <select
                value={cycleLasts}
                onChange={(e) => setCycleLasts(e.target.value)}
                className="block appearance-none w-[30%] bg-[rgb(15,19,29)] border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:border-blue-500"
              >
                <option value="1">
                  1 week{"   "}
                  {cycleLasts === "1" && <span className="ml-2">&#10003;</span>}
                </option>
                <option value="2">
                  2 weeks{"   "}
                  {cycleLasts === "2" && <span className="ml-2">&#10003;</span>}
                </option>
                <option value="3">
                  3 weeks{"   "}
                  {cycleLasts === "3" && <span className="ml-2">&#10003;</span>}
                </option>
                <option value="4">
                  4 weeks{"   "}
                  {cycleLasts === "4" && <span className="ml-2">&#10003;</span>}
                </option>
                <option value="5">
                  5 weeks{"   "}
                  {cycleLasts === "5" && <span className="ml-2">&#10003;</span>}
                </option>
                <option value="6">
                  6 weeks{"   "}
                  {cycleLasts === "6" && <span className="ml-2">&#10003;</span>}
                </option>
                <option value="7">
                  7 weeks{"   "}
                  {cycleLasts === "7" && <span className="ml-2">&#10003;</span>}
                </option>
                <option value="8">
                  8 weeks{"   "}
                  {cycleLasts === "8" && <span className="ml-2">&#10003;</span>}
                </option>
                {/* Add duration options */}
              </select>
            </div>

            <div className="mb-4 flex justify-between  border-b border-gray-600 pb-3">
              <div className="text-white">Cooldown After Each Cycle</div>
              <select
                value={cooldownDuration}
                onChange={(e) => setCooldownDuration(e.target.value)}
                className="block appearance-none w-[30%] bg-[rgb(15,19,29)] border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:border-blue-500"
              >
                <option value="4">
                  {" "}
                  No Cooldown{"   "}{" "}
                  {cooldownDuration === "4" && (
                    <span className="ml-2">&#10003;</span>
                  )}{" "}
                </option>
                <option value="1">
                  1 week{"   "}
                  {cooldownDuration === "1" && (
                    <span className="ml-2">&#10003;</span>
                  )}
                </option>
                <option value="2">
                  2 weeks{"   "}
                  {cooldownDuration === "2" && (
                    <span className="ml-2">&#10003;</span>
                  )}
                </option>
                <option value="3">
                  3 weeks{"   "}
                  {cooldownDuration === "3" && (
                    <span className="ml-2">&#10003;</span>
                  )}
                </option>

                {/* Add cooldown duration options */}
              </select>
            </div>

            <div className="mb-4 flex justify-between  border-b border-gray-600 pb-3">
              <div className="text-white">
                Number of Upcoming Cycles to Create
              </div>
              <select
                value={numCycles}
                onChange={(e) => setNumCycles(e.target.value)}
                className="block appearance-none w-[30%] bg-[rgb(15,19,29)] border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:border-blue-500"
              >
                <option value="1">
                  1 cycle{"   "}
                  {numCycles === "1" && <span className="ml-2">&#10003;</span>}
                </option>
                <option value="2">
                  2 cycles{"   "}
                  {numCycles === "2" && <span className="ml-2">&#10003;</span>}
                </option>
                <option value="3">
                  3 cycles{"   "}
                  {numCycles === "3" && <span className="ml-2">&#10003;</span>}
                </option>
                <option value="4">
                  4 cycles{"   "}
                  {numCycles === "4" && <span className="ml-2">&#10003;</span>}
                </option>
                <option value="5">
                  5 cycles{"   "}
                  {numCycles === "5" && <span className="ml-2">&#10003;</span>}
                </option>
                <option value="6">
                  6 cycles{"   "}
                  {numCycles === "6" && <span className="ml-2">&#10003;</span>}
                </option>
                {/* Add number of cycles options */}
              </select>
            </div>

            <div className=" flex justify-between  ">
              <div className="text-white">Cycle Starts On</div>
              <DatePicker
                selected={cycleStarts}
                onChange={(date) => setCycleStarts(date)}
                className=" bg-[rgb(15,19,29)] border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:border-blue-500"
                placeholderText="Select Date"
              />
            </div>
          </div>
        ) : (
          <>
            {/* <p className="text-gray-600 mb-4">Enable Cycle</p>
            <button
              onClick={handleToggleCycle}
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Enable
            </button> */}
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectSettingCycle;
