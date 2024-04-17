import { useEffect, useState } from "react";
import CurrentList from "../ProjectCycles/CurrentCycles/components/currentList";
import ActivePanel from "./components/ActivePanel";
import { LuCircleDashed } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa6";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { FaRegTimesCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";

const ActivePage = () => {
  const [toDoIssues, setToDoIssues] = useState([]);
  const [inProgressIssues, setInProgressIssues] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const todoDummy = [];
    const inProgressDummy = [];
    const doneDummy = [];
    CurrentList.forEach((issue) => {
      if (issue.status === "ToDo") {
        todoDummy.push(issue);
      } else if (issue.status === "InProgress") {
        inProgressDummy.push(issue);
      }
    });

    // setFirstTime(false);
    setToDoIssues(todoDummy);
    setInProgressIssues(inProgressDummy);
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
        case "ToDo":
          if (currentStatus === "InProgress")
            removeFromStage(inProgressIssues, setInProgressIssues);
          addToStage(toDoIssues, setToDoIssues);
          break;
        case "InProgress":
          if (currentStatus === "ToDo")
            removeFromStage(toDoIssues, setToDoIssues);
          addToStage(inProgressIssues, setInProgressIssues);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="bg-[#171e28] overflow-x-scroll h-screen pl-10">
      {" "}
      {/* Added pl-8 for left padding */}
      {dataLoaded && (
        <div className="flex flex-row w-screen">
          <div className="w-[320px]">
            <ActivePanel
              statusName="To Do"
              issues={toDoIssues}
              onMoveIssue={moveIssue}
              icon={<FaRegCircle />}
            />
          </div>
          <div className="w-[320px]">
            <ActivePanel
              statusName="In Progress"
              issues={inProgressIssues}
              onMoveIssue={moveIssue}
              icon={<FaCircleHalfStroke />}
              iconColor="text-yellow-400"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivePage;
