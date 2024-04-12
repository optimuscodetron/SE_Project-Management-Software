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

export default function ProjectIssues() {
  const projectId = useSelector((state) => state.activeProject.value.id);
  console.log(projectId)
  const [ changeStatusVar, setChangeStatusVar ] = useState(false);

  const [backlogIssues, setBacklogIssues] = useState([
    { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'John Doe', status: 'Backlog' },
    // ...
    { id: 2, title: 'Issue 1', description: 'Description 1', assignee: 'John Doe', status: 'Backlog' },
    // ...
  ]);
  const [toDoIssues, setToDoIssues] = useState([
    { id: 3, title: 'Issue 3', description: 'Description 1', assignee: 'John Doe', status: 'ToDo' },

  ]);
  const [inProgressIssues, setInProgressIssues] = useState([
    { id: 12, title: 'Issue 12', description: 'Description 1', assignee: 'John Doe', status: 'InProgress' },
    // ...

  ]);
  const [doneIssues, setDoneIssues] = useState([
    { id: 15, title: 'Issue 51', description: 'Description 1', assignee: 'John Doe', status: 'Done' },

  ]);
  const [cancelledIssues, setCancelledIssues] = useState([
    { id: 17, title: 'Issue 17', description: 'Description 1', assignee: 'John Doe', status: 'Cancelled' },

  ]);

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
        </div>
        </div>
    );
}