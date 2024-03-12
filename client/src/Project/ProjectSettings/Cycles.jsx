import React, { useState } from "react";
import PSidebar from "../Components/PSidebar";

function Cycles() {
  const [workspaceName, setWorkspaceName] = useState("IIT_Ropar");
  const [projectName, setProjectName] = useState("SE Project");

  return (
    <div class="flex flex-row h-screen w-screen">
      <PSidebar />
      <div className="bg-gray-800 w-full h-screen text-white justify-center p-10">
        <div className="flex flex-col mx-auto h-[100%] mb-4 w-full lg:w-[60%] bg-gray-900 p-3 ">
          <div className="text-gray-400 text-base mb-2">
            {workspaceName} <span className="mx-2"> / </span> Projects{" "}
            <span className="mx-2"> / </span> {projectName}
          </div>
          <h1 className="text-3xl font-bold mb-4 border-b border-gray-600 pb-3">
            Cycles
          </h1>
          
        </div>
      </div>
    </div>
  );
}

export default Cycles;
