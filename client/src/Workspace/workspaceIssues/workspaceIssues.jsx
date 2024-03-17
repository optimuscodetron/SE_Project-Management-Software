import { useEffect, useState } from "react";
import IssuesList from "./components/issuesList";
import IssueStage from "../../Project/ProjectBoard/Componets/IssueStage";
import IssuePanel from "./components/issuePanel";
import { BsFill0CircleFill } from "react-icons/bs";
import { BsFill1CircleFill } from "react-icons/bs";
import { BsFill2CircleFill } from "react-icons/bs";
import { BsFill3CircleFill } from "react-icons/bs";
import { BsFill4CircleFill } from "react-icons/bs";
import { BsFill5CircleFill } from "react-icons/bs";
const WorkspaceIssues = () => {
  const [issues, setIssues] = useState(IssuesList);
  const [toDoIssues, setToDoIssues] = useState([]);
  const [inProgressIssues, setInProgressIssues] = useState([]);
  const [backlogIssues, setBacklogIssues] = useState([]);
  const [doneIssues, setDoneIssues] = useState([]);
  const [cancelledIssues, setCancelledIssues] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [firsttime, setFirstTime] = useState(true);
  useEffect(() => {
    const todoDummy = [];
    const inProgressDummy = [];
    const backlogDummy = [];
    const doneDummy = [];
    const cancelledDummy = [];
    {
      IssuesList.forEach((issue) => {
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
    }
    // setFirstTime(false);
    setToDoIssues(todoDummy);
    setInProgressIssues(inProgressDummy);
    setBacklogIssues(doneDummy);
    setCancelledIssues(cancelledDummy);
    setDoneIssues(backlogDummy);
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

      // // Add the issue to the new stage
      const addToStage = (issues, setter) => {
        // const issueToMove = allIssues.find(issue => issue.id === issueId);
        // if (issueToMove) {
        //     setter([...issues, issueToMove]);
        // }
        setter([...issues, currentIssue]);
        console.log(backlogIssues);
      };
      switch (newStatus) {
        case "Backlog":
          // setter+=currentStatus;
          // setter+="Issues";
          // console.log(setter);
          // Issues=currentStatus.charAt(0).toLowerCase() + currentStatus.slice(1);
          // Issues+="Issues";
          // console.log(Issues);
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
          // setter+=currentStatus;
          // setter+="Issues";

          // console.log(setter);
          // Issues=currentStatus.charAt(0).toLowerCase() + currentStatus.slice(1);
          // Issues+="Issues";
          // console.log(Issues);
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
          // setter+=currentStatus;
          // setter+="Issues";

          // console.log(setter);
          // Issues=currentStatus.charAt(0).toLowerCase() + currentStatus.slice(1);
          // Issues+="Issues";
          // console.log(Issues);
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
          // setter+=currentStatus;
          // setter+="Issues";

          // console.log(setter);
          // Issues=currentStatus.charAt(0).toLowerCase() + currentStatus.slice(1);
          // Issues+="Issues";
          // console.log(Issues);
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
          // setter+=currentStatus;
          // setter+="Issues";

          // console.log(setter);
          // Issues=currentStatus.charAt(0).toLowerCase() + currentStatus.slice(1);
          // Issues+="Issues";
          // console.log(Issues);
          // console.log(Issues);
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
        <div className="flex flex-row gap-0 w-screen">
          <div className="w-[320px]">
            <IssuePanel
              statusName="Backlog"
              issues={backlogIssues}
              onMoveIssue={moveIssue}
              icon={<BsFill0CircleFill/>}
            />
          </div>
          <div className="w-[320px]">
            <IssuePanel
              statusName="To Do"
              issues={toDoIssues}
              onMoveIssue={moveIssue}
              icon={<BsFill1CircleFill/>}
            />
          </div>
          <div className="w-[320px]">
            <IssuePanel
              statusName="In Progress"
              issues={inProgressIssues}
              onMoveIssue={moveIssue}
              icon={<BsFill2CircleFill/>}
            />
          </div>
          <div className="w-[320px]">
            <IssuePanel
              statusName="Done"
              issues={doneIssues}
              onMoveIssue={moveIssue}
              icon={<BsFill3CircleFill/>}
            />
          </div>
          <div className="w-[320px]">
            <IssuePanel
              statusName="Cancelled"
              issues={cancelledIssues}
              onMoveIssue={moveIssue}
              icon={<BsFill4CircleFill/>}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default WorkspaceIssues;
