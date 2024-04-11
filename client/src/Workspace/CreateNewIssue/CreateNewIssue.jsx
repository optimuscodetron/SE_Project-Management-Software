import React, { useEffect, useRef, useState } from "react";
import { useSelector } from 'react-redux';
import { userIdSlice } from './../../redux/userId/userIdSlice'; // import the slice
import { activeProjectSlice } from "../../redux/ProjectData/activeProjectSlice";
import {
  FaArrowRight,
  FaExclamationCircle,
  FaSyncAlt,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";
import { GrProjects, GrStatusDisabledSmall } from "react-icons/gr";
import { BsFillCalendarDateFill } from "react-icons/bs";
import DatePicker from "react-datepicker";
import Modal from "../../UI/Modal";
import Axios from 'axios';

const CreateNewIssue = (props) => {
  const [isopen, setisopen] = useState(false);
  const [Workspacename] = useState("Workspace");
  const [sDate, setsDate] = useState(false);
  const [eDate, seteDate] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const [IssueStatus, setIssueStatus] = useState("Issue Type");
  const [isSelect2, setIsSelect2] = useState(false);
  const [Assignee, setAssignee] = useState(""); // Change to empty string
  const [isSelect3, setIsSelect3] = useState(false);
  const [Priority, setPriority] = useState("Priority");
  const [isSelect4, setIsSelect4] = useState(false);
  const [Cycle, setCycle] = useState("Cycle");
  const [isSelect5, setIsSelect5] = useState(false);
  const [Priorit, setPriorit] = useState("Select Project");
  const [isEmpty, setIsEmpty] = useState(false);
  const [iscancel, setIsCancel] = useState(false);
  const projectName = useRef();
  const description = useRef();
  const [startDate, setStartDate] = useState(null);
  const [targetDate, setTargetDate] = useState(null);
  const [members, setMembers] = useState([]); // Empty array initially
  const [filteredMembers, setFilteredMembers] = useState([]);


  const userId = useSelector((state) => state.userId.value);
  const activeProject = useSelector((state) => state.activeProject.value);
  let creatorid = userId; // Get the user ID from the session
  console.log("sfjbhdsbxhjb", creatorid);
  let projectId=activeProject.id;


  useEffect(() => {
    fetchMembers(); // Fetch members when component mounts
  }, []);

  const fetchMembers = async () => {
    try {
      const data={

        projectid:activeProject.id,

      }
       Axios.post("http://localhost:8000/api/users/workspace/project/members", data,{
        withCredentials:true// Replace with actual project ID
      })
      .then((res) => {
        setMembers(res.data.members);
        console.log(res.data.id);
        // creatorid=res.data.id;
        // window.location.reload();
      })

   
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };

  const handlePopup = () => {
    setisopen(!isopen);
  };

  const handledate = (num) => {
    if (num === 1) setsDate(!sDate);
    if (num === 2) seteDate(!eDate);
  };

  const handleSelect = (num) => {
    if (num === 1) setIsSelect(!isSelect);
    if (num === 2) setIsSelect2(!isSelect2);
    if (num === 3) setIsSelect3(!isSelect3);
    if (num === 4) setIsSelect4(!isSelect4);
    if (num === 5) setIsSelect5(!isSelect5);
  };

  const handleAssigneeSelect = (username) => {
    setAssignee(username);
    setIsSelect2(false); // Close member selection dropdown
  };

  const handleCreateIssue = async () => {
 
      
      const newIssue = {
        projectName: projectName.current.value,
        description: description.current.value,
        startDate: startDate,
        targetDate: targetDate,
        assignee: Assignee,
        creator:creatorid,
        priority:Priority,
        cycle:Cycle ,
        projectId:projectId,
        stage:IssueStatus,// Here, Assignee should be set based on user selection from the project members list
        // Include other properties like priority, issue type, cycle, etc.
      };

      // Send the new issue data to the backend API
      try {
        const response = await Axios.post("http://localhost:8000/api/users/workspace/project/issue", newIssue, {
          withCredentials: true
        });
        console.log('New issue added successfully:', response.data);
      } catch (error) {
        console.error('Error adding new issue:', error);
      }

  };

  const handleCancel = () => {
    setIsCancel(!iscancel);
  };

  const handleName = () => {
    if (projectName.current.value) setIsEmpty(false);
  };

  const handlediscard = () => {
    setIsCancel(false);
  };

  const handleStatus = (e) => {
    setIssueStatus(e?.target?.textContent);
  };

  const handlePriority = (e) => {
    setPriority(e?.target?.textContent);
  };

  const handlePriorit = (e) => {
    setPriorit(e?.target?.textContent);
  };

  const handleCycle = (e) => {
    setCycle(e?.target?.textContent);
  };



  return (
    <Modal onClose={props.onCloseCreateIssue}>
      <div>
        {iscancel && (
          <div className="bg-gray-900 text-white absolute ml-auto mr-auto md:mt-[40vh] mt-[50vh] md:w-[30%] w-[100%]  left-0 right-0 md:px-5 md:py-10 z-10 opacity-90 rounded-md ">
            <p className="text-gray-400 px-4">
              Are you sure u want to discard this Issue?
            </p>
            <div className="flex justify-around justify-items-end mt-[4vh]">
              <button
                className="px-2 py-1 bg-gray-600 rounded-sm"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="bg-purple-500 px-2 py-1 rounded-sm"
                onClick={props.onCloseCreateIssue}
              >
                Discard
              </button>
            </div>
          </div>
        )}
  
        <div
          className={` ${
            iscancel ? " pointer-events-none " : ""
          }bg-gray-900 opacity-100 absolute text-[13px] md:text-[17px] w-[100%] md:w-[100%]  h-full  text-white px-[1vw] py-[2vh] flex flex-col justify-between`}
        >
          <h1 className="flex items-center">
            <span className="md:p-[4px] md:px-[6px] p-[1px] bg-gray-600 rounded-sm border-[1px] border-gray-400">
              {Workspacename}
            </span>
            <FaArrowRight className="ml-2" />
            <div className="ml-2 relative">
              <button
                className="flex justify-evenly h-[4vh] items-center w-full   md:w-[9vw] md:text-sm rounded-sm border-[1px] border-gray-400  bg-gray-700 "
                onClick={(num) => handleSelect(5)}
              >
                <p className="overflow-hidden ">
                  {props.isWorkspaceContext ? Priorit : "Project 1"}
                </p>
              </button>
  
              {props.isWorkspaceContext && isSelect5 && (
                <div className="absolute z-10 mt-2 w-[9vw] bg-gray-900 shadow-lg border border-gray-200 rounded-sm">
                  <ul>
                    <li>
                      <button
                        onClick={handlePriorit}
                        className="block w-full text-left py-1 px-3 hover:bg-gray-600"
                      >
                        Project 1
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handlePriorit}
                        className="block w-full text-left py-1 px-3 hover:bg-gray-600"
                      >
                        Project 2
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handlePriorit}
                        className="block w-full text-left py-1 px-3 hover:bg-gray-600"
                      >
                        Project 3
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </h1>
  
          <div className="flex flex-row">
            <GrProjects className="items-center mt-3" />
            <div className="flex flex-col ml-[1vw] w-full">
              <input
                type="text"
                placeholder="Issue name "
                ref={projectName}
                onChange={handleName}
                className="outline-none bg-transparent md:text-xl text-sm placeholder:md:text-lg placeholder:text:sm p-1"
              ></input>
  
              <textarea
                placeholder="Description"
                ref={description}
                className=" bg-transparent text-gray-400  placeholder:md:text-sm placeholder:text-[10px] p-1 resize-none "
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgb(75,85,99) rgba(0,0,0,0)",
                }}
              ></textarea>
            </div>
          </div>
  
          <div>
            <div className="flex justify-evenly md:justify-evenly gap-y-3 gap-x-2 flex-wrap  ">
              <div className="bg-white overflow-visible h-[4vh] w-1/3 md:w-[9vw] rounded-sm md:text-sm text-[10px]">
                <button
                  className="flex justify-evenly h-[4vh] items-center w-full   md:w-[9vw] md:text-sm rounded-sm border-[1px] border-gray-400  bg-gray-700 "
                  onClick={(num) => handleSelect(1)}
                >
                  <GrStatusDisabledSmall />{" "}
                  <p className="overflow-hidden ">{IssueStatus}</p>
                </button>
  
                {isSelect && (
                  <div className="flex flex-col w-[25vw] md:w-auto z-1 items-start py-2 px-1 md:px-4 relative top-[2vh]  rounded-md bg-gray-900 border-[1px]  border-gray-400 ">
                    <button
                      key={1}
                      onClick={handleStatus}
                      className="block w-full hover:bg-gray-600"
                    >
                      Bug
                    </button>
                    <button
                      key={2}
                      onClick={handleStatus}
                      className="block w-full hover:bg-gray-600"
                    >
                      Improvement
                    </button>
                    <button
                      key={3}
                      onClick={handleStatus}
                      className="block w-full hover:bg-gray-600"
                    >
                      Feature
                    </button>
                  </div>
                )}
              </div>
  
              <div className=" h-[4vh] w-1/3 md:w-[8vw] rounded-sm overflow-visible md:text-sm text-[10px]">
                <button
                  className="flex justify-evenly h-[4vh] w-full  items-center rounded-sm border-[1px] p-1 border-gray-400  bg-gray-700"
                  onClick={(num) => handleSelect(2)}
                >
                  <FaUserTie /> <p>{Assignee}</p>
                </button>
  
                {isSelect2 && (
                  <div className="overflow-x-hidden p-2 z-1 w-[25vw]  md:w-[8vw] flex flex-col items-start relative rounded-md top-[2vh] bg-gray-900 border-[1px]  border-gray-400">
                    <button
                      onClick={() => setAssignee("unassigned")}
                      className="block w-full hover:bg-gray-600"
                    >
                      unassigned
                    </button>
                    {members.map((element) => {
                      return (
                        <button
                          onClick={() => handleAssigneeSelect(element)}
                          className="block w-full hover:bg-gray-600"
                        >
                          {element}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
  
              <div className="bg-white overflow-visible h-[4vh] w-1/3 md:w-[9vw] rounded-sm md:text-sm text-[10px]">
                <button
                  className="flex justify-evenly h-[4vh] items-center w-full   md:w-[9vw] md:text-sm rounded-sm border-[1px] border-gray-400  bg-gray-700 "
                  onClick={(num) => handleSelect(3)}
                >
                  <FaExclamationCircle />{" "}
                  <p className="overflow-hidden ">{Priority}</p>
                </button>
  
                {isSelect3 && (
                  <div className="flex flex-col w-[25vw] md:w-auto z-1 items-start py-2 px-1 md:px-4 relative top-[2vh]  rounded-md bg-gray-900 border-[1px]  border-gray-400 ">
                    <button
                      key={1}
                      onClick={handlePriority}
                      className="block w-full hover:bg-gray-600"
                    >
                      Urgent
                    </button>
                    <button
                      key={2}
                      onClick={handlePriority}
                      className="block w-full hover:bg-gray-600"
                    >
                      High
                    </button>
                    <button
                      key={3}
                      onClick={handlePriority}
                      className="block w-full hover:bg-gray-600"
                    >
                      Medium
                    </button>
                    <button
                      key={3}
                      onClick={handlePriority}
                      className="block w-full hover:bg-gray-600"
                    >
                      Low
                    </button>
                    <button
                      key={3}
                      onClick={handlePriority}
                      className="block w-full hover:bg-gray-600"
                    >
                      No Priority
                    </button>
                  </div>
                )}
              </div>
  
              <div className="bg-white overflow-visible h-[4vh] w-1/3 md:w-[9vw] rounded-sm md:text-sm text-[10px]">
                <button
                  className="flex justify-evenly h-[4vh] items-center w-full   md:w-[9vw] md:text-sm rounded-sm border-[1px] border-gray-400  bg-gray-700 "
                  onClick={(num) => handleSelect(4)}
                >
                  <FaSyncAlt /> <p className="overflow-hidden ">{Cycle}</p>
                </button>
  
                {isSelect4 && (
                  <div className="flex flex-col w-[25vw] md:w-auto z-1 items-start py-2 px-1 md:px-4 relative top-[2vh]  rounded-md bg-gray-900 border-[1px]  border-gray-400 ">
                    <button
                      key={1}
                      onClick={handleCycle}
                      className="block w-full hover:bg-gray-600"
                    >
                      No Cycle
                    </button>
                    <button
                      key={2}
                      onClick={handleCycle}
                      className="block w-full hover:bg-gray-600"
                    >
                      Cycle 1
                    </button>
                  </div>
                )}
              </div>
  
              <div className="bg-gray-700 overflow-hidden rounded-sm md:p-1 md:w-[8vw] w-2/5 h-[4vh] md:text-sm text-[10px] border-[1px]  border-gray-400 flex justify-evenly items-center">
                <BsFillCalendarDateFill />
                <div className="w-[80%]">
                  <DatePicker
                    selected={targetDate}
                    onChange={(date) => setTargetDate(date)}
                    className="bg-transparent placeholder:text-white outline-none"
                    placeholderText=" Due Date"
                  />
                </div>
              </div>
            </div>
  
            <div className="border-t-[1px] mt-2 border-gray-500 ">
              <div className="flex justify-end mt-3 mb-2 md:text-sm text-[10px]  ">
                {isEmpty && (
                  <div className="text-red-500 font-bold mr-auto absolute md:static top-[42vh]">
                    Issue name cannot be empty
                  </div>
                )}
                <button
                  className="bg-gray-600 rounded-sm tracking-wide px-3 md:py-[3px] mx-3"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className="bg-purple-500  rounded-sm tracking-wide px-2 md:py-[3px]"
                  onClick={handleCreateIssue}
                >
                  Create Issue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
  
};

export default CreateNewIssue;
