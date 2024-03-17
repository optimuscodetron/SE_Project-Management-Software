import IssueCard from "./issueCard";
const style = {
  "font-family": "Noto Sans Lepcha",
  // "font-weight":"500",
  "font-style": "normal"
}
const IssuePanel=(props)=>{
    console.log(props.issues);
    return (
      <div className=" h-screen custom-sidebar-2 p-2  rounded-lg">
            <div className="text-xl flex flex-row text-white font-normal  tracking-wider py-3 px-1 text-start font-sans  " style={style}>
                {/* {props.icon} */}
                {props.statusName}
            </div>
            <div className="flex flex-col  overflow-y-auto panel-height shadow-xl rounded-lg " style={{   overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0) rgba(0,0,0,0)' }}>
                {props.issues.length===0?"No Item Here":props.issues.map((issue) => (
                    <IssueCard key={issue.id} issue={issue} onMoveIssue={props.onMoveIssue} />
                ))}
            </div>
        </div>
    );
}
export default IssuePanel;