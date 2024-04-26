import React, { useState, useEffect } from "react";
import Axios from "axios";
import ProjectSettingSidebar from "./Components/ProjectSettingSidebar";
import ProjectSettingGeneral from "./Components/ProjectSettingGeneral";
import ProjectSettingTeamMembers from "./Components/ProjectSettingTeamMembers";
import ProjectSettingSprint from "./Components/ProjectSettingSprint";
import { useSelector,useDispatch } from "react-redux";

function ProjectSettings() {
  const [loc, setLoc] = useState("1");
  const project =useSelector((state) => state.activeProject.value);
  const teamMembers =useSelector((state) => state.activeProjectAllMember.value);

  useEffect(() => {

  }, []);


  const render = () => {
    // console.log(project);
    if (loc === "1") {
      return <ProjectSettingGeneral/>;
    } else if (loc === "2") {
      return (
        <ProjectSettingTeamMembers
        />
      );
    } else if (loc === "3") {
      return <ProjectSettingSprint />;
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
