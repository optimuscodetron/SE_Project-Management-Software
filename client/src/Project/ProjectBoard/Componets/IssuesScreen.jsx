import React from "react";
import { useState } from "react";

import IssueStage from "./IssueStage";

export default function IssuesScreen() {
    const [backlogIssues, setBacklogIssues] = useState([
        { id: 1, title: 'Issue 1', description: 'Description 1', assignee: 'John Doe', status: 'Backlog' },
        // ...
        { id: 2, title: 'Issue 1', description: 'Description 1', assignee: 'John Doe', status: 'Backlog' },
        // ...
    ]);
    const [toDoIssues, setToDoIssues] = useState([
        { id: 3, title: 'Issue 3', description: 'Description 1', assignee: 'John Doe', status: 'ToDo' },
        // ...
        { id: 4, title: 'Issue 4', description: 'Description 1', assignee: 'John Doe', status: 'ToDo' },
        // ...
        { id: 5, title: 'Issue 5', description: 'Description 1', assignee: 'John Doe', status: 'ToDo' },
        // ...
        { id: 6, title: 'Issue 6', description: 'Description 1', assignee: 'John Doe', status: 'ToDo' },
        // ...
        { id: 7, title: 'Issue 7', description: 'Description 1', assignee: 'John Doe', status: 'ToDo' },
        // ...
        { id: 8, title: 'Issue 8', description: 'Description 1', assignee: 'John Doe', status: 'ToDo' },
        // ...
        { id: 9, title: 'Issue 9', description: 'Description 1', assignee: 'John Doe', status: 'ToDo' },
        // ...
        { id: 10, title: 'Issue 10', description: 'Description 1', assignee: 'John Doe', status: 'ToDo' },
        // ...
        { id: 11, title: 'Issue 11', description: 'Description 1', assignee: 'John Doe', status: 'ToDo' },
        // ...
    ]);
    const [inProgressIssues, setInProgressIssues] = useState([
        { id: 12, title: 'Issue 12', description: 'Description 1', assignee: 'John Doe', status: 'InProgress' },
        // ...
        { id: 13, title: 'Issue 13', description: 'Description 1', assignee: 'John Doe', status: 'InProgress' },
        // ...
        { id: 14, title: 'Issue 14', description: 'Description 1', assignee: 'John Doe', status: 'InProgress' },
        // ...
    ]);
    const [doneIssues, setDoneIssues] = useState([
        { id: 15, title: 'Issue 51', description: 'Description 1', assignee: 'John Doe', status: 'Done' },
        // ...
        { id: 16, title: 'Issue 16', description: 'Description 1', assignee: 'John Doe', status: 'Done' },
        // ...
    ]);
    const [cancelledIssues, setCancelledIssues] = useState([
        { id: 17, title: 'Issue 17', description: 'Description 1', assignee: 'John Doe', status: 'Cancelled' },
        // ...
        { id: 18, title: 'Issue 18', description: 'Description 1', assignee: 'John Doe', status: 'Cancelled' },
        // ...
        { id: 19, title: 'Issue 19', description: 'Description 1', assignee: 'John Doe', status: 'Cancelled' },
        // ...
    ]);

    const moveIssue = (issueId, currentStatus, newStatus) => {
        console.log("Function moveIssue Called with status", { newStatus });
        let currentIssue;
        if (currentStatus === newStatus) {
            console.log("Current Status and New Status are the same");
            return 0;
        }
        else {
            const removeFromStage = (issues, setter) => {
                currentIssue=issues.find(issue => issue.id === issueId);
                console.log(currentIssue);
                currentIssue.status=newStatus;
                const updatedIssues = issues.filter(issue => issue.id !== issueId);
                setter(updatedIssues);
            };

            // // Add the issue to the new stage
            const addToStage = (issues, setter) => {
                // const issueToMove = allIssues.find(issue => issue.id === issueId);
                // if (issueToMove) {
                //     setter([...issues, issueToMove]);
                // }
                setter([...issues, currentIssue]);
                console.log(backlogIssues);
            };
            switch (newStatus) {
                case 'Backlog':
                    // setter+=currentStatus;
                    // setter+="Issues";
                    // console.log(setter);
                    // Issues=currentStatus.charAt(0).toLowerCase() + currentStatus.slice(1);
                    // Issues+="Issues";
                    // console.log(Issues);
                    if(currentStatus==="ToDo")removeFromStage(toDoIssues, setToDoIssues);
                    else if(currentStatus==="InProgress")removeFromStage(inProgressIssues, setInProgressIssues);
                    else if(currentStatus==="Done")removeFromStage(doneIssues, setDoneIssues);
                    else if(currentStatus==="Cancelled")removeFromStage(cancelledIssues, setCancelledIssues);
                    // removeFromStage(Issues, setter);
                    addToStage(backlogIssues, setBacklogIssues);
                    break;
                case 'ToDo':
                    // setter+=currentStatus;
                    // setter+="Issues";

                    // console.log(setter);
                    // Issues=currentStatus.charAt(0).toLowerCase() + currentStatus.slice(1);
                    // Issues+="Issues";
                    // console.log(Issues);
                    if(currentStatus==="Backlog")removeFromStage(backlogIssues, setBacklogIssues);
                    else if(currentStatus==="InProgress")removeFromStage(inProgressIssues, setInProgressIssues);
                    else if(currentStatus==="Done")removeFromStage(doneIssues, setDoneIssues);
                    else if(currentStatus==="Cancelled")removeFromStage(cancelledIssues, setCancelledIssues);
                    addToStage(toDoIssues, setToDoIssues);
                    break;
                case 'InProgress':
                    // setter+=currentStatus;
                    // setter+="Issues";

                    // console.log(setter);
                    // Issues=currentStatus.charAt(0).toLowerCase() + currentStatus.slice(1);
                    // Issues+="Issues";
                    // console.log(Issues);
                     if(currentStatus==="Backlog")removeFromStage(backlogIssues, setBacklogIssues);
                    else if(currentStatus==="ToDo")removeFromStage(toDoIssues, setToDoIssues);
                    else if(currentStatus==="Done")removeFromStage(doneIssues, setDoneIssues);
                    else if(currentStatus==="Cancelled")removeFromStage(cancelledIssues, setCancelledIssues);
                    addToStage(inProgressIssues, setInProgressIssues);
                    break;
                case 'Done':
                    // setter+=currentStatus;
                    // setter+="Issues";

                    // console.log(setter);
                    // Issues=currentStatus.charAt(0).toLowerCase() + currentStatus.slice(1);
                    // Issues+="Issues";
                    // console.log(Issues);
                    if(currentStatus==="Backlog")removeFromStage(backlogIssues, setBacklogIssues);
                    else if(currentStatus==="ToDo")removeFromStage(toDoIssues, setToDoIssues);
                    else if(currentStatus==="InProgress")removeFromStage(inProgressIssues, setInProgressIssues);
                    else if(currentStatus==="Cancelled")removeFromStage(cancelledIssues, setCancelledIssues);
                    addToStage(doneIssues, setDoneIssues);
                    break;
                case 'Cancelled':
                    // setter+=currentStatus;
                    // setter+="Issues";

                    // console.log(setter);
                    // Issues=currentStatus.charAt(0).toLowerCase() + currentStatus.slice(1);
                    // Issues+="Issues";
                    // console.log(Issues);
                    // console.log(Issues);
                     if(currentStatus==="Backlog")removeFromStage(backlogIssues, setBacklogIssues);
                     else if(currentStatus==="ToDo")removeFromStage(toDoIssues, setToDoIssues);
                     else if(currentStatus==="InProgress")removeFromStage(inProgressIssues, setInProgressIssues);
                     else if(currentStatus==="Done")removeFromStage(doneIssues, setDoneIssues);
                        addToStage(cancelledIssues, setCancelledIssues);
                    break;
                default:
                    break;
            }
        }
    };


    return (
        // issues={backlogIssues} onMoveIssue={moveIssue}
        <div className="pt-4">
            <div className="mx-auto overflow-auto">
                <div className="flex flex-row gap-3 w-screen overflow-x-auto">
                    <div className="w-[320px]">
                        <IssueStage stageName="Backlog" issues={backlogIssues} onMoveIssue={moveIssue}/>
                    </div>
                    <div className=" w-[320px]">
                        <IssueStage stageName="To Do" issues={toDoIssues} onMoveIssue={moveIssue}/>
                    </div>
                    <div className=" w-[320px]">
                        <IssueStage stageName="In Progress" issues={inProgressIssues} onMoveIssue={moveIssue}/>
                    </div>
                    <div className=" w-[320px]">
                        <IssueStage stageName="Done" issues={doneIssues} onMoveIssue={moveIssue}/>
                    </div>
                    <div className=" w-[320px]">
                        <IssueStage stageName="Cancelled" issues={cancelledIssues} onMoveIssue={moveIssue}/>
                    </div>
                </div>
            </div>
        </div>
    );
}