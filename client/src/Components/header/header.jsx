import { useState } from 'react';
import './header.css';
import { TbLayoutSidebarRight } from "react-icons/tb";
const Header=(props)=>{
    // console.log(props.headerInfo);
   

    return (
        <div className="w-full h-14 custom-workspaceHeader text-white flex  justify-content-between ">
            {props.headerInfo.map((item,index)=>(
                <div key={index} className='flex flex-row py-3 px-3 cursor-pointer'>
                    <div className='flex mx-2 align-items-center '>
                    {item.headerIcon}
                    </div>
                    <div>      
                    {item.headerTitle}
                    </div>
                </div>
            ))}
            <div className='py-3 px-3 flex align-items-center cursor-pointer' onClick={props.handleShowFilterSidebar}>
                <TbLayoutSidebarRight/>
            </div>
        </div>
    );
}
export default Header;