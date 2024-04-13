import React from "react";
function getInitials(name) {
  const words = name.split(" ");
  let initials = "";
  for (let i = 0; i < words.length && i < 2; i++) {
    initials += words[i].charAt(0).toUpperCase();
  }
  return initials;
}
export default function IssueCard({ issue, onMoveIssue }) {
  const btnstyle =
    "text-slate-300 hover:text-white border border-gray-800  rounded-lg text-xs px-1.5 py-1 text-center me-2 mb-2";
  const assigneeInitials = getInitials(issue.assignee);
  return (
    <div className=" shadow-md p-2 mb-2 rounded-lg bg-[#273341] hover:bg-[#36414d]">
      <div className="flex flex-row justify-between">
        <div className="text-xs text-[#acacac]">
          {issue.project ? issue.project : "P04"}-{issue.id}
        </div>
        <span className="bg-purple-600 rounded-full px-[4px] py-[3px] text-white text-[10px]  ">
          {assigneeInitials}
        </span>
      </div>
      <div className="mb-1 text-white">{issue.title}</div>
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
      </div>
    </div>
  );
}
