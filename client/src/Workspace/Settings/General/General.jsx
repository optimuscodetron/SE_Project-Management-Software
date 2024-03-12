import React, { useState } from 'react'
import SettingsSidebar from '../Component/SettingsSidebar';

const General = () => {

    const [workspaceName,setWorkspaceName]=useState("Software");
    const [workspaceUrl,setWorkspaceUrl]=useState("trackerX.app/Software");
    const [upload,setUpload]=useState(false);

    const handleInput=(e,n)=>{
     if(n==1) setWorkspaceName(e.target.value);
     else if(n==2) setWorkspaceUrl(e.target.value);
    }

    const handleUpdate=()=>{
        //write logic for sending in backend
    }

    const handleUpload=()=>{
      setUpload(!upload);
    }


  return (


    <div className='bg-gray-800 h-full w-screen flex flex-row '>

      <SettingsSidebar />

        <div className='w-[45vw] md:w-[41vw] ml-[36vw] h-screen mt-10  bg-gray-900 text-white p-3 '>

          <p className='text-3xl tracking-wide font-normal my-2'>Workspace</p>
          <p className=' text-[rgb(107,114,128)] text-[15px] border-b-[1px] border-gray-500 pb-4 '>Manage your workspace settings</p>

          <h3 className='text-[20px] tracking-wide font-normal my-2'>Logo</h3>

          <div className='rounded-lg mt-3 mb-2'>
          <img src="https://static.toiimg.com/thumb/msid-96054814,width-400,resizemode-4/96054814.jpg" alt="" onMouseOver={handleUpload} onMouseOut={handleUpload}
            className={`w-[62px] hover:cursor-pointer ${upload?'brightness-50':""} h-[60px] object-cover rounded-sm`} />
          
            {upload && <button className='hover:cursor-pointer absolute top-[33vh] left-[37.5vw] text-white'>upload</button>}
           
          </div>

          <p className='text-[rgb(107,114,128)] text-[15px] border-b-[1px] border-gray-500 pb-4'>Pick a logo for your workspace</p>

          <div className='border-gray-500 border-b-[1px]'>
            <p className='text-[20px] font-normal tracking-wide my-2'>General</p>
            <h6 className='text-gray-300 text-[15px] font-normal tracking-wide my-2'>Workspace name</h6>
            <input value={workspaceName} className='bg-[rgb(15,19,29)] w-[35vw] md:w-[17vw] border-[1px] px-2 py-[2px]  border-gray-600 rounded-sm' onChange={(e)=>handleInput(e,1)}></input>
            {workspaceName===""?<p className='text-[12px] text-[rgb(220,38,38)] my-1 font-bold '>Workspace name cannot be empty</p>:""}

            <h6 className='text-gray-300 tracking-wide text-[15px] mt-4 font-normal my-2'>Workspace URL</h6>
            <input value={workspaceUrl} className='bg-[rgb(15,19,29)] w-[35vw] md:w-[17vw]  border-[1px] px-2 py-[2px]  border-gray-600 rounded-sm' onChange={(e)=>handleInput(e,2)}></input>
            {workspaceUrl===""?<p className='text-[12px] text-[rgb(220,38,38)] my-1 font-bold'>Workspace url cannot be empty</p>:""}
            <br></br>
          <button className='bg-purple-600 py-1 px-3 my-4 rounded-md' onClick={handleUpdate}>Update</button>

          </div>

        <div className='my-4'>
          <p className='text-[20px] tracking-wide font-normal'>Delete Workspace</p>
          <p className='text-[rgb(107,114,128)] text-[15px] '>If you want to permanently delete this workspace and all of its data, including but not limited to users, issues, and comments, you can do so below</p>
          <button className='bg-red-500 py-1 px-3 my-4 rounded-md'>Delete this workspace</button>
        </div>

       
        </div>

    </div>
  )
}

export default General