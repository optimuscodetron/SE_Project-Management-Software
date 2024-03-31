
import { useState } from "react";
import { useEffect } from "react";
import { PiMonitorFill } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import Axios from "axios";

import { useSelector,useDispatch } from "react-redux";
import changeWorkspaceId from "../../../../redux/WorkspaceData/WorkspaceIdSlice"



const WorkspaceListSidebar = (props) => {
  // const workspaceId=useSelector((state)=>state.workspaceId.value);
  const dispatch = useDispatch()
  // console.log(workspaceId);

  const [showWorkspaces, setShowWorkspaces] = useState(false);
  const showWorkspaceHandler = () => {
    setShowWorkspaces((prevState) => !prevState);
  }
  const [workspaceData, setWorkspaceData] = useState();
  const [userWorkspaces, setUserWorkspace] = useState(["Workspace 1", "Workspace 2", "Workspace 3"]);
  const [currentWorkspace, setCurrentWorkspace] = useState(userWorkspaces[0]);
  useEffect(() => {

    props.headerInfo({
      headerIcon: <PiMonitorFill />,
      headerTitle: currentWorkspace
    });
    fetchWorkspaceData();
  }, []);

  const fetchWorkspaceData = async () => {
    try {
      const response = await Axios.get('http://localhost:8000/api/getAllWorkspaceOfUser', {
        withCredentials: true,
      });
      if (response.status === 200) {
        const data = await response.data;
        console.log(data.workspaces);
        setWorkspaceData(()=>{
          const workspaceNames = data.workspaces.map(workspace => workspace.name);
          setUserWorkspace(workspaceNames);
          setCurrentWorkspace(workspaceNames[0]);
          return data.workspaces
        });
      } else {
        throw new Error('Internal server error');
      }
    } catch (error) {
      
      console.error('Error fetching data:', error.message);
      throw new Error('Error fetching data:');
    }
  };



  const chooseWorkspaceHandler = (item, index) => {
    // {props.workspaceId(item.id)}
    console.log(item.id);
    dispatch(changeWorkspaceId(item.id));

    // console.log(index);
    const data = {
      headerIcon: <PiMonitorFill />,
      headerTitle: userWorkspaces[index]
    }
    props.headerInfo(data);
    setCurrentWorkspace(userWorkspaces[index]);
    setShowWorkspaces(!showWorkspaces);
  }



  return (
    <>
      <div className="flex items-center p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-950 group justify-between cursor-pointer" onClick={showWorkspaceHandler}>
        <div className="flex" onClick={props.openWorkspace}>
          <PiMonitorFill />
          <span className="text-sm ms-3">{currentWorkspace}</span>
        </div>
        {showWorkspaces ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {showWorkspaces && <ul className={"flex row ml-8"}>
        {workspaceData.map((item, index) => (
          <li key={index} >
            <div className="p-2 text-sm font-semibold text-white text-decoration-none  rounded-lg hover:bg-gray-950 group " onClick={() => chooseWorkspaceHandler(item, index)}>
              {item.name}
            </div>
          </li>
        ))}
      </ul>}
    </>
  );
}
export default WorkspaceListSidebar;