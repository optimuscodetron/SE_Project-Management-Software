import React, { useEffect, useState } from 'react'
import { AiFillSetting } from "react-icons/ai"
import { TbUrgent } from "react-icons/tb";
import { PiCellSignalHighBold } from "react-icons/pi";
import { PiCellSignalMedium } from "react-icons/pi";
import { GrProjects } from "react-icons/gr";
import { PiCellSignalHighThin } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";


const FilterSidebar = (props) => {

  const [num,setnum]=useState(1);

  const [button,setButton]=useState(-1);
  const [button2,setButton2]=useState(-1);
 

  const handleButton=(num)=>{
      setnum(num);
  }

  const members = useSelector((state) => state.activeProjectAllMember.value);


  


  const [projects,setProjects]=useState([
    {name:"Project1",id:1,issues:6}, {name:"Project2",id:2,issues:7}, {name:"Project3",id:3,issues:6},
  ])

  const [priority,setPriority]=useState([
    6,6,7,4     //issues for urgent,high,medium
  ])

  const handleFilterSidebar=(name,num)=>{
    props.handleFilterAssignee(name);
    setButton(num);
  }

  const handleFilterSidebarPriority=(e,priority,num)=>{
    e.stopPropagation();
    props.handleFilterPriority(priority);
    setButton2(num);
   
  }

  

  const handleClearFilters=(e)=>{
    e.stopPropagation();
    setButton(-1);
    setButton2(-1);
    props.handleClear();
  }


  return (
    <div className='bg-[#171e28] sm:w-[30vw] md:w-[25vw] w-[65vw] h-[80vh] overflow-y-scroll  text-white  z-10  right-0'>

       <div className='p-4'>
          <span className='bg-gray-700 p-1 text-sm'>Active Issues</span> 

          <div className='flex items-center mt-4  '>
              <GrProjects/>
              <p className='ml-3'>Project name</p>
          </div>
        </div>

       <div className='mt-[10px] md:mt-[17px] border-t-[1px] border-gray-500 md:p-3 p-2 '>

          <div className='flex justify-evenly border-[1px] border-gray-500 p-1 text-[15px] md:text-[16px]'>
          <button className={`${num==1?"bg-gray-700":""} rounded-sm px-2 pt-[2px]`} onClick={()=>handleButton(1)}>Assignees</button>
          <button className={`${num==2?"bg-gray-700":""} rounded-sm px-2 pt-[2px]`} onClick={()=>handleButton(2)}>Priority</button>
          </div>

         {num==1? <div className='mt-[1.5rem] overflow-y-scroll text-sm md:text-[16px]'>
            {members.map((member,idx)=>{
              return (
                <button className=' w-full text-left p-2 group  hover:bg-gray-700 flex justify-between' onClick={()=>handleFilterSidebar(member.name,idx)}>
                  <div className='flex justify-start  items-center w-[65%]'>
                  <p className='rounded-full bg-purple-600 h-6 text-center text-[11px] w-6 p-1 mr-2'>{member.name.split(" ")[0][0]}</p>
                  <p className='text-md'>{member.name}</p>
                  </div>
                  <div className='text-gray-400 group flex w-[35%] justify-between'>{button==idx ? <button className='text-white bg-gray-800 text-sm p-1' onClick={(e)=>handleClearFilters(e)}>Clear filters</button>:<p className='opacity-10 group-hover:opacity-100 mr-2 '>See issues</p>}<p>{member.issues}</p> </div>
                </button>
              )
            })}
          </div>:null}

          {
            num==2?<div className='mt-[1.5rem] text-sm md:text-[16px] '>
              
                <button className=' w-full group text-left p-2 hover:bg-gray-700 flex justify-between' onClick={(e)=>handleFilterSidebarPriority(e,"urgent",1)} >
                  <div className='flex items-center'><TbUrgent/><p className='ml-2'>Urgent</p></div>
                  <div className='text-gray-400 group flex w-[34%] justify-between'>{button2==1? <button className='text-white bg-gray-800 text-sm p-1' onClick={(e)=>handleClearFilters(e)}>Clear filters</button>:<p className='opacity-10 group-hover:opacity-100 mr-2 '>See issues</p>} <p>{priority[0]}</p> </div>
                 </button>

                <button className=' w-full group text-left p-2 hover:bg-gray-700 flex justify-between' onClick={(e)=>handleFilterSidebarPriority(e,"high",2)}>
                <div className='flex items-center'><PiCellSignalHighBold /><p className='ml-2'>High</p></div>
                <div className='text-gray-400 group flex w-[34%] justify-between'>{button2==2? <button className='text-white bg-gray-800 text-sm p-1' onClick={(e)=>handleClearFilters(e)}>Clear filters</button>:<p className='opacity-10 group-hover:opacity-100 mr-2 '>See issues</p>}<p>{priority[1]}</p> </div>
                </button>
               
                <button className=' w-full group text-left p-2 hover:bg-gray-700 flex justify-between' onClick={(e)=>handleFilterSidebarPriority(e,"medium",3)}>
                <div className='flex items-center'><PiCellSignalHighThin/><p className='ml-2'>Medium</p></div>
                <div className='text-gray-400 group flex w-[34%] justify-between'>{button2==3? <button className='text-white bg-gray-800 text-sm p-1' onClick={(e)=>handleClearFilters(e)}>Clear filters</button>:<p className='opacity-10 group-hover:opacity-100 mr-2 '>See issues</p>}<p>{priority[2]}</p> </div>
                  </button>

                <button className=' w-full group text-left p-2 hover:bg-gray-700 flex justify-between' onClick={(e)=>handleFilterSidebarPriority(e,"low",4)}>
                <div className='flex items-center'><PiCellSignalMedium/><p className='ml-2'>Low</p></div>
                <div className='text-gray-400 group flex w-[34%] justify-between'>{button2==4? <button className='text-white bg-gray-800 text-sm p-1' onClick={(e)=>handleClearFilters(e)}>Clear filters</button>:<p className='opacity-10 group-hover:opacity-100 mr-2 '>See issues</p>}<p>{priority[3]}</p> </div>
                </button>
              
            </div>:null
          }


         
        </div>

    </div>
  )
}

export default FilterSidebar