import React, { useState } from 'react'
import { AiFillSetting } from "react-icons/ai"
import { TbUrgent } from "react-icons/tb";
import { PiCellSignalHighBold } from "react-icons/pi";
import { PiCellSignalMedium } from "react-icons/pi";
import { GrProjects } from "react-icons/gr";
const FilterSidebar = () => {

  const [num,setnum]=useState(1);

  const handleButton=(num)=>{
      setnum(num);
  }

  const [members,setMembers]=useState([
   {name: "Ayush Sahu",issues:7},{name:"Chetan Kamble",issues:6},{name:"Het Patel",issues:8},
   {name:"Khusboo Gupta",issues:5},{name:"Kushagra Sharma",issues:8},{name:"Manav Chauhan",issues:6},
   {name:"Nikhil Garg",issues:0},{name:"Piyush Kumar",issues:5},{name:"Priyanshu Kumar",issues:4},
   {name:"Sushil Kumar",issues:7},{name:"Vavadiya Harsh",issues:6},{name: "Ayush Sahu",issues:7},
   {name:"Sushil Kumar",issues:7},{name:"Vavadiya Harsh",issues:6},{name: "Ayush Sahu",issues:17},
  ]);

  const [projects,setProjects]=useState([
    {name:"Project1",issues:7}, {name:"Project2",issues:14}, {name:"Project3",issues:2},
  ])

  const [priority,setPriority]=useState([
    5,14,9      //issues for urgent,high,medium
  ])


  return (
    <div className='bg-[#171e28] sm:w-[30vw] md:w-[25vw] w-[65vw] h-[80vh] overflow-y-scroll  text-white  z-10  right-0'>

       <div className='p-4'>
          <span className='bg-gray-700 p-1 text-sm'>Active Issues</span> 

          <div className='flex items-center mt-4  '>
              <AiFillSetting/>
              <p className='ml-3'>Workspace name</p>
          </div>
        </div>

       <div className='mt-[17px] border-t-[1px] border-gray-500 p-3 '>

          <div className='flex justify-evenly border-[1px] border-gray-500 p-1'>
          <button className={`${num==1?"bg-gray-700":""} rounded-sm px-2 pt-[2px]`} onClick={()=>handleButton(1)}>Assignees</button>
          <button className={`${num==2?"bg-gray-700":""} rounded-sm px-2 pt-[2px]`} onClick={()=>handleButton(2)}>Priority</button>
          <button className={`${num==3?"bg-gray-700":""} rounded-sm px-2 pt-[2px]`} onClick={()=>handleButton(3)}>Projects</button>
          </div>

         {num==1? <div className='mt-[1.5rem] overflow-y-scroll'>
            {members.map((member)=>{
              return (
                <button className=' w-full text-left p-2 group  hover:bg-gray-700 flex justify-between'>
                  <p>{member.name}</p>
                  <div className='text-gray-400 group flex w-[34%] justify-between'><p className='opacity-10 group-hover:opacity-100 mr-2 '>See issues</p><p>{member.issues}</p> </div>
                </button>
              )
            })}
          </div>:""}

          {
            num==2?<div className='mt-[1.5rem] '>
              
                <button className=' w-full group text-left p-2 hover:bg-gray-700 flex justify-between'>
                  <div className='flex items-center'><TbUrgent/><p className='ml-2'>Urgent</p></div>
                  <div className='text-gray-400 group flex w-[34%] justify-between'><p className='opacity-10 group-hover:opacity-100 mr-2 '>See issues</p><p>{priority[0]}</p> </div>
                 </button>

                <button className=' w-full group text-left p-2 hover:bg-gray-700 flex justify-between'>
                <div className='flex items-center'><PiCellSignalHighBold /><p className='ml-2'>High</p></div>
                <div className='text-gray-400 group flex w-[34%] justify-between'><p className='opacity-10 group-hover:opacity-100 mr-2 '>See issues</p><p>{priority[1]}</p> </div>
                </button>
               
                <button className=' w-full group text-left p-2 hover:bg-gray-700 flex justify-between'>
                <div className='flex items-center'><PiCellSignalMedium/><p className='ml-2'>Medium</p></div>
                <div className='text-gray-400 group flex w-[34%] justify-between'><p className='opacity-10 group-hover:opacity-100 mr-2 '>See issues</p><p>{priority[2]}</p> </div>
                  </button>
              
            </div>:""
          }


          {
            num==3?<div className='mt-[1.5rem]'>

            {projects.map((project)=>{
              return (
                <button className=' w-full text-left p-2 group  hover:bg-gray-700 flex justify-between'>
                <div className='flex items-center'><GrProjects /><p className='ml-3'>{project.name}</p></div>
                  <div className='text-gray-400 group flex w-[34%] justify-between'><p className='opacity-10 group-hover:opacity-100 mr-2 '>See issues</p><p>{project.issues}</p> </div>
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