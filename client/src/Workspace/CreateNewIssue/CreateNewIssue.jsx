import React, { useEffect, useRef, useState } from "react";
import { GrProjects } from "react-icons/gr";
import DatePicker from "react-datepicker";
import { BsFillCalendarDateFill } from "react-icons/bs";
import "react-datepicker/dist/react-datepicker.css";
import { FaUsers } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { GrStatusDisabledSmall } from "react-icons/gr";
import { FiHexagon } from "react-icons/fi";
import Modal from "../../UI/Modal";

const CreateNewIssue = (props) => {
  const [isopen, setisopen] = useState(false);

  //send by backend
  const [Workspacename, Workspacesetname] = useState("Workspace");
  const [Projectname, Projectsetname] = useState("Project");

  const [sDate, setsDate] = useState(false);
  const [eDate, seteDate] = useState(false);

  const [isSelect, setIsSelect] = useState(false);
  const [projectStatus, setIssueStatus] = useState("Issue Type");

  const [isSelect2, setIsSelect2] = useState(false);
  const [Assignee, setAssignee] = useState("Assignee");

  const [isSelect3, setIsSelect3] = useState(false);
  const [Priority, setPriority] = useState("Priority");

  const [isSelect4, setIsSelect4] = useState(false);
  const [Cycle, setCycle] = useState("Cycle");

  const [isEmpty, setIsEmpty] = useState(false);

  const [iscancel, setIsCancel] = useState(false);

  const projectName = useRef();
  const description = useRef();
  // const projectStatus=useRef();
  // const Assignee=useRef(null);

  //use projectName.current.value , description.current.value ,

  const [startDate, setStartDate] = useState(null);
  const [targetDate, setTargetDate] = useState(null);
  // const startDate=useRef();
  // const endDate=useRef();

  const [members, setMembers] = useState([
    "Ayush Sahu",
    "Ayush Ji",
    "Ayush Ji Sahu",
    "Ji Ayush",
    "Ayush Sahu Ji",
  ]);

  const [tempMembers, setTempMembers] = useState(members.sort());
  const [filteredMembers, setFilteredMembers] = useState([]);

  const handlePopup = () => {
    setisopen(!isopen);
  };

  const handledate = (num) => {
    if (num == 1) setsDate(!sDate);
    if (num == 2) seteDate(!eDate);
  };

  const handleSelect = (num) => {
    if (num == 1) setIsSelect(!isSelect);
    if (num == 2) setIsSelect2(!isSelect2);
    if (num == 3) setIsSelect3(!isSelect3);
    if (num == 4) setIsSelect4(!isSelect4);
  };

  const handleMembers = (element, index) => {
    const updatedTempMembers = [...tempMembers];
    updatedTempMembers.splice(index, 1);
    updatedTempMembers.sort();
    setTempMembers(updatedTempMembers);
    const updatedFilteredMembers = [...filteredMembers];
    updatedFilteredMembers.push(element);
    updatedFilteredMembers.sort();
    setFilteredMembers(updatedFilteredMembers);
  };

  const handleMembers2 = (element, index) => {
    const updatedTempMembers = [...tempMembers];
    updatedTempMembers.push(element);
    setTempMembers(updatedTempMembers);
    const updatedFilteredMembers = [...filteredMembers];
    updatedFilteredMembers.splice(index, 1);
    setFilteredMembers(updatedFilteredMembers);
  };

  const handleCreateIssue = () => {
    if (!projectName.current.value) setIsEmpty(true);
    //create project
    else setisopen(false);
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

  const handleCycle = (e) => {
    setCycle(e?.target?.textContent);
  };
  return (
    // <div className='bg-gray-800 h-screen min-w-full text-white '>
    //     <button onClick={handlePopup}>Open Popup</button>

    <Modal onClose={props.onCloseCreateIssue}>
      <div>
        {iscancel && (
          <div className="bg-gray-900 text-white absolute ml-auto mr-auto md:mt-[40vh] mt-[50vh] md:w-[30%] w-[100%]  left-0 right-0 md:px-5 md:py-10 z-10 opacity-90 rounded-md ">
            <p className="text-gray-400 px-4">
              Are you sure u want to discard this project?
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
          <h1 className="">
            {" "}
            <span className="md:p-[4px] md:px-[6px] p-[1px] bg-gray-600 rounded-sm border-[1px] border-gray-400">
              {Workspacename}
            </span>{" "}
            &gt;{Projectname}
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
                  <p className="overflow-hidden ">{projectStatus}</p>
                </button>

                {isSelect && (
                  <div className="flex flex-col w-[25vw] md:w-auto z-1 items-start py-2 px-1 md:px-4 relative top-[2vh]  rounded-md bg-gray-900 border-[1px]  border-gray-400 ">
                    <button key={1} onClick={handleStatus}>
                      Bug
                    </button>
                    <button key={2} onClick={handleStatus}>
                      Improvement
                    </button>
                    <button key={3} onClick={handleStatus}>
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
                    <button onClick={() => setAssignee("unassigned")}>
                      unassigned
                    </button>
                    {members.map((element) => {
                      return (
                        <button onClick={() => setAssignee(element)}>
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
                  <GrStatusDisabledSmall />{" "}
                  <p className="overflow-hidden ">{Priority}</p>
                </button>

                {isSelect3 && (
                  <div className="flex flex-col w-[25vw] md:w-auto z-1 items-start py-2 px-1 md:px-4 relative top-[2vh]  rounded-md bg-gray-900 border-[1px]  border-gray-400 ">
                    <button key={1} onClick={handlePriority}>
                      Urgent
                    </button>
                    <button key={2} onClick={handlePriority}>
                      High
                    </button>
                    <button key={3} onClick={handlePriority}>
                      Medium
                    </button>
                    <button key={3} onClick={handlePriority}>
                      Low
                    </button>
                    <button key={3} onClick={handlePriority}>
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
                  <GrStatusDisabledSmall />{" "}
                  <p className="overflow-hidden ">{Cycle}</p>
                </button>

                {isSelect4 && (
                  <div className="flex flex-col w-[25vw] md:w-auto z-1 items-start py-2 px-1 md:px-4 relative top-[2vh]  rounded-md bg-gray-900 border-[1px]  border-gray-400 ">
                    <button key={1} onClick={handleCycle}>
                      No Cycle
                    </button>
                    <button key={2} onClick={handleCycle}>
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

              {/* {!eDate && <button className='bg-gray-700 p-1 md:w-[7vw] sm:w-1/3 h-[4vh] text-sm border-[1px] border-gray-400 flex justify-evenly items-center' onClick={(num)=>handledate(2)}><BsFillCalendarDateFill /> <p>Due Date</p></button>}
                  {eDate && <input type='date' ref={endDate} className='bg-gray-700 md:w-[7vw] sm:w-1/3 h-[4vh] text-sm p-1 border-[1px] border-gray-400' onMouseLeave={(e,num)=>{if(!e.target.value)handledate(2)}}></input>} */}
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
    // </div>
  );
};

export default CreateNewIssue;
