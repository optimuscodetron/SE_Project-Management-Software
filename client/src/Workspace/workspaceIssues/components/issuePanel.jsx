import IssueCard from "./issueCard";
import { BsPlusCircle } from "react-icons/bs";
import CreateNewIssue from "../../CreateNewIssue/CreateNewIssue";

const IssuePanel = (props) => {
  const [createIssue, setCreateIssue] = useState(false);

  const openCreateIssue = () => {
    setCreateIssue(true);
  };

  const closeCreateIssue = () => {
    setCreateIssue(false);
  };

  const BsPlusCircleComponent = ({ onClick }) => {
    return (
      <BsPlusCircle
        onClick={onClick} // Trigger the onClick function when clicked
        style={{ cursor: "pointer" }} // Add pointer cursor to indicate clickable element
      />
    );
  };

  return (
    <div className="">
      <div className="text-white font-normal tracking-wider py-2 px-1 text-start font-sans justify-between ">
        <div className="flex flex-row">
          <div
            className={`align-self-center mr-2 ${
              props.iconColor ? props.iconColor : ""
            }`}
          >
            {props.icon}
          </div>
          <div className="text-lg align-self-center mr-2">
            {props.statusName}
          </div>
          <div className="text-sm text-[#acacac] align-self-center mr-2">
            {props.issues.length}
          </div>
        </div>
      </div>
      <div
        className="flex flex-col overflow-y-auto panel-height shadow-2xl rounded-lg text-white p-1"
        style={{
          overflowY: "auto",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(0,0,0,0) rgba(0,0,0,0)",
        }}
      >
        {props.issues.length === 0
          ? "No Item Is Present Here"
          : props.issues.map((issue) => (
              <IssueCard
                key={issue.id}
                issue={issue}
                onMoveIssue={props.onMoveIssue}
              />
            ))}
        <div className="shadow-md p-2 w-full rounded-lg bg-[#273341] hover:bg-[#36414d] ">
          <div className="ml-[45%]">
            <BsPlusCircleComponent onClick={openCreateIssue} />
          </div>
        </div>
      </div>
      {createIssue && (
        <CreateNewIssue
          onCloseCreateIssue={closeCreateIssue}
          isWorkspaceContext={true}
        />
      )}
    </div>
  );
};

export default IssuePanel;
