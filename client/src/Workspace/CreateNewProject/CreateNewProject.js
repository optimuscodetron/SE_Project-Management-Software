import React, { useEffect, useRef, useState } from 'react'
import { GrProjects } from "react-icons/gr";
import DatePicker from 'react-datepicker';
import { BsFillCalendarDateFill } from "react-icons/bs";
import 'react-datepicker/dist/react-datepicker.css';
import { FaUsers } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { GrStatusDisabledSmall } from "react-icons/gr";
import { FiHexagon } from "react-icons/fi";

const CreateNewProject = () => {
    const [isopen,setisopen]=useState(false);

    //send by backend
    const [Workspacename,Workspacesetname]=useState("Workspace");

    const [sDate,setsDate]=useState(false);
    const [eDate,seteDate]=useState(false);

    const [isSelect,setIsSelect]=useState(false);
    const [projectStatus,setProjectStatus]=useState("Project Status")

    const [isSelect2,setIsSelect2]=useState(false);
    const [lead,setLead]=useState("Lead")

    const [isSelect3,setIsSelect3]=useState(false);
    const [isSelect4,setIsSelect4]=useState(false);

    const [isEmpty,setIsEmpty]=useState(false);

    const [iscancel,setIsCancel]=useState(false);
   

    const projectName=useRef();
    const description=useRef();
    // const projectStatus=useRef();
    // const lead=useRef(null);

    //use projectName.current.value , description.current.value , 
     
    const [startDate, setStartDate] = useState(null);
    const [targetDate, setTargetDate] = useState(null);
    // const startDate=useRef();
    // const endDate=useRef();

   const [members,setMembers]=useState([
    "Ayush Sahu","Ayush Ji","Ayush Ji Sahu","Ji Ayush", "Ayush Sahu Ji"
   ]);

   const [tempMembers,setTempMembers]=useState(members.sort());
   const [filteredMembers,setFilteredMembers]=useState([]);

    const handlePopup=()=>{
        setisopen(!isopen);
    }

    const handledate=(num)=>{
      if(num==1)  setsDate(!sDate);
      if(num==2)  seteDate(!eDate);
    }

    const handleSelect=(num)=>{
     if(num==1) setIsSelect(!isSelect);
     if(num==2) setIsSelect2(!isSelect2);
     if(num==3) setIsSelect3(!isSelect3);
     if(num==4) setIsSelect4(!isSelect4);
    }

    const handleMembers=(element,index)=>{
      const updatedTempMembers = [...tempMembers];
      updatedTempMembers.splice(index, 1);
      updatedTempMembers.sort();
      setTempMembers(updatedTempMembers);
      const updatedFilteredMembers = [...filteredMembers];
      updatedFilteredMembers.push(element);
      updatedFilteredMembers.sort();
      setFilteredMembers(updatedFilteredMembers);
    }

    const handleMembers2=(element,index)=>{
      const updatedTempMembers = [...tempMembers];
      updatedTempMembers.push(element);
      setTempMembers(updatedTempMembers);
      const updatedFilteredMembers = [...filteredMembers];
      updatedFilteredMembers.splice(index,1);
      setFilteredMembers(updatedFilteredMembers);
    }

    const handleCreateProject=()=>{
      if(!projectName.current.value) setIsEmpty(true);
      //create project
      else setisopen(false);
     
    }

    const handleCancel=()=>{
      setIsCancel(!iscancel);
    }

    const handleName=()=>{
      if(projectName.current.value) setIsEmpty(false);
    }

    const handlediscard=()=>{
      setisopen(false);
      setIsCancel(false);
    }

    const handleStatus=(e)=>{
        setProjectStatus(e?.target?.textContent);
    }

    
  return (
    
    <div className='bg-gray-800 h-screen min-w-full text-white '>
        <button onClick={handlePopup}>Open Popup</button>

        {iscancel &&
          <div className='bg-gray-900 absolute ml-auto mr-auto md:mt-[40vh] mt-[50vh] md:w-[30%] w-[70%]  left-0 right-0 md:px-5 md:py-10 z-10 opacity-90 rounded-md'>
              <p className='text-gray-400 px-4'>Are you sure u want to discard this project?</p>
              <div className='flex justify-around justify-items-end mt-[4vh]'>
                <button className='px-2 py-1 bg-gray-600 rounded-sm' onClick={handleCancel}>Cancel</button>
                <button className='bg-purple-500 px-2 py-1 rounded-sm' onClick={handlediscard}>Discard</button>
              </div>
          </div>}

        {isopen && <div className={` ${iscancel ? 'bg-gray-900 pointer-events-none ' : ''}bg-gray-900 opacity-90 mx-auto my-[10vh]  w-[75%] md:w-[65%]  h-[45%]  text-white px-[1vw] py-[2vh] flex flex-col justify-between`}>
        <h1 className=''> <span className='md:p-[4px] md:px-[6px] p-[1px] bg-gray-600 rounded-sm border-[1px] border-gray-400'>{Workspacename}</span> &gt; New project</h1>
        <div className='flex flex-row'>
            <GrProjects className='items-center mt-3' />
            <div className='flex flex-col ml-[1vw] w-full'>
            <input type='text' placeholder='Project name ' ref={projectName} onChange={handleName} className='outline-none bg-transparent text-xl placeholder:text-lg p-1'></input>
            
            <textarea placeholder='Description (optional)' ref={description} className=' bg-transparent text-gray-400   p-1 resize-none ' style={{
                scrollbarWidth: "thin",
                scrollbarColor: "rgb(75,85,99) rgba(0,0,0,0)",
             }}></textarea>
            </div>
        
        </div>
          <div>
            <div className='flex justify-evenly md:justify-evenly gap-y-3 gap-x-1 flex-wrap  '>

            {/* {!isSelect && <button className='bg-gray-700 p-1 md:w-[8vw] h-[4vh] sm:w-1/3  text-sm border-[1px] border-gray-400 flex justify-evenly items-center' onClick={(num)=>handleSelect(1)}>< GrStatusDisabledSmall  /> <p >Project Status</p></button>} */}
              
               <div className='bg-white h-[4vh] w-1/3 md:w-[11vw] rounded-sm'>
                  <button className='flex justify-evenly h-[4vh] items-center w-full  md:w-[11vw] text-sm rounded-sm border-[1px] border-gray-400  bg-gray-700 ' onClick={(num)=>handleSelect(1)}>< GrStatusDisabledSmall  /> <p >{projectStatus}</p></button>
                 
                  {isSelect && <div   className='flex flex-col items-start py-2 px-4 relative top-[2vh] rounded-md bg-gray-900 border-[1px]  border-gray-400'>
                    <button key={1} onClick={handleStatus}>Backlog</button>
                    <button key={2} onClick={handleStatus}>Cancelled</button>
                    <button key={3} onClick={handleStatus}>Planned</button>
                    <button key={4} onClick={handleStatus}>In Progress</button>
                    <button key={5} onClick={handleStatus}>Completed</button>
                 </div>}
               </div>



                <div className=' h-[4vh] w-1/3 md:w-[8vw] rounded-sm'>
                  <button className='flex justify-evenly h-[4vh] w-full  items-center rounded-sm text-sm border-[1px] p-1 border-gray-400  bg-gray-700' onClick={(num)=>handleSelect(2)}>< FaUserTie  /> <p >{lead}</p></button>

                 {isSelect2 && <div   className=' p-2  w-[10vw] flex flex-col items-start relative rounded-md top-[2vh] bg-gray-900 border-[1px]  border-gray-400'>
                  <button onClick={()=>setLead("unassigned")}>unassigned</button>
                 {
                   members.map((element)=>{
                     return <button onClick={()=>setLead(element)}>{element}</button>
                    })
                  }
                 </div>
                 }
                 </div>
                  {/* { <select  ref={lead}  className='bg-gray-700 px-1 md:w-[9vw] h-[4vh] text-sm sm:w-1/3 border-[1px] border-gray-400 '>
                <option disabled selected className='bg-gray-800 mb-[1px] text-gray-200'>Lead</option>
                <option className='bg-gray-900 mb-[1px] text-gray-200'>unassigned</option>
                {
                  members.map((element)=>{
                  return <option className='bg-gray-900 text-gray-200 mb-[1px]'>{element}</option>
                  })
                }
              </select>} */}

              
            <button className='bg-gray-700 p-1 md:w-[9vw] w-[30%] rounded-sm h-[4vh] text-sm border-[1px] border-gray-400 flex justify-evenly items-center' onClick={(num)=>handleSelect(4)}>
            <FaUsers /> <p>Members</p></button>

            {isSelect4 && <div className='absolute overflow-auto  flex-col bg-gray-900 sm:left-[18vw] md:left-[45.5vw] sm:top-[45vh] md:top-[50vh] p-2 text-sm border-[1px] border-gray-400 rounded-md '>

              <div className='border-b-[1px] border-gray-400 pb-1 m-1'>
                <p className='text-gray-400'>Change project members</p>
              </div>
              
              {
                filteredMembers.map((element,index)=>{
                  return (<div className='p-[2px]'>
                      <span><input type='checkbox' checked={!tempMembers.includes(element)} onChange={()=>handleMembers2(element,index)}  className='mr-1' ></input>{element}</span>
                  </div>)
                })
              }

              {tempMembers.length===0 || filteredMembers.length===0 ?"":<div className='border-b-[1px] border-gray-400 m-1'></div>}
              
                  {tempMembers.map((element,index)=>{
                  return (<div className='p-[2px]'>
                        <span><input type='checkbox' checked={!tempMembers.includes(element)}  onChange={()=>handleMembers(element,index)} className='mr-1'></input>{element}</span>
                    </div>)
                  })}
              </div>
            }

            


              
                {/* {!sDate && <button className='bg-gray-700 p-1 md:w-[7vw] sm:w-1/3  h-[4vh] text-sm border-[1px] border-gray-400 flex justify-evenly items-center' onClick={(num)=>handledate(1)}><BsFillCalendarDateFill /> <p>Start date</p></button>}
                {sDate && <input type='date' ref={startDate} className='bg-gray-700  md:w-[7vw] sm:w-1/3   h-[4vh] text-sm p-1 border-[1px] border-gray-400' onMouseLeave={(e,num)=>{if(!e.target.value)handledate(1)}}></input>} */}
              <div className="bg-gray-700 rounded-sm p-1 md:w-[10vw] w-1/3 h-[4vh] text-sm border-[1px] border-gray-400 flex justify-evenly items-center">
              <BsFillCalendarDateFill />
              <div className='w-[70%]' >
                  <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    className='bg-transparent  placeholder:text-white outline-none '
                    placeholderText="Start Date"
                   />
                </div>
                </div>

              <div className="bg-gray-700 rounded-sm p-1 md:w-[10vw] w-1/3 h-[4vh] text-sm border-[1px]  border-gray-400 flex justify-evenly items-center">
              <BsFillCalendarDateFill />
              <div className='w-[70%]'>
                  <DatePicker
                    selected={targetDate}
                    onChange={date => setTargetDate(date)}
                    className='bg-transparent text-sm placeholder:text-white outline-none'
                    placeholderText="Target Date"
                   />
                </div>
                </div>

               
                  {/* {!eDate && <button className='bg-gray-700 p-1 md:w-[7vw] sm:w-1/3 h-[4vh] text-sm border-[1px] border-gray-400 flex justify-evenly items-center' onClick={(num)=>handledate(2)}><BsFillCalendarDateFill /> <p>Target date</p></button>}
                  {eDate && <input type='date' ref={endDate} className='bg-gray-700 md:w-[7vw] sm:w-1/3 h-[4vh] text-sm p-1 border-[1px] border-gray-400' onMouseLeave={(e,num)=>{if(!e.target.value)handledate(2)}}></input>} */}
              

              
          </div>
            
            <div className='border-t-[1px] mt-2 border-gray-500 '>
              <div className='flex justify-end mt-3 mb-2 text-sm  '>
            {isEmpty && <div className='text-red-500 font-bold mr-auto absolute md:static top-[55vh]'>Project name cannot be empty</div>}
                <button className='bg-gray-600 rounded-sm tracking-wide px-3 py-[3px] mx-3' onClick={handleCancel}>Cancel</button>
                <button className='bg-purple-500  rounded-sm tracking-wide px-2 py-[3px]' onClick={handleCreateProject}>Create Project</button>
              </div>
            </div>
          </div>

        

        </div>}
    </div>
  )
}

export default CreateNewProject