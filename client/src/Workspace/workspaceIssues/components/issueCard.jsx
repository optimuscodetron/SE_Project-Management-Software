import { changeActiveIssue } from '../../../redux/issueId/activeIssueSlice'
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  TbAntennaBars2,
  TbAntennaBars3,
  TbAntennaBars4,
  TbAntennaBars5,
} from "react-icons/tb";

function getInitials(name) {
  const words = name.split(" ");
  let initials = "";
  for (let i = 0; i < words.length && i < 2; i++) {
    initials += words[i].charAt(0).toUpperCase();
  }
  return initials;
}
export default function IssueCard({ issue, onMoveIssue }) {
  const dispatch = useDispatch();
  const btnstyle =
    "text-slate-300 hover:text-white border border-gray-800 rounded-lg text-xs px-1 py-1 text-center me-1 mb-1";

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const priorities = {
    Low: <TbAntennaBars2 size={15} />,
    Medium: <TbAntennaBars3 size={15} />,
    High: <TbAntennaBars4 size={15} />,
    Urgent: <TbAntennaBars5 size={15} />,
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handlePrioritySelect = (priority) => {
    // Handle priority selection here
    setDropdownOpen(!dropdownOpen);
    console.log("Selected priority:", priority);
    // You can add logic here to handle the selected priority, like updating state or performing any other action
  };

  const assigneeInitials = getInitials(issue.assignee);

  const dropdownRef = useRef(null);

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);



  return (
    <div className=" shadow-md p-2 mb-2 rounded-lg bg-[#273341] hover:bg-[#36414d]">
      <div className="flex flex-row justify-between">
        <div className="text-xs text-[#acacac]">
          {issue.projectname ? issue.projectname : "P04"}-{issue.id}
        </div>
        <span className="bg-purple-600 rounded-full px-[4px] py-[3px] text-white text-[10px]  ">
          {assigneeInitials}
        </span>
      </div>
      <NavLink
        to="/workspace/project/board/issue"
        style={{ textDecoration: "none", cursor: "pointer" }}
      >
        <div
          className="mb-1 text-white"
          onClick={() => dispatch(changeActiveIssue(issue))}
        >
          {issue.title}
        </div>
      </NavLink>
      <div className="flex items-center">
        {issue.stage !== "Backlog" && (
          <button
            className={btnstyle}
            onClick={() => onMoveIssue(issue._id, issue.stage, "Backlog")}
          >
            Backlog
          </button>
        )}
        {issue.stage !== "ToDo" && (
          <button
            className={btnstyle}
            onClick={() => onMoveIssue(issue._id, issue.stage, "ToDo")}
          >
            Todo
          </button>
        )}
        {issue.stage !== "InProgress" && (
          <button
            className={btnstyle}
            onClick={() => onMoveIssue(issue._id, issue.stage, "InProgress")}
          >
            InProgress
          </button>
        )}
        {issue.stage !== "Done" && (
          <button
            className={btnstyle}
            onClick={() => onMoveIssue(issue._id, issue.stage, "Done")}
          >
            Done
          </button>
        )}
        {issue.stage !== "Cancelled" && (
          <button
            className={btnstyle}
            onClick={() => onMoveIssue(issue._id, issue.stage, "Cancelled")}
          >
            Cancelled
          </button>
        )}
        <div className="relative" ref={dropdownRef}>
          {issue.priority && (
            <button onClick={toggleDropdown} className={btnstyle}>
              {priorities[issue.priority]}
            </button>
          )}
          {dropdownOpen && (
            <div className=" right-0 z-10 absolute w-20 rounded-md shadow-lg bg-[rgb(21,26,35)] text-white">
              <div className="py-1" role="none">
                {Object.keys(priorities).map((priority) => (
                  <button
                    key={priority}
                    className="flex justify-start items-center w-full px-2 text-sm  hover:bg-gray-700 hover:text-gray-200"
                    onClick={() => handlePrioritySelect(priority)}
                  >
                    {priorities[priority]}
                    {priority}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
