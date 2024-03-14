import React from "react";
import TitleDescrip from "./Components/TitleDescrip";
import Comment from "./Components/Comment";
import RightBar from "./Components/RightBar";

function IssueInfo() {
  return (
    <div class="flex flex-row h-screen w-screen">
      <div className="w-60 bg-red-500 ">left sidebar</div>
      <div className="bg-gray-800 w-full h-screen text-white justify-center p-10">
        <div
          className="flex flex-col rounded overflow-auto mx-auto h-[100%] mb-4 w-full lg:w-[60%] bg-gray-900"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(0,0,0,0) rgba(0,0,0,0)",
          }}
        >
          <TitleDescrip />
          <div className="mt-2 mx-2 my-2">
            <hr/>
          </div>
          <Comment />
        </div>
      </div>
      <RightBar />
    </div>
  );
}

export default IssueInfo;
