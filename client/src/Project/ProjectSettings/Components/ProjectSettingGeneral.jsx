import React, { useState } from "react";
import Dropdown from "../../../Components/Layout/DropDown/dropdown";

function ProjectSettingGeneral({ project }) {
  const [workspaceName, setWorkspaceName] = useState("IIT_Ropar");
  const [projectName, setProjectName] = useState(project.name);
  const projectStatusOptions = [
    "Backlog",
    "Planned",
    "In Progress",
    "Completed",
    "Cancelled",
  ];
  const initialSelectedStatus = project.status;
  const [aboutProject, setAboutProject] = useState(project.description);
  const [inputValue, setInputValue] = useState(projectName);

  const handleInputChangeProjectName = (event) => {
    const changedValue = event.target.value;
    setProjectName(changedValue);
    setInputValue(event.target.value);
  };
  const handleAboutProjectChange = (event) => {
    setAboutProject(event.target.value);
  };

  return (
    <div className="bg-gray-800 w-full h-screen text-white flex justify-center p-10">
      <form
        action="#"
        className="mb-4 rounded w-full lg:w-[60%] h-[100%] bg-gray-900 p-3 overflow-auto "
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(0,0,0,0) rgba(0,0,0,0)",
        }}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="text-gray-400 text-base mb-2">
          {workspaceName} <span className="mx-2"> / </span> Projects{" "}
          <span className="mx-2"> / </span> {projectName}
        </div>
        <h1 className="text-3xl tracking-wide font-semibold mb-4 border-b border-gray-600 pb-3">
          Project Details
        </h1>

        <div class="mb-4 ">
          <label for="form-field-17" class="block text-lg text-white  mt-10">
            Project Name
          </label>
          <input
            name="name"
            value={projectName}
            onChange={handleInputChangeProjectName}
            class="h-10 w-[60%] lg:w-[17vw] px-2 rounded-sm border-[1px] border-gray-600 text-white font-normal bg-[rgb(15,19,29)] text-base"
          />
          {inputValue.trim() === "" && (
            <p className="text-red-500 text-xs italic mt-1">
              Project name must not be empty.
            </p>
          )}
        </div>

        <div className="mb-4 ">
          <label for="form-field-17" class="block text-lg text-white  mt-10">
            Status
          </label>
          <Dropdown
            options={projectStatusOptions}
            initialSelectedOption={initialSelectedStatus}
            width="64"
          />
        </div>

        <div class="mb-4">
          <label for="form-field-19" class="block text-lg text-white mt-10">
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
  );
}
export default ProjectSettingGeneral;
