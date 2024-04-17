import { useEffect, useState } from "react";
import IssuesList from "./components/issuesList";
import IssuePanel from "./components/issuePanel";
import { LuCircleDashed } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa6";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { FaRegTimesCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import CreateNewProject from "../CreateNewProject/CreateNewProject";
import FilterSidebar from "./components/FilterSidebar";

import { useSelector,useDispatch } from "react-redux";

// import { Axios } from "axios";
import axios from "axios";


const WorkspaceIssues = (props) => {
  const [toDoIssues, setToDoIssues] = useState([]);
  const [inProgressIssues, setInProgressIssues] = useState([]);
  const [backlogIssues, setBacklogIssues] = useState([]);
  const [doneIssues, setDoneIssues] = useState([]);
  const [cancelledIssues, setCancelledIssues] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isopen,setIsOpen]=useState(false);
  const workspaceId=useSelector((state)=>state.workspaceNameId.value.id);
  console.log(workspaceId);


  
  const [filteredList,setFilteredList]=useState(IssuesList);

  const handleFilterAssignee=(name)=>{
     setFilteredList(IssuesList.filter((member,idx)=>{
                  return member.assignee.toLowerCase()===name.toLowerCase();
                })
     );
    //  console.log(IssuesList);
    //  console.log(filteredList);
    // console.log(name);
  }

  const handleFilterPriority=(priority)=>{
    // console.log(IssuesList[0].priority);
    setFilteredList(IssuesList.filter((member,idx)=>{
      return member?.priority?.toLowerCase()===priority?.toLowerCase();
    }))
  }

  const handleFilterProject=(projectid)=>{
    // console.log(IssuesList[0].priority);
    setFilteredList(IssuesList.filter((member,idx)=>{
      return member?.projectid===projectid;
    }))
  }



  const handleClear=()=>{
    setFilteredList(IssuesList);
  }

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
        console.error("Error fetching Issues:", error);
        // Handle errors as needed
      }
    };
  
    fetchIssues();
  }, []);


  const moveIssue = (issueId, currentstage, newstage) => {
    console.log("Function moveIssue Called with stage", { newstage });
  };

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
             {/* <button className="text-white" onClick={()=>handleFilterAssignee("Priyanshu Kumar")}>Hello Click Me</button> */}
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
          {props.showFilterSidebar && <div className="overflow-y-scroll">
         <div className=" fixed right-0 h-full overflow-y-scroll">
        
             <FilterSidebar handleFilterAssignee={handleFilterAssignee} handleClear={handleClear} handleFilterPriority={handleFilterPriority} handleFilterProject={handleFilterProject}/>
             {/* <FilterSidebar /> */}
         
         </div>
        
       </div>}

        </div>
         
        
      )}
      
      </div>

       
   
  );
};
export default WorkspaceIssues;
