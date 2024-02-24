import React from "react";
import { useState } from "react";

import IssueStage from "./IssueStage";

export default function IssuesScreen() {
    const [backlogIssues, setBacklogIssues] = useState([
        { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'John Doe', status: 'backlog' },
        // ...
        { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'John Doe', status: 'backlog' },
        // ...
    ]);
    const [toDoIssues, setToDoIssues] = useState([
        { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'John Doe', status: 'backlog' },
        // ...
        { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'John Doe', status: 'backlog' },
        // ...
        { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'John Doe', status: 'backlog' },
        // ...
        { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'John Doe', status: 'backlog' },
        // ...
        { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'John Doe', status: 'backlog' },
        // ...
        { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'John Doe', status: 'backlog' },
        // ...
        { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'John Doe', status: 'backlog' },
        // ...
        { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'John Doe', status: 'backlog' },
        // ...
        { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'John Doe', status: 'backlog' },
        // ...
    ]);
    const [inProgressIssues, setInProgressIssues] = useState([
        { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'John Doe', status: 'backlog' },
        // ...
        { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'John Doe', status: 'backlog' },
        // ...
        { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'John Doe', status: 'backlog' },
        // ...
    ]);
    const [doneIssues, setDoneIssues] = useState([
        { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'John Doe', status: 'backlog' },
        // ...
        { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'John Doe', status: 'backlog' },
        // ...
    ]);
    const [cancelledIssues, setCancelledIssues] = useState([
        { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'John Doe', status: 'backlog' },
        // ...
        { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'John Doe', status: 'backlog' },
        // ...
        { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'John Doe', status: 'backlog' },
        // ...
    ]);

    const moveIssue = (issueId, newStatus) => {
        const issueToMove = backlogIssues.find((issue) => issue.id === issueId);
        if (issueToMove) {
            setBacklogIssues(backlogIssues.filter((issue) => issue.id !== issueId));
            switch (newStatus) {
                case 'to-do':
                    setToDoIssues([...toDoIssues, issueToMove]);
                    break;
                case 'in-progress':
                    setInProgressIssues([...inProgressIssues, issueToMove]);
                    break;
                case 'done':
                    setDoneIssues([...doneIssues, issueToMove]);
                    break;
                case 'cancelled':
                    setCancelledIssues([...cancelledIssues, issueToMove]);
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <div className="pt-4">
           
          
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-2">
                <IssueStage stageName="Backlog" issues={backlogIssues} onMoveIssue={moveIssue} />
                <IssueStage stageName="To Do" issues={toDoIssues} onMoveIssue={moveIssue} />
                <IssueStage stageName="In Progress" issues={inProgressIssues} onMoveIssue={moveIssue} />
                <IssueStage stageName="Done" issues={doneIssues} onMoveIssue={moveIssue} />
                <IssueStage stageName="Cancelled" issues={cancelledIssues} onMoveIssue={moveIssue} />
            </div>
       
        </div>
    );
}