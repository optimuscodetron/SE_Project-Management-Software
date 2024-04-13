
import { useState } from "react";
import { useEffect } from "react";
import { PiMonitorFill } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import Axios from "axios";//comment for testing


import { useSelector,useDispatch } from "react-redux";
import {changeWorkspaceNameId} from "../../../../redux/WorkspaceData/WorkspaceNameIdSlice"
import {changeworkspaceMemberList} from "../../../../redux/WorkspaceData/WorkspaceMemberListSlice";

const WorkspaceListSidebar = (props) => {

  const dispatch = useDispatch()//comment for testing
  const workspaceId=useSelector((state)=>state.workspaceNameId.value.id);
  
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

  const fetchWorkspaceData = async () => { // comment for testing
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
          dispatch(changeWorkspaceNameId({name:data.workspaces[0].name,id:data.workspaces[0].id,url:data.workspaces[0].url}));
          return data.workspaces
        });
        console.log(workspaceData);
      } else {
        throw new Error('Internal server error');
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
      // Handle error here
    }
  };



  const chooseWorkspaceHandler = (item, index) => {
  
    dispatch(changeWorkspaceNameId({name:item.name,id:item.id,url:item.url}));// comment for testing

    const data = {
      headerIcon: <PiMonitorFill />,
      headerTitle: userWorkspaces[index]
    }
    props.headerInfo(data);//comment for testing
    setCurrentWorkspace(userWorkspaces[index]);
    setShowWorkspaces(!showWorkspaces);
    fetchallmembersOfWorkspace();

  }
  const fetchallmembersOfWorkspace = async () => {
    try {
      // Replace 'your_workspace_id' with the actual workspace ID
      const data = {
        workspaceId: workspaceId
      }
      const response = await Axios.post('http://localhost:8000/workspace/members', data, {
        withCredentials: true,
      });

      if (response.status === 200) {
        const Memberdata = await response.data.members;
        // setMembers(data.members);
        console.log(Memberdata);
        dispatch(changeworkspaceMemberList(Memberdata));
      }
      else {
        throw new Error('Failed to fetch members of the workspace');
      }
    } catch (error) {
      console.error('Error fetching members:', error);
    }

  }
  



  return (
    <>
      <div className="flex items-center p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-900 group justify-between cursor-pointer" onClick={showWorkspaceHandler}>
        <div className="flex" onClick={props.openWorkspace}>
          <PiMonitorFill />
          <span className="text-sm ms-3">{currentWorkspace}</span>
        </div>
        {showWorkspaces ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {showWorkspaces && <ul className={"flex row ml-8"}>
        {workspaceData.map((item, index) => (
          <li key={index} >
            <div className="p-2 text-sm font-semibold text-white text-decoration-none  rounded-lg hover:bg-gray-900 group " onClick={() => chooseWorkspaceHandler(item, index)}>
              {item.name}
            </div>
          </li>
        ))}
      </ul>}
    </>
  );
}
export default WorkspaceListSidebar;