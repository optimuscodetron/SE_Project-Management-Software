import React from "react";

function RightBar() {
  return (
    <div
      className="bg-black w-[28vw] overflow-auto text-white p-3"
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(0,0,0,0) rgba(0,0,0,0)",
      }}
    >
      right bar
    </div>
  );
}

export default RightBar;
