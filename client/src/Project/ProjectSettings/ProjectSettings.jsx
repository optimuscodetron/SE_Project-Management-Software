import React, { useState, useEffect } from "react";
import Axios from "axios";
import ProjectSettingSidebar from "./Components/ProjectSettingSidebar";
import ProjectSettingGeneral from "./Components/ProjectSettingGeneral";
import ProjectSettingTeamMembers from "./Components/ProjectSettingTeamMembers";
import ProjectSettingSprint from "./Components/ProjectSettingSprint";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProjectSettings() {
  const [loc, setLoc] = useState("1");
  const project =useSelector((state) => state.activeProject.value);
  const teamMembers =useSelector((state) => state.activeProjectAllMember.value);

  const navigate = useNavigate();
  useEffect(() => {
    const isUserLoggedIn = () => {
      const cookies = document.cookie.split(";");
      console.log(document.cookie);
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith("usertoken=")) {
          const token = cookie.substring("usertoken=".length, cookie.length);
          // If token has some value, return true indicating user is logged in
          if (token) {
            return true;
          }
        }
      }
      // If no token found or token is empty, return false
      return false;
    };

    // Check if the user is logged in
    const isLoggedIn = isUserLoggedIn();
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      navigate("/login");
    }
  },[]);


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
