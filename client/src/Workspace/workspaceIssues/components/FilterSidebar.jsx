import React, { useEffect, useState } from 'react'
import { AiFillSetting } from "react-icons/ai"
import { TbUrgent } from "react-icons/tb";
import { PiCellSignalHighBold } from "react-icons/pi";
import { PiCellSignalMedium } from "react-icons/pi";
import { GrProjects } from "react-icons/gr";
import IssuesList from './issuesList';

const FilterSidebar = (props) => {

  const [num,setnum]=useState(1);

  const [button,setButton]=useState(-1);
  const [button2,setButton2]=useState(-1);
  const [button3,setButton3]=useState(-1);

  const handleButton=(num)=>{
      setnum(num);
  }

  const [members,setMembers]=useState([
   {name: "Ayush Sahu",issues:2},{name:"Chetan Kamble",issues:2},{name:"Het Patel",issues:2},
   {name:"Khusboo Gupta",issues:0},{name:"Kushagra Sharma",issues:3},{name:"Manav Chauhan",issues:0},
   {name:"Nikhil Garg",issues:3},{name:"Piyush Kumar",issues:0},{name:"Priyanshu Kumar",issues:2},
   {name:"Sushil Kumar",issues:0},{name:"Vavadiya Harsh",issues:0},
  //  {name: "Ayush Ji",issues:7},
  //  {name:"Sushil Kumar",issues:7},{name:"Vavadiya Harsh",issues:6},{name: "Ayush Sahu",issues:17},
  ]);

  // const countIssueList=(IssueList)=>{
  //   members.forEach((member)=>{
  //     member.issues=0;
  //   })
  //   IssueList.forEach((issue)=>{
  //     const Assignee=issue.assignee;
  //     const obj = members.find((object)=>object.name.toLowerCase()==Assignee.toLowerCase());
  //     obj.issues++;
  //     // console.log(obj?.issues);
  //   })
  // }

  // useEffect(()=>{
  //     countIssueList(IssuesList);
  // },[])



  const [projects,setProjects]=useState([
    {name:"Project1",id:1,issues:6}, {name:"Project2",id:2,issues:7}, {name:"Project3",id:3,issues:6},
  ])

  const [priority,setPriority]=useState([
    6,6,7      //issues for urgent,high,medium
  ])

  const handleFilterSidebar=(name,num)=>{
    props.handleFilterAssignee(name);
    setButton(num);
  }

  const handleFilterSidebarPriority=(e,priority,num)=>{
    e.stopPropagation();
    props.handleFilterPriority(priority);
    setButton2(num);
    console.log(priority);
  }

  const handleFilterSidebarProject=(e,projectid,num)=>{
    e.stopPropagation();
    props.handleFilterProject(projectid);
    setButton3(num);
    // console.log(priority);
  }

  const handleClearFilters=(e)=>{
    // console.log("clicked");
    e.stopPropagation();
    setButton(-1);
    setButton2(-1);
    setButton3(-1);
    props.handleClear();
    // console.log(button);
  }


  return (
    <div className='bg-[#171e28] sm:w-[30vw] md:w-[25vw] w-[65vw] h-[80vh] overflow-y-scroll  text-white  z-10  right-0'>

       <div className='p-4'>
          <span className='bg-gray-700 p-1 text-sm'>Active Issues</span> 

          <div className='flex items-center mt-4  '>
              <AiFillSetting/>
              <p className='ml-3'>Workspace name</p>
          </div>
        </div>

       <div className='mt-[10px] md:mt-[17px] border-t-[1px] border-gray-500 md:p-3 p-2 '>

          <div className='flex justify-evenly border-[1px] border-gray-500 p-1 text-[15px] md:text-[16px]'>
          <button className={`${num==1?"bg-gray-700":""} rounded-sm px-2 pt-[2px]`} onClick={()=>handleButton(1)}>Assignees</button>
          <button className={`${num==2?"bg-gray-700":""} rounded-sm px-2 pt-[2px]`} onClick={()=>handleButton(2)}>Priority</button>
          <button className={`${num==3?"bg-gray-700":""} rounded-sm px-2 pt-[2px]`} onClick={()=>handleButton(3)}>Projects</button>
          </div>

         {num==1? <div className='mt-[1.5rem] overflow-y-scroll text-sm md:text-[16px]'>
            {members.map((member,idx)=>{
              return (
                <button className=' w-full text-left p-2 group  hover:bg-gray-700 flex justify-between' onClick={()=>handleFilterSidebar(member.name,idx)}>
                  <div className='flex justify-start  items-center w-[65%]'>
                  <p className='rounded-full bg-purple-600 h-6 text-center text-[11px] w-6 p-1 mr-2'>{member.name.split(" ")[0][0]+member.name.split(" ")[1][0]}</p>
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
                <div className='flex items-center'><PiCellSignalMedium/><p className='ml-2'>Medium</p></div>
                <div className='text-gray-400 group flex w-[34%] justify-between'>{button2==3? <button className='text-white bg-gray-800 text-sm p-1' onClick={(e)=>handleClearFilters(e)}>Clear filters</button>:<p className='opacity-10 group-hover:opacity-100 mr-2 '>See issues</p>}<p>{priority[2]}</p> </div>
                  </button>
              
            </div>:null
          }


          {
            num==3?<div className='mt-[1.5rem] text-sm md:text-[16px]'>

            {projects.map((project,idx)=>{
              return (
                <button className=' w-full text-left p-2 group  hover:bg-gray-700 flex justify-between' onClick={(e)=>handleFilterSidebarProject(e,project.id,idx)}>
                <div className='flex items-center'><GrProjects /><p className='ml-3'>{project.name}</p></div>
                  <div className='text-gray-400 group flex w-[34%] justify-between'>{button3==idx? <button className='text-white bg-gray-800 text-sm p-1' onClick={(e)=>handleClearFilters(e)}>Clear filters</button>:<p className='opacity-10 group-hover:opacity-100 mr-2 '>See issues</p>}<p>{project.issues}</p> </div>
                </button>
              )
            })}

            </div>:""
          }

        </div>

    </div>
  )
}

export default FilterSidebar