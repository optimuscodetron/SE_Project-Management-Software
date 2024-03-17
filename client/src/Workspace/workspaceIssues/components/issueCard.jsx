import React from "react";
// import { faCheck } from '@fortawesome/pro-solid-svg-icons';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IssueCard({ issue, onMoveIssue }) {
   
   const btnstyle="text-slate-300 hover:text-white border border-gray-800  rounded-lg text-xs px-1.5 py-1 text-center me-2 mb-2";
       
   

    return (

        <div className=" shadow-md p-2 mb-2 rounded-lg bg-[#273341]">
            <h3 className="text-lg mb-1 text-white">{issue.title}</h3>
            <p className="text-gray-500 mb-2 text-white">Assignee: {issue.assignee}</p>
            <div className="flex justify-between items-center">
                {issue.status !== "Backlog" && <button className={btnstyle}
                    onClick={() => onMoveIssue(issue.id, issue.status, 'Backlog')}>
                    Backlog
                </button>}
                {issue.status !== "ToDo" && <button className={btnstyle}
                    onClick={() => onMoveIssue(issue.id, issue.status, 'ToDo')}>
                    ToDo
                </button>}
                {issue.status !== "InProgress" && <button className={btnstyle}
                    onClick={() => onMoveIssue(issue.id, issue.status, 'InProgress')}>
                    InProgress
                </button>}
                {issue.status !== "Done" && <button className={btnstyle}
                    onClick={() => onMoveIssue(issue.id, issue.status, 'Done')}>
                    
                    Done
                </button>}
                {issue.status !== "Cancelled" && <button className={btnstyle}
                    onClick={() => onMoveIssue(issue.id, issue.status, 'Cancelled')}>
                    Cancelled
                </button>}
            </div>
        </div>

    );
};
