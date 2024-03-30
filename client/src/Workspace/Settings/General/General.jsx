import React, { useEffect, useState } from "react";
import SettingsSidebar from "../Component/SettingsSidebar";
import Navbar from "../../../Components/Layout/navbar/navbar";


const General = () => {
  const [workspaceName, setWorkspaceName] = useState("Software");
  const [workspaceUrl, setWorkspaceUrl] = useState("trackerX.app/Software");
  const [upload, setUpload] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const [imageSrc, setImageSrc] = useState(null);
  const [previousImageSrc, setPreviousImageSrc] = useState(null);

  const handleUploadChange = (event) => {
    const file = event.target.files[0];
    if(file){
    const reader = new FileReader();

    reader.onload = function (e) {
      // console.log(e.target.result);
      setPreviousImageSrc(imageSrc);
      setImageSrc(e.target.result);
    };

    reader.readAsDataURL(file);
  }
    // else {
    //   setImageSrc(null); 
    // }

  };

  const handleInput = (e, n) => {
    if (n == 1) setWorkspaceName(e.target.value);
    else if (n == 2) setWorkspaceUrl(e.target.value);
  };

  const handleUpdate = () => {
    //write logic for sending in backend
  };

  const handleSidebar = () => {
    setShowSidebar((prevstate) => !prevstate);
  };

  const handleUpload = () => {
    setUpload(!upload);
  };

  return (
    <div>
      <Navbar showSideBarHandler={handleSidebar} />

      <div
        className="bg-gray-800 fixed h-screen w-screen flex flex-row "
       
      >
        {<SettingsSidebar showSideBar={showSidebar} />}

        <div className="flex justify-center w-full overflow-auto h-[90%]">
          
          <div
            className="w-[80vw] sm:w-[70vw] md:w-[43vw] bg-gray-900 text-white p-4 overflow-y-scroll"
            
          >
           

            <p className="text-3xl tracking-wide font-normal my-2">Workspace</p>
            <p className=" text-[rgb(107,114,128)] text-[15px] border-b-[1px] border-gray-500 pb-4 ">
              Manage your workspace settings
            </p>

            <h3 className="text-[20px] tracking-wide font-normal my-2">Logo</h3>

          
              <div className="relative inline-flex rounded-lg w-auto auto mt-3 mb-2">
              {/* <img
                src="https://static.toiimg.com/thumb/msid-96054814,width-400,resizemode-4/96054814.jpg"
                alt=""
                onMouseOver={handleUpload}
                onMouseOut={handleUpload}
                className={`hover:cursor-pointer ${
                  upload ? "brightness-50" : ""
                } h-[60px] object-cover rounded-sm`}
              />
    
              {upload && (
                <button className="hover:cursor-pointer -m-14 z-10   text-white">
                  upload
                </button>
              )} */}
                <label htmlFor="fileInput" className="cursor-pointer ">
                  <input
                    id="fileInput"
                    type="file"
                    className="hidden"
                    onChange={handleUploadChange}
                  />

                  <div className="relative ">
                    {imageSrc ? (<img
                        src={imageSrc}
                        alt=""
                        className={`w-[69px] h-[65px] object-cover border   rounded-lg border-dashed border-gray-400  ${
                          upload ? "brightness-50" : ""}
                        ` }
                        onMouseOver={handleUpload}
                        onMouseOut={handleUpload}
                      />)
                      :(
                        <img
                        src={"https://static.toiimg.com/thumb/msid-96054814,width-400,resizemode-4/96054814.jpg"}
                        alt=""
                        className={`w-[69px] h-[65px] object-cover border z-0  rounded-lg border-dashed border-gray-400 ${
                          upload ? "brightness-50" : ""}
                        ` }
                        onMouseOver={handleUpload}
                        onMouseOut={handleUpload}
                      />
                      )
                      }
                        {upload && (
                        <button className="hover:cursor-pointer text-[10px] tracking-wide z-10  text-white">
                         Click to  upload
                        </button>
              )}
                  </div>
                </label>
              </div>
            

            <p className="text-[rgb(107,114,128)] text-[15px] border-b-[1px] border-gray-500 pb-4">
              Pick a logo for your workspace
            </p>

            <div className="border-gray-500 border-b-[1px]">
              <p className="text-[20px] font-normal tracking-wide my-2">
                General
              </p>
              <h6 className="text-gray-300 text-[15px] font-normal tracking-wide my-2">
                Workspace name
              </h6>
              <input
                value={workspaceName}
                className="bg-[rgb(15,19,29)] w-[35vw] md:w-[19vw] border-[1px] px-2 py-[2px]  border-gray-600 rounded-sm"
                onChange={(e) => handleInput(e, 1)}
              ></input>
              {workspaceName === "" ? (
                <p className="text-[12px] text-[rgb(220,38,38)] my-1 font-bold ">
                  Workspace name cannot be empty
                </p>
              ) : (
                ""
              )}

              <h6 className="text-gray-300 tracking-wide text-[15px] mt-4 font-normal my-2">
                Workspace URL
              </h6>
              <input
                value={workspaceUrl}
                className="bg-[rgb(15,19,29)] w-[35vw] md:w-[19vw]  border-[1px] px-2 py-[2px]  border-gray-600 rounded-sm"
                onChange={(e) => handleInput(e, 2)}
              ></input>
              {workspaceUrl === "" ? (
                <p className="text-[12px] text-[rgb(220,38,38)] my-1 font-bold">
                  Workspace url cannot be empty
                </p>
              ) : (
                ""
              )}
              <br></br>
              <button
                className="bg-purple-600 py-1 px-3 my-4 rounded-md"
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>

            <div className="mt-4">
              <p className="text-[20px] tracking-wide font-normal">
                Delete Workspace
              </p>
              <p className="text-[rgb(107,114,128)] text-[15px] ">
                If you want to permanently delete this workspace and all of its
                data, including but not limited to users, issues, and comments,
                you can do so below
              </p>
              <button className="bg-red-500 py-1 px-3 mt-4 rounded-md">
                Delete this workspace
              </button>
            </div>
         
        </div>
        </div>
      </div>
    </div>
  );
};

export default General;
