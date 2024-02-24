import React from "react";

export default function IssueCard() {
    // const { id, title, description, assignee, status } = {};
    const id = '1';
    const title = "New Title";
    const description = "New discription";
    const assignee = "New assignee";
    const status = "Backlog";
    const onMoveIssue = (issueId, newStatus) => {
        // Implementation remains the same
    };

    return (

        <div className="bg-gray-100 shadow-md p-4 mb-4 rounded-lg">
        <h3 className="text-lg mb-1">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-gray-500 mb-2">Assignee: {assignee}</p>
        {/* <div className="flex justify-between items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => onMoveIssue(id, 'to-do')}>
                To Do
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => onMoveIssue(id, 'in-progress')}>
                In Progress
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => onMoveIssue(id, 'done')}>
                Done
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => onMoveIssue(id, 'cancelled')}>
                Cancelled
            </button>
        </div> */}
    </div>

    );
};
