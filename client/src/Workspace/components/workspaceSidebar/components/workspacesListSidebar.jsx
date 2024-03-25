
import { useState } from "react";
import { useEffect } from "react";
import { PiMonitorFill } from "react-icons/pi";
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
    useEffect(()=>{

      props.headerInfo({headerIcon:<PiMonitorFill/>,
      headerTitle:currentWorkspace});
    },[]);
    const chooseWorkspaceHandler=(item,index)=>{
        // console.log(index);
        const data={headerIcon:<PiMonitorFill/>,
        headerTitle:userWorkspaces[index]}
        props.headerInfo(data);
        setCurrentWorkspace(userWorkspaces[index]);
        setShowWorkspaces(!showWorkspaces);
    }

  

    return (
        <>
        <div className="flex items-center p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-900 group justify-between cursor-pointer" onClick={showWorkspaceHandler}>
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