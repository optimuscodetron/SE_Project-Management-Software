import React from "react";

export default function IssueCard({issue,onMoveIssue}) {


    return (

        <div className="bg-gray-100 shadow-md p-4 mb-4 rounded-lg">
        <h3 className="text-lg mb-1">{issue.title}</h3>
        <p className="text-gray-600 mb-2">{issue.description}</p>
        <p className="text-gray-500 mb-2">Assignee: {issue.assignee}</p>
        <div className="flex justify-between items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => onMoveIssue(issue.id,issue.status, 'Backlog')}>
                Backlog
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => onMoveIssue(issue.id,issue.status, 'ToDo')}>
                To Do
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => onMoveIssue(issue.id,issue.status, 'Inprogress')}>
                In Progress
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => onMoveIssue(issue.id,issue.status, 'Done')}>
                Done
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => onMoveIssue(issue.id,issue.status, 'Cancelled')}>
                Cancelled
            </button>
        </div>
    </div>

    );
};
