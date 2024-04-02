import React, { useState, useEffect } from "react";
import ProjectSettingSidebar from "./Components/ProjectSettingSidebar";
import ProjectSettingGeneral from "./Components/ProjectSettingGeneral";
import ProjectSettingTeamMembers from "./Components/ProjectSettingTeamMembers";
import ProjectSettingCycle from "./Components/ProjectSettingCycle";
import axios from "axios";

function ProjectSettings() {
  const [loc, setLoc] = useState("1");
  const [project, setProject] = useState(null); // State to store project information
  const projectID = "66096291fd18d89649ffa198"; // Hardcoded projectID for now

  useEffect(() => {
    // Fetch project information when component mounts
    axios
      .post(
        "http://localhost:8000/api/projectInfo",
        { projectID },
        { withCredentials: true }
      )
      .then((response) => {
        setProject(response.data.project);
      })
      .catch((error) => {
        console.error("Error fetching project information:", error);
      });
  }, [projectID]);

  const render = () => {
    // console.log(project);
    if (loc === "1") {
      return <ProjectSettingGeneral project={project} />;
    } else if (loc === "2") {
      return <ProjectSettingTeamMembers project={project} />;
    } else if (loc === "3") {
      return <ProjectSettingCycle project={project} />;
    }
  };

  return (
    <>
      {!project ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-row h-screen w-screen">
          <ProjectSettingSidebar updateLoc={setLoc} loc={loc} />
          {render()}
        </div>
      )}
    </>
  );
}

export default ProjectSettings;
