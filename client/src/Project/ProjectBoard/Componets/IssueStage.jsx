import React from "react";
import IssueCard from "./IssueCard";


const style = {
    "font-family": "Noto Sans Lepcha",
    // "font-weight":"500",
    "font-style": "normal"
}
export default function IssueStage({ stageName, issues, onMoveIssue }) {
    return (
        <div className="mb-8 h-full overflow-y-auto relative  p-1 rounded-lg">
            <h2 className="text-2xl text-white font-normal mb-4 bg-[#074c5b] tracking-wider sticky top-0 z-10 py-1 text-center font-sans rounded drop-shadow-md tracking-normal" style={style}>
                {stageName}
            </h2>
            <div className="flex flex-col pt-1 shadow-md rounded-lg h-[650px] lg:h-[500px] sm:h-[480px] xl:h-[700px] md:h-[600px] 2xl:h-[1000px] " style={{   overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0) rgba(0,0,0,0)' }}>
                {issues.map((issue) => (
                    <IssueCard key={issue.id} issue={issue} onMoveIssue={onMoveIssue} />
                ))}
            </div>
        </div>
    );
}