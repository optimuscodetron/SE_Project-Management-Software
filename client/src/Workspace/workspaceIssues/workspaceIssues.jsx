import { useEffect, useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
// import IssuesList from "./components/issuesList";
import IssuePanel from "./components/issuePanel";
import { LuCircleDashed } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa6";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { FaRegTimesCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import CreateNewProject from "../CreateNewProject/CreateNewProject";
import FilterSidebar from "./components/FilterSidebar";


import { useSelector, useDispatch } from "react-redux";
// import { Axios } from "axios";
import axios from "axios";
import IssuesList from "./components/issuesList";

const WorkspaceIssues = (props) => {
  const navigate = useNavigate();
  const [toDoIssues, setToDoIssues] = useState([]);
  const [inProgressIssues, setInProgressIssues] = useState([]);
  const [backlogIssues, setBacklogIssues] = useState([]);
  const [doneIssues, setDoneIssues] = useState([]);
  const [cancelledIssues, setCancelledIssues] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isopen, setIsOpen] = useState(false);
  const workspaceId = useSelector((state) => state.workspaceNameId.value.id);
  const [IssuesList, setIssueList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [selectedAssignee, setSelectedAssignee] = useState(null);
  const [selectedPriority, setSelectedPriority] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // const [isopen, setIsOpen] = useState(false);
  // const workspaceId = useSelector((state) => state.workspaceNameId.value.id);
  console.log(workspaceId);

  const [name, setname] = useState("Ayush");
  

  const handleFilterAssignee = (name) => {
    setFilteredList(
      IssuesList.filter((member, idx) => {
        return member.assignee.toLowerCase() === name.toLowerCase();
      })
    );
    //  console.log(IssuesList);
    //  console.log(filteredList);
    // console.log(name);
  };

  const handleFilterPriority = (priority) => {
    // console.log(IssuesList[0].priority);
    setFilteredList(
      IssuesList.filter((member, idx) => {
        return member?.priority?.toLowerCase() === priority?.toLowerCase();
      })
    );
  };

  const handleFilterProject = (projectid) => {
    // console.log(IssuesList[0].priority);
    setFilteredList(
      IssuesList.filter((member, idx) => {
        return member?.projectid === projectid;
      })
    );
  };

  const handleClear = () => {
    setFilteredList(IssuesList);
  };

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/users/workspace/issues`,
          {
            params: {
              activeWorkspaceId: workspaceId,
            },
            withCredentials: true,
          }
        );
        const data = response.data;
        console.log(data);

        const todoDummy = [];
        const inProgressDummy = [];
        const backlogDummy = [];
        const doneDummy = [];
        const cancelledDummy = [];

        data.forEach((issue) => {
          console.log(issue);
          if (issue.stage === "ToDo") {
            todoDummy.push(issue);
          } else if (issue.stage === "InProgress") {
            inProgressDummy.push(issue);
          } else if (issue.stage === "Backlog") {
            backlogDummy.push(issue);
          } else if (issue.stage === "Cancelled") {
            cancelledDummy.push(issue);
          } else if (issue.stage === "Done") {
            doneDummy.push(issue);
          }
        });
        console.log(todoDummy);

        setToDoIssues(todoDummy);
        console.log(toDoIssues);
        setInProgressIssues(inProgressDummy);
        setBacklogIssues(backlogDummy);
        setCancelledIssues(cancelledDummy);
        setDoneIssues(doneDummy);
        setDataLoaded(true);
      } catch (error) {
        console.log("in");
   fetchDummyIssues();
        console.error("Error fetching Issues:", error);
        // Handle errors as needed
      }
    };

    fetchIssues();
  }, []);

  const moveIssue = (issueId, currentstage, newstage) => {
    console.log("Function moveIssue Called with stage", { newstage });
    let currentIssue;
    if (currentstage === newstage) {
      console.log("Current stage and New stage are the same");
      return 0;
    } else {
      const removeFromStage = (issues, setter) => {
        currentIssue = issues.find((issue) => issue.id === issueId);
        console.log(currentIssue);
        currentIssue.stage = newstage;
        const updatedIssues = issues.filter((issue) => issue.id !== issueId);
        setter(updatedIssues);
      };
      const addToStage = (issues, setter) => {
        setter([...issues, currentIssue]);
      };
      switch (newstage) {
        case "Backlog":
          if (currentstage === "ToDo")
            removeFromStage(toDoIssues, setToDoIssues);
          else if (currentstage === "InProgress")
            removeFromStage(inProgressIssues, setInProgressIssues);
          else if (currentstage === "Done")
            removeFromStage(doneIssues, setDoneIssues);
          else if (currentstage === "Cancelled")
            removeFromStage(cancelledIssues, setCancelledIssues);
          // removeFromStage(Issues, setter);
          addToStage(backlogIssues, setBacklogIssues);
          break;
        case "ToDo":
          if (currentstage === "Backlog")
            removeFromStage(backlogIssues, setBacklogIssues);
          else if (currentstage === "InProgress")
            removeFromStage(inProgressIssues, setInProgressIssues);
          else if (currentstage === "Done")
            removeFromStage(doneIssues, setDoneIssues);
          else if (currentstage === "Cancelled")
            removeFromStage(cancelledIssues, setCancelledIssues);
          addToStage(toDoIssues, setToDoIssues);
          break;
        case "InProgress":
          if (currentstage === "Backlog")
            removeFromStage(backlogIssues, setBacklogIssues);
          else if (currentstage === "ToDo")
            removeFromStage(toDoIssues, setToDoIssues);
          else if (currentstage === "Done")
            removeFromStage(doneIssues, setDoneIssues);
          else if (currentstage === "Cancelled")
            removeFromStage(cancelledIssues, setCancelledIssues);
          addToStage(inProgressIssues, setInProgressIssues);
          break;
        case "Done":
          if (currentstage === "Backlog")
            removeFromStage(backlogIssues, setBacklogIssues);
          else if (currentstage === "ToDo")
            removeFromStage(toDoIssues, setToDoIssues);
          else if (currentstage === "InProgress")
            removeFromStage(inProgressIssues, setInProgressIssues);
          else if (currentstage === "Cancelled")
            removeFromStage(cancelledIssues, setCancelledIssues);
          addToStage(doneIssues, setDoneIssues);
          break;
        case "Cancelled":
          if (currentstage === "Backlog")
            removeFromStage(backlogIssues, setBacklogIssues);
          else if (currentstage === "ToDo")
            removeFromStage(toDoIssues, setToDoIssues);
          else if (currentstage === "InProgress")
            removeFromStage(inProgressIssues, setInProgressIssues);
          else if (currentstage === "Done")
            removeFromStage(doneIssues, setDoneIssues);
          addToStage(cancelledIssues, setCancelledIssues);
          break;
        default:
          break;
      }
    }
  };
  const fn = ()=>{
    // navigate("/workspace/project/board/issue");
    console.log("naviagte");
  }

  return (
    
    <div className="bg-[#171e28] overflow-x-scroll px-2 pt-2">
      {dataLoaded && (
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
                onClick={fn}
              />
            </div>
           
            <div className="w-[320px] mx-1">
              <IssuePanel
                stageName="In Progress"
                issues={inProgressIssues}
                onMoveIssue={moveIssue}
                icon={<FaCircleHalfStroke />}
                iconColor="text-yellow-400"
                onClick={fn}
              />
            </div>
           
            <div className="w-[320px] mx-1">
              <IssuePanel
                stageName="Done"
                issues={doneIssues}
                onMoveIssue={moveIssue}
                icon={<FaRegCheckCircle />}
                iconColor="text-green-400"
              />
            </div>
          
            <NavLink to="/workspace/project/board/issue">
            <div className="w-[320px] mx-1">
              <IssuePanel
                stageName="Cancelled"
                issues={cancelledIssues}
                onMoveIssue={moveIssue}
                icon={<FaRegTimesCircle />}
                iconColor="text-red-400"
              />
            </div>
          </NavLink>
          {props.showFilterSidebar && (
            <div className="overflow-y-scroll">
              <div className=" fixed right-0 h-full overflow-y-scroll">
                <FilterSidebar
                  handleFilterAssignee={handleFilterAssignee}
                  handleClear={handleClear}
                  handleFilterPriority={handleFilterPriority}
                  handleFilterProject={handleFilterProject}
                />
                {/* <FilterSidebar /> */}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WorkspaceIssues;
