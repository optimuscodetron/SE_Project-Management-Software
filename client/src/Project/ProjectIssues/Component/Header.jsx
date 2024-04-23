import { useState } from 'react';
import { TbLayoutSidebarRight } from "react-icons/tb";
import { GoProjectRoadmap } from "react-icons/go";
import { useSelector, useDispatch } from "react-redux";

const Header=(props)=>{

    const projectName=useSelector((state) => state.activeProject.value.name);

    
    return (
        <div className="w-full h-14 custom-workspaceHeader text-white flex  justify-content-between relative">
            <div className='p-3 flex items-center '>
             <GoProjectRoadmap className='mr-2 hidden md:block'/>
               <p className='hidden sm:block md:block'> {projectName}</p>
            </div>

            <div className='py-3 px-3 flex align-items-center cursor-pointer'>
                <TbLayoutSidebarRight onClick={props.handleShowFilterSidebar}/>
            </div>
        </div>
    );
}
export default Header;