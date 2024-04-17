import { useState } from "react";
import { useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { RiTeamFill } from "react-icons/ri";
import { GoProjectRoadmap } from "react-icons/go";
import { MdFormatListBulletedAdd } from "react-icons/md";
import CreateNewProject from "../../../CreateNewProject/CreateNewProject";
import {changeActiveProject} from "../../../../redux/ProjectData/activeProjectSlice"
import { changeActiveProjectIssue } from "../../../../redux/ProjectData/activeProjectIssuesSlice";
import Axios from "axios";//comment for testing


import { useSelector,useDispatch } from "react-redux";
import { changeActiveProjectAllMember } from "../../../../redux/ProjectData/activeProjectAllMemberSlice";

const ProjectListSidebar = (props) => {
  const dispatch = useDispatch()
  const workspaceId=useSelector((state)=>state.workspaceNameId.value.id);
  const projectId = useSelector((state) => state.activeProject.value.id);
  //commented for testing
  console.log(workspaceId);//commented for testing
  

  const [showProject, setShowProject] = useState(false);
  const [isopen, setisopen] = useState(false);
 

  const showProjectHandler = () => {
    setShowProject((prevState) => !prevState);
  };

  const handlePopup = () => {
    setisopen(!isopen);
  };

  const teamName = "My Team Name";
  const [userProjects, setUserProject] = useState();


  useEffect(() => {
    fetchProjectData();
   

  }, [workspaceId]);
  //commented for testing

  const fetchProjectData = async () => {
   

    try {

      const data = {
        workspaceId: workspaceId,
      }
      const response = await Axios.post('http://localhost:8000/api/getAllProjectOfUser', data, {
        withCredentials: true,
      });

      if (response.status === 200) {
        const data = response.data;
        setUserProject(data.project)
      } else {
        throw new Error('Internal server error');
      }
    } catch (error) {
      
      console.error('Error fetching data:', error.message);
      throw new Error('Error fetching data:');
      
    }
  };

  const projectClickHandler = (item) => {
    // Dispatch the action to set the active project
    // dispatch(changeActiveProject({name: item.name, id: item.id}));
  //   if(projectId)
  //  {
    fetchActiveProjectIssue(item.id);
    fetchAllMemberOfProject(item.id);
  // }

  };

  const fetchActiveProjectIssue = async (projectId) => {
    try {
      // Use Axios to make a GET request with query parameters
      const response = await Axios.get(`http://localhost:8000/project/allIssues/${projectId}`, {
        withCredentials: true,
      }
      );
      // Handle the response from the backend
      console.log(response.data);
      // Do something with the data received from the backend
      const { issues } = response.data;
      dispatch(changeActiveProjectIssue(issues));
    } catch (error) {
      // Handle errors
      console.error('Error fetching issues:', error);
    }
  }

  const fetchAllMemberOfProject= async(projectId)=>{
    try{
      const response = await Axios.post(
        "http://localhost:8000/api/projectInfo",
        {
          projectID: projectId, // Pass the projectID in the request body
        },
        {
          withCredentials: true,
        }
      );

      // Extract project and members data from the response
      const { project, members } = response.data;
      console.log(members);
      dispatch(changeActiveProjectAllMember(members));
      console.log(project);
      dispatch(changeActiveProject(project));

    }
    catch(error){
      console.error('Error fetching all memeber:', error);
    }
  }

  return (
    <>
      <div className="flex items-center p-2 text-sm text-white text-decoration-none  rounded-lg hover:bg-gray-950 group">
        <RiTeamFill />
        <span className="flex-1 ms-3 whitespace-nowrap">{teamName}</span>
      </div>
      <ul>
        <li>
          <div className="flex items-center text-sm p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-950 group cursor-pointer" onClick={props.onOpenCreateProject}>
            <MdFormatListBulletedAdd />
            <span className="flex-1 ms-3 font-medium whitespace-nowrap">
              Create Project
            </span>
          </div>
        </li>
        <li>
          <div
            className="flex items-center p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-950 group justify-between cursor-pointer"
            onClick={showProjectHandler}
          >
            <div className="flex ">
              <GoProjectRoadmap />
              <span className="ms-3 text-sm ">All Projects</span>
            </div>
            {showProject ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {showProject && (
            <ul className={"flex row ml-8"}>
              {userProjects.map((item) => (
                <li>
                <NavLink to={'/workspace/project'} className="text-decoration-none " onClick={() => projectClickHandler(item)}>
                  <div className=" text-sm font-semibold p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-950 group truncate">
                    {item.name}
                  </div>
                </NavLink>
              </li>

              ))}
            </ul>
          )}
        </li>
      </ul>
    </>
  );
};
export default ProjectListSidebar;
