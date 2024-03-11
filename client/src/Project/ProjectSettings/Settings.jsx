import React, { useState } from "react";

import PSidebar from "../Components/PSidebar";
const Settings = () => {
  const [workspaceName, setWorkspaceName] = useState("IIT_Ropar");
  const [projectName, setProjectName] = useState("SE Project");
  const [projectUrl, setProjectUrl] = useState(
    "www.trackerx.app/" + projectName
  );
  const [aboutProject, setAboutProject] = useState(
    "Description of the project"
  );

  const handleInputChangeProjectName = (event) => {
    const changedValue = event.target.value;
    setProjectName(changedValue);
    setProjectUrl("www.trackerx.app/" + changedValue);
  };
  const handleAboutProjectChange = (event) => {
    setAboutProject(event.target.value);
  };

  return (
    <div className="flex flex-row h-screen w-screen">
      <PSidebar />
      <div className="bg-gray-800 w-full text-white flex justify-center p-10">
        <form action="#" className="mb-4 w-full lg:w-[60%] bg-gray-900 p-3 " onSubmit={(e)=>e.preventDefault()}>
          <div className="text-gray-400 text-base">
            {workspaceName} <span className="mx-2"> / </span> Projects{" "}
            <span className="mx-2"> / </span> {projectName}
          </div>

          <div className="text-4xl mt-2 font-bold border-b border-gray-600 pb-3">Project Details</div>

          <div class="mb-4 ">
            <label
              for="form-field-17"
              class="block text-lg text-white  mt-10"
            >
              Project Name
            </label>
            <input
              name="name"
              value={projectName}
              onChange={handleInputChangeProjectName}
              class="h-10 w-[60%] lg:w-[17vw] px-2 rounded-sm border-[1px] border-gray-600 text-white font-normal bg-[rgb(15,19,29)] text-base"
            />
          </div>

          <div class="mb-4">
            <label class="block text-lg text-white mt-10 ">
              Project URL
            </label>
            <input
              name="url"
              class="h-10 w-[60%] lg:w-[17vw] px-2 rounded-sm border-[1px] border-gray-600 text-white font-normal bg-[rgb(15,19,29)] text-base"
              value={projectUrl}
            />
          </div>

          <div class="mb-4">
            <label
              for="form-field-19"
              class="block text-lg text-white mt-10"
            >
              Project Description
            </label>
            <textarea
              name="desciption"
              value={aboutProject}
              onChange={handleAboutProjectChange}
              class="h-40 w-full px-2 rounded-sm border-[1px] border-gray-600 text-white font-normal bg-[rgb(15,19,29)] text-base resize-none"
            />
          </div>

          <div class="flex justify-between">
            <button
              type="submit"
              class="inline-flex items-center px-4 py-2 bg-[#9333EA] rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:outline-none hover:bg-[#9233eac6] hover:ring hover:ring-indigo-300 disabled:opacity-25 transition"
            >
              Submit
            </button>
            <button
              type="delete"
              class="inline-flex items-center px-4 py-2 bg-red-800 rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:outline-none hover:border-indigo-800 hover:ring hover:ring-indigo-300 disabled:opacity-25 transition"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Settings;
