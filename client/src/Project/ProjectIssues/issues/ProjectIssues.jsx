import React from "react";
import { useState, useEffect } from "react";
import IssuePanel from "../../../Workspace/workspaceIssues/components/issuePanel";
import IssuesList from "../../../Workspace/workspaceIssues/components/issuesList";
import { LuCircleDashed } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa6";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { FaRegTimesCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import Loader from '../../../loading';

export default function ProjectIssues() {
  const dispatch = useDispatch()
  const projectId = useSelector((state) => state.activeProject.value._id);
  const activeProjectAllIssues = useSelector((state) => state.activeProjectIssues.value);
  console.log(projectId)
  const [changeStatusVar, setChangeStatusVar] = useState(false);

  const [backlogIssues, setBacklogIssues] = useState([]);
  const [toDoIssues, setToDoIssues] = useState([]);
  const [inProgressIssues, setInProgressIssues] = useState([]);
  const [doneIssues, setDoneIssues] = useState([]);
  const [cancelledIssues, setCancelledIssues] = useState([]);

  const moveIssue = (issueId, currentStatus, newStatus) => {
    console.log("Function moveIssue Called with status", { newStatus });
    console.log(issueId);
    updateIssueStatus(issueId, newStatus);

  };
  useEffect(() => {
    // console.log("hello"+projectId);
    if (projectId) {
      const modifiedIssues = activeProjectAllIssues.map(issue => {
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
    }
  }, [projectId, changeStatusVar]);
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
    <>
      {{ projectId } ?
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
        </div> : <Loader />
      }
    </>
  );
}