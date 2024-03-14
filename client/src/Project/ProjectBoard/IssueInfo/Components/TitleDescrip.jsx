import React from "react";

function TitleDescrip() {
  const titleZ = "Issue Title ";
  const titleD = " Description";
  return (
    <div className="h-auto p-3 m-3 mb-0">
      <h1 className="text-3xl tracking-wide font-semibold mb-10">{titleZ}</h1>
      <p className=" tracking-wide font-semibold mb-10">{titleD}</p>
    </div>
  );
}

export default TitleDescrip;
