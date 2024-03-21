import { useState } from "react";
import { useEffect } from "react";

import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import Axios from "axios";

const WorkspaceListSidebar=()=>{

  

    const [showWorkspaces,setShowWorkspaces]=useState(false);
    const showWorkspaceHandler=()=>{
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
       const dummyWorkspaces =
      {
          name: 'Dummy Workspace 1',
          url: 'http://dummyworkspace1.com',
          adminUserId: '65f896c8d55907704a2c9a28', // Replace with actual user ID
          memberIds: ['65f896c8d55907704a2c9a28', '65fb2f77d0fa44af4e9b35ba'], // Replace with actual user IDs
          projectIds: [] // Replace with actual project IDs
      }
      Axios.get('http://localhost:8000/api/getAllWorkspaceOfUser',dummyWorkspaces, {
        withCredentials: true,
      })
      .then(res => {
          
          if(res.status==200){
              console.log(res.data.workspace);
              
              setUserWorkspace(res.data.workspace);

          }
          else{
            console.log("error");
          }
      })
      .catch((error) => {
        console.log(error);
      });
  
      
  
    },[])

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