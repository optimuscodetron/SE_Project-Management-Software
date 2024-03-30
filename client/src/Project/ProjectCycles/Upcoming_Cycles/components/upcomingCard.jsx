import React from "react";
function getInitials(name) {
  const words = name.split(" ");
  let initials = "";
  for (let i = 0; i < words.length && i < 2; i++) {
    initials += words[i].charAt(0).toUpperCase();
  }
  return initials;
}
export default function UpcomingCard({ issue, onMoveIssue }) {
  const btnstyle =
    "text-slate-300 hover:text-white border border-gray-800  rounded-lg text-xs px-1.5 py-1 text-center me-2 mb-2";
  const assigneeInitials = getInitials(issue.assignee);
  return (
    <div className=" shadow-md p-2 mb-2 rounded-lg bg-[#273341]">
      <div className="flex flex-row justify-between">
        <div className="text-xs text-[#acacac]">
          {issue.project ? issue.project : "P04"}-{issue.id}
        </div>
        <span className="bg-purple-600 rounded-full px-[4px] py-[3px] text-white text-[10px]  ">
          {assigneeInitials}
        </span>
      </div>
      <div className="mb-1 text-white">{issue.title}</div>
      <div className="flex justify-between items-center">
        {issue.status !== "Backlog" && (
          <button
            className={btnstyle}
            style={{ marginLeft: "8px" }}
            onClick={() => onMoveIssue(issue.id, issue.status, "Backlog")}
          >
            Backlog
          </button>
        )}
        {issue.status !== "ToDo" && (
          <button
            className={btnstyle}
            style={{ marginLeft: "8px" }}
            onClick={() => onMoveIssue(issue.id, issue.status, "ToDo")}
          >
            ToDo
          </button>
        )}
      </div>
    </div>
  );
}
