import React from "react";
import IssueCard from "./IssueCard";


const style = {
    "font-family": "Noto Sans Lepcha",
    // "font-weight":"500",
    "font-style": "normal"
}
export default function IssueStage({ stageName, issues, onMoveIssue }) {
    return (
        <div className="mb-8 h-full overflow-y-auto relative bg-[#283444] p-1 rounded-lg">
            <h2 className="text-2xl text-white font-semibold mb-4 bg-[#074c5b] tracking-wider sticky top-0 z-10 py-1 text-center font-sans rounded drop-shadow-md tracking-normal" style={style}>
                {stageName}
            </h2>
            <div className="flex flex-col pt-1 shadow-md rounded-lg" style={{ maxHeight: '510px',  overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0) rgba(0,0,0,0)' }}>
                {issues.map((issue) => (
                    <IssueCard key={issue.id} issue={issue} onMoveIssue={onMoveIssue} />
                ))}
            </div>
        </div>
    );
}