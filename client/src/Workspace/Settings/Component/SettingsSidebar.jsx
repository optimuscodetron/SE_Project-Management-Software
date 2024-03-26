import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import { MdWorkspacesOutline  } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const SettingsSidebar = () => {

  const [number,setnumber]=useState(1);

  const handleclick=(num)=>{
    setnumber(num);
  }

  return (
    <div className='md:w-[18%] w-[30%] h-full bg-gray-900 fixed'>
        
        <div className='text-white  p-2 '>

            <div className='box-border mt-1 text-center border-b-[1px]'>
            <h1 className='text-3xl tracking-wide font-medium mb-3'>Settings</h1>
            </div>
            

            <div className='flex flex-col ml-[2vw] my-4 mr-1'>

            <div className={`flex p-2 ${number===1 ?'bg-gray-700':''} hover:bg-gray-700 h-12 my-[6px] rounded-md`}>
            <MdWorkspacesOutline className='mt-[11px] mr-3' />
            <Link to="/workspace/settings/general" className='no-underline hover:no-underline text-white my-2' onClick={()=>handleclick(1)}>General</Link>
            </div>

            <div className={`flex p-2 ${number===2 ?'bg-gray-700':''} hover:bg-gray-700 h-12 my-[6px] rounded-md`}>
            <FaUsers className='mt-[11px] mr-1' />
            <Link to="/workspace/settings/members" className='no-underline hover:no-underline p-2 text-white ' onClick={()=>handleclick(2)}>Members</Link>
            </div>

            <div className={`flex p-2 ${number===3 ?'bg-gray-700':''} hover:bg-gray-700 h-12 my-[6px] rounded-md`}>
            <CgProfile  className='mt-[11px] mr-1' /> 
            <Link to="/workspace/settings/profile" className='no-underline hover:no-underline hover:bg-gray-700 p-2 text-white ' onClick={()=>handleclick(3)}>Profile</Link>
            </div>
            </div>





        </div>
  
    </div>
);
}

export default SettingsSidebar