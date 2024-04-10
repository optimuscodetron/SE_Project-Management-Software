import React, { useState, useEffect } from "react";
import Axios from "axios";
import ProjectSettingSidebar from "./Components/ProjectSettingSidebar";
import ProjectSettingGeneral from "./Components/ProjectSettingGeneral";
import ProjectSettingTeamMembers from "./Components/ProjectSettingTeamMembers";
import ProjectSettingCycle from "./Components/ProjectSettingCycle";

function ProjectSettings() {
  const [loc, setLoc] = useState("1");
  const [project, setProject] = useState(null); // State to store project information
  const projectID = "66096291fd18d89649ffa198"; // Hardcoded projectID for now
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetchProjectInfo(projectID);
  }, []);

  const fetchProjectInfo = async (projectID) => {
    try {
      // Make a GET request to the backend API endpoint
      const response = await Axios.post(
        "http://localhost:8000/api/projectInfo",
        {
          projectID: projectID, // Pass the projectID in the request body
        },
        {
          withCredentials: true,
        }
      );

      // Extract project and members data from the response
      const { project, members } = response.data;
      // Process project and members data as needed
      console.log("Project:", project);
      console.log("Members:", members);
      setProject(project);
      setTeamMembers(members);

      // Return the project and members data or do further processing
      // return { project, members };
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
      throw error; // Optionally re-throw the error for handling in the calling function
    }
  };

  const render = () => {
    // console.log(project);
    if (loc === "1") {
      return <ProjectSettingGeneral project={project} />;
    } else if (loc === "2") {
      return (
        <ProjectSettingTeamMembers
          project={project}
          teamMembers={teamMembers}
          setTeamMembers={setTeamMembers}
        />
      );
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
