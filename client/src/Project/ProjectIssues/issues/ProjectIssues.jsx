import React from "react";
import { useState, useEffect } from "react";
import IssuePanel from "../../../Workspace/workspaceIssues/components/issuePanel";

import { LuCircleDashed } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa6";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { FaRegTimesCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import { changeActiveProjectIssue } from "../../../redux/ProjectData/activeProjectIssuesSlice";
import FilterSidebar from "../Component/FilterSidebar";

export default function ProjectIssues(props) {
  const dispatch = useDispatch();

  // const issues = useSelector((store)=>store.activeProjectIssues.value);
  // console.log(issues);

  const projectId = useSelector((state) => state.activeProject.value.id);
  // console.log(projectId);

  const [ changeStatusVar, setChangeStatusVar ] = useState(false);

  
  const [ issues, setIssues ] = useState([
    { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'Ayush Sahu', status: 'Backlog',priority:"urgent" },
    { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'Ayush Sahu', status: 'Backlog',priority:"urgent" },
    { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'Ayush Sahu', status: 'Backlog',priority:"urgent" },
    { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'Ayush Sahu', status: 'Backlog',priority:"urgent" },
    { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'Ayush Sahu', status: 'Backlog',priority:"urgent" },

    // { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'Ayush Sahu', status: 'Backlog',priority:"urgent" },
    { id: 2, title: 'Issue 1', description: 'Description 1', assignee: 'Chetan Kamble', status: 'Backlog',priority:"medium" },
    { id: 3, title: 'Issue 3', description: 'Description 1', assignee: 'Het Patel', status: 'ToDo',priority:"low" },
    { id: 12, title: 'Issue 12', description: 'Description 1', assignee: 'John Doe', status: 'InProgress' ,priority:"high"},
    { id: 15, title: 'Issue 51', description: 'Description 1', assignee: 'John Doe', status: 'Done',priority:"low" },
    { id: 17, title: 'Issue 17', description: 'Description 1', assignee: 'John Doe', status: 'Cancelled',priority:"urgent" },

  ]);

  const [filteredList,setFilteredList]=useState(issues);

  const [backlogIssues, setBacklogIssues] = useState([]);
  const [toDoIssues, setToDoIssues] = useState([]);
  const [inProgressIssues, setInProgressIssues] = useState([]);
  const [doneIssues, setDoneIssues] = useState([]);
  const [cancelledIssues, setCancelledIssues] = useState([]);

  useEffect(()=>{
    const backlogIssues = [];
    const toDoIssues = [];
    const inProgressIssues = [];
    const doneIssues = [];
    const cancelledIssues = [];
    

    filteredList.forEach(issue => {
      switch (issue.status) {
        case 'Backlog':
          backlogIssues.push(issue);
          break;
        case 'ToDo':
          toDoIssues.push(issue);
          break;
        case 'InProgress':
          inProgressIssues.push(issue);
          break;
        case 'Done':
          doneIssues.push(issue);
          break;
        case 'Cancelled':
          cancelledIssues.push(issue);
          break;
        default:
          break;
      }
    });

    setBacklogIssues(backlogIssues);
    setToDoIssues(toDoIssues);
    setInProgressIssues(inProgressIssues);
    setDoneIssues(doneIssues);
    setCancelledIssues(cancelledIssues);
  },[filteredList])

 
  const handleFilterAssignee=(name)=>{
     setFilteredList(issues.filter((member,idx)=>{
                  return member.assignee.toLowerCase()===name.toLowerCase();
                })
     );
  
  }

  const handleFilterPriority=(priority)=>{
    setFilteredList(issues.filter((member,idx)=>{
      return member?.priority?.toLowerCase()===priority?.toLowerCase();
    }))
  }

  const handleClear=()=>{
    setFilteredList(issues);
  }



  const moveIssue = (issueId, currentStatus, newStatus) => {
    console.log("Function moveIssue Called with status", { newStatus });
    console.log(issueId);
    updateIssueStatus(issueId, newStatus);

  };


  useEffect(() => {
    // console.log("hello"+projectId);
    if(projectId)
   { fetchProjectIssue();}
  }, [projectId, changeStatusVar]);

  const fetchProjectIssue = async () => {
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
      const modifiedIssues = issues.map(issue => {
        // Extract the last four characters from the ID string
        const lastFourDigits = issue._id.slice(-4);

        // Return the issue object with the modified ID
        return { ...issue, id: lastFourDigits };
      });
      const backlogIssues = [];
      const toDoIssues = [];
      const inProgressIssues = [];
      const doneIssues = [];
      const cancelledIssues = [];

      modifiedIssues.forEach(issue => {
        switch (issue.stage) {
          case 'Backlog':
            backlogIssues.push(issue);
            break;
          case 'ToDo':
            toDoIssues.push(issue);
            break;
          case 'InProgress':
            inProgressIssues.push(issue);
            break;
          case 'Done':
            doneIssues.push(issue);
            break;
          case 'Cancelled':
            cancelledIssues.push(issue);
            break;
          default:
            break;
        }
      });

      setBacklogIssues(backlogIssues);
      setToDoIssues(toDoIssues);
      setInProgressIssues(inProgressIssues);
      setDoneIssues(doneIssues);
      setCancelledIssues(cancelledIssues);
    } catch (error) {
      // Handle errors
      console.error('Error fetching issues:', error);
    }
  }

  const updateIssueStatus = async (issueId, newStatus) => {
    try {
      // Send a PATCH request to update the issue status
      const response = await Axios.patch(`http://localhost:8000/issues/${issueId}/changeStatus`, { newStatus });
      // Handle the response
      if (response.status === 200) {
        console.log(response.data);
        setChangeStatusVar(previousValue => !previousValue);
      }
    } catch (error) {
      // Handle errors
      console.error('Error updating issue status:', error);
    }
  }

    return (
        // issues={backlogIssues} onMoveIssue={moveIssue}
        <div className="bg-[#171e28] overflow-x-scroll pt-2 px-2 h-full ">
            <div className="flex flex-row w-screen">
          <div className="w-[320px] mx-1">
            <IssuePanel
              stageName="Backlog"
              issues={backlogIssues}
              onMoveIssue={moveIssue}
              icon={<LuCircleDashed />}
            />
          </div>
          <div className="w-[320px] mx-1">
            <IssuePanel
              stageName="To Do"
              issues={toDoIssues}
              onMoveIssue={moveIssue}
              icon={<FaRegCircle />}
            />
          </div>
          <div className="w-[320px] mx-1">
            <IssuePanel
              stageName="In Progress"
              issues={inProgressIssues}
              onMoveIssue={moveIssue}
              icon={<FaCircleHalfStroke />}
              iconColor="text-yellow-400"
            />
          </div>
          <div className="w-[320px] mx-1">
            <IssuePanel
              stageName="Done"
              issues={doneIssues}
              onMoveIssue={moveIssue}
              icon={<FaRegCheckCircle />}
              iconColor='text-green-400'
            />
          </div>
          <div className="w-[320px] mx-1">
            <IssuePanel
              stageName="Cancelled"
              issues={cancelledIssues}
              onMoveIssue={moveIssue}
              icon={<FaRegTimesCircle />}
              iconColor='text-red-400'
            />
          </div>
          {props.showFilterSidebar && <div className="overflow-y-scroll" >
              <div className=" fixed right-0 h-full overflow-y-scroll z-10">
        
             <FilterSidebar 
             handleFilterAssignee={handleFilterAssignee} handleClear={handleClear} handleFilterPriority={handleFilterPriority} 
             />
             {/* <FilterSidebar /> */}
         
         </div>
        
       </div>}
        </div>
        </div>
    );
}