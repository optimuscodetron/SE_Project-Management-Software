import { useEffect, useState } from "react";
import upcomingList from "./components/upcomingList";
import UpcomingPanel from "./components/upcomingPanel";
import { LuCircleDashed } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa6";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { FaRegTimesCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
const UpcomingCycles = () => {
  const [toDoIssues, setToDoIssues] = useState([]);
  const [inProgressIssues, setInProgressIssues] = useState([]);
  const [backlogIssues, setBacklogIssues] = useState([]);
  const [doneIssues, setDoneIssues] = useState([]);
  const [cancelledIssues, setCancelledIssues] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    const todoDummy = [];
    const inProgressDummy = [];
    const backlogDummy = [];
    const doneDummy = [];
    const cancelledDummy = [];
    upcomingList.forEach((issue) => {
      if (issue.status === "ToDo") {
        todoDummy.push(issue);
      } else if (issue.status === "InProgress") {
        inProgressDummy.push(issue);
      } else if (issue.status === "Backlog") {
        backlogDummy.push(issue);
      } else if (issue.status === "Cancelled") {
        cancelledDummy.push(issue);
      } else if (issue.status === "Done") {
        doneDummy.push(issue);
      }
    });

    // setFirstTime(false);
    setToDoIssues(todoDummy);
    setInProgressIssues(inProgressDummy);
    setBacklogIssues(backlogDummy);
    setCancelledIssues(cancelledDummy);
    setDoneIssues(doneDummy);
    setDataLoaded(true);
  }, []);

  const moveIssue = (issueId, currentStatus, newStatus) => {
    console.log("Function moveIssue Called with status", { newStatus });
    let currentIssue;
    if (currentStatus === newStatus) {
      console.log("Current Status and New Status are the same");
      return 0;
    } else {
      const removeFromStage = (issues, setter) => {
        currentIssue = issues.find((issue) => issue.id === issueId);
        console.log(currentIssue);
        currentIssue.status = newStatus;
        const updatedIssues = issues.filter((issue) => issue.id !== issueId);
        setter(updatedIssues);
      };
      const addToStage = (issues, setter) => {
        setter([...issues, currentIssue]);
      };
      switch (newStatus) {
        case "Backlog":
          if (currentStatus === "ToDo")
            removeFromStage(toDoIssues, setToDoIssues);
          else if (currentStatus === "InProgress")
            removeFromStage(inProgressIssues, setInProgressIssues);
          else if (currentStatus === "Done")
            removeFromStage(doneIssues, setDoneIssues);
          else if (currentStatus === "Cancelled")
            removeFromStage(cancelledIssues, setCancelledIssues);
          // removeFromStage(Issues, setter);
          addToStage(backlogIssues, setBacklogIssues);
          break;
        case "ToDo":
          if (currentStatus === "Backlog")
            removeFromStage(backlogIssues, setBacklogIssues);
          else if (currentStatus === "InProgress")
            removeFromStage(inProgressIssues, setInProgressIssues);
          else if (currentStatus === "Done")
            removeFromStage(doneIssues, setDoneIssues);
          else if (currentStatus === "Cancelled")
            removeFromStage(cancelledIssues, setCancelledIssues);
          addToStage(toDoIssues, setToDoIssues);
          break;
        case "InProgress":
          if (currentStatus === "Backlog")
            removeFromStage(backlogIssues, setBacklogIssues);
          else if (currentStatus === "ToDo")
            removeFromStage(toDoIssues, setToDoIssues);
          else if (currentStatus === "Done")
            removeFromStage(doneIssues, setDoneIssues);
          else if (currentStatus === "Cancelled")
            removeFromStage(cancelledIssues, setCancelledIssues);
          addToStage(inProgressIssues, setInProgressIssues);
          break;
        case "Done":
          if (currentStatus === "Backlog")
            removeFromStage(backlogIssues, setBacklogIssues);
          else if (currentStatus === "ToDo")
            removeFromStage(toDoIssues, setToDoIssues);
          else if (currentStatus === "InProgress")
            removeFromStage(inProgressIssues, setInProgressIssues);
          else if (currentStatus === "Cancelled")
            removeFromStage(cancelledIssues, setCancelledIssues);
          addToStage(doneIssues, setDoneIssues);
          break;
        case "Cancelled":
          if (currentStatus === "Backlog")
            removeFromStage(backlogIssues, setBacklogIssues);
          else if (currentStatus === "ToDo")
            removeFromStage(toDoIssues, setToDoIssues);
          else if (currentStatus === "InProgress")
            removeFromStage(inProgressIssues, setInProgressIssues);
          else if (currentStatus === "Done")
            removeFromStage(doneIssues, setDoneIssues);
          addToStage(cancelledIssues, setCancelledIssues);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className=" mt-16 bg-[#171e28] overflow-x-scroll ">
      {dataLoaded && (
        <div className="flex flex-row w-screen">
          <div className="w-[320px]">
            <UpcomingPanel
              statusName="Backlog"
              issues={backlogIssues}
              onMoveIssue={moveIssue}
              icon={<LuCircleDashed />}
            />
          </div>
          <div className="w-[320px]">
            <UpcomingPanel
              statusName="To Do"
              issues={toDoIssues}
              onMoveIssue={moveIssue}
              icon={<FaRegCircle />}
            />
          </div>
          <div className="w-[320px]">
            <UpcomingPanel
              statusName="In Progress"
              issues={inProgressIssues}
              onMoveIssue={moveIssue}
              icon={<FaCircleHalfStroke />}
              iconColor="text-yellow-400"
            />
          </div>
          <div className="w-[320px]">
            <UpcomingPanel
              statusName="Done"
              issues={doneIssues}
              onMoveIssue={moveIssue}
              icon={<FaRegCheckCircle />}
              iconColor="text-green-400"
            />
          </div>
          <div className="w-[320px]">
            <UpcomingPanel
              statusName="Cancelled"
              issues={cancelledIssues}
              onMoveIssue={moveIssue}
              icon={<FaRegTimesCircle />}
              iconColor="text-red-400"
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default UpcomingCycles;
