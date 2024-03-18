import React, { useState } from "react";
import ProjectSettingSidebar from "./Components/ProjectSettingSidebar";
import ProjectSettingGeneral from "./Components/ProjectSettingGeneral";
import ProjectSettingTeamMembers from "./Components/ProjectSettingTeamMembers";
import ProjectSettingCycle from "./Components/ProjectSettingCycle";

function ProjectSettings() {
  const [loc, setLoc] = useState("1");
  const render = () => {
    if (loc === "1") {
      return <ProjectSettingGeneral />;
    } 
    else if (loc === "2") {
      return <ProjectSettingTeamMembers />;
    } 
    else if (loc === "3") {
      return <ProjectSettingCycle />;
    }
  };

  return (
    <div className="flex flex-row h-screen w-screen">
      <ProjectSettingSidebar updateLoc={setLoc}  loc={loc}/>
      {render()}
    </div>
  );
}

export default ProjectSettings;
