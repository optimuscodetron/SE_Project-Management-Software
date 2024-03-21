import { useState } from "react";
import { useEffect } from "react";

import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import Axios from "axios";

const WorkspaceListSidebar = () => {



  const [showWorkspaces, setShowWorkspaces] = useState(false);
  const showWorkspaceHandler = () => {
    setShowWorkspaces((prevState) => !prevState);
  }

    const [userWorkspaces,setUserWorkspace] = useState(["Workspace 1", "Workspace 2", "Workspace 3"]);
    const [currentWorkspace,setCurrentWorkspace] = useState(userWorkspaces[0]);
    const chooseWorkspaceHandler=(item,index)=>{
        // console.log(index);
        setCurrentWorkspace(userWorkspaces[index]);
        setShowWorkspaces(!showWorkspaces);
    }

  useEffect(() => {

    console.log('hello');
    const data={
      workspaceId:"65fc632fd70364c8633c67dd",
    }

    Axios.post('http://localhost:8000/api/getAllProjectOfUser', data , {withCredentials:true,})
      .then(res => {

        if (res.status == 200) {
          // console.log(res.data.workspaceNames);
          // setUserWorkspace(res.data.workspaceNames);
          // setCurrentWorkspace(res.data.workspaceNames[0]);
        }
        else {
          console.log("error");
        }
      })
      .catch((error) => {
        console.log(error);
      });



  }, [])

    return (
        <>
        <div className="flex items-center p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-900 group justify-between" onClick={showWorkspaceHandler}>
              <div className="flex">
                <PiMonitorFill/>
                <span className="text-sm ms-3">{currentWorkspace}</span>
                </div>
                {showWorkspaces?<FaChevronUp />:<FaChevronDown />}
              </div>
              {showWorkspaces&&<ul className={"flex row ml-8"}>
                {userWorkspaces.map((item,index) => (
                  <li key={index}>
                    <div className="p-2 text-sm font-semibold text-white text-decoration-none  rounded-lg hover:bg-gray-900 group " onClick={()=>chooseWorkspaceHandler(item,index)}>
                      {item}
                    </div>
                  </li>
                ))}
              </ul>}
        </>
    );
}
export default WorkspaceListSidebar;