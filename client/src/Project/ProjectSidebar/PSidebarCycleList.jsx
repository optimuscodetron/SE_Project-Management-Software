import { useState } from "react";
import { FaRecycle } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeActiveSprint } from "../../redux/ProjectData/activeSprint";
const PSidebarCycleList = (props) => {
  const [showCyclesList, setShowCyclesList] = useState(false);
  const showCyclesListHandler = () => {
    setShowCyclesList((prevState) => !prevState);
  };
  
  const sprintList = useSelector(
    (state) => state.activeProjectSprintList.value
  );
 

  // console.log(sprintList);
    const dispatch = useDispatch();

    const handleSprint=(_id)=>{
      dispatch(changeActiveSprint({_id:_id}));
      props.handleProjectIssuesFalse();
    }

  return (
    <div>
      <div
        className="flex items-center p-2 text-white text-decoration-none  rounded-lg hover:bg-gray-950 group justify-between cursor-pointer"
        onClick={showCyclesListHandler}
      >
        <div className="flex">
          <FaRecycle />
          <span className="text-sm ms-3">Sprint</span>
        </div>
        {showCyclesList ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {showCyclesList && (

        <ul className={"flex row ml-8"}>
          {
            sprintList.map((item)=>{
             return  (<li onClick={()=>handleSprint(item._id)}>
              <div className="p-2 text-sm text-white text-decoration-none  rounded-lg hover:bg-gray-950 group ">
                {item.name}
              </div>
            </li>)
            })
          }
          
        </ul>
      )}
    </div>
  );
};
export default PSidebarCycleList;
