import { useEffect, useState } from "react";
import upcomingList from "./components/upcomingList";
import UpcomingPanel from "./components/upcomingPanel";
import { LuCircleDashed } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa6";
const UpcomingCycles = () => {
  const [toDoIssues, setToDoIssues] = useState([]);
  const [backlogIssues, setBacklogIssues] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    const todoDummy = [];
    const backlogDummy = [];
    upcomingList.forEach((issue) => {
      if (issue.status === "ToDo") {
        todoDummy.push(issue);
      } else if (issue.status === "Backlog") {
        backlogDummy.push(issue);
      }
    });
    setToDoIssues(todoDummy);
    setBacklogIssues(backlogDummy);
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
          addToStage(backlogIssues, setBacklogIssues);
          break;
        case "ToDo":
          if (currentStatus === "Backlog")
            removeFromStage(backlogIssues, setBacklogIssues);
          addToStage(toDoIssues, setToDoIssues);
          break;

        default:
          break;
      }
    }
  };

  return (
    <div className="bg-[#171e28] overflow-x-scroll px-3 ">
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
        </div>
      )}
    </div>
  );
};
export default UpcomingCycles;
