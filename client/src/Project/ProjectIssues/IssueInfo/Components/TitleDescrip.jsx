import React, { useState } from "react";

function TitleDescrip() {
  const [titleZ, setTitleZ] = useState("Initial Title");
  const [titleD, setTitleD] = useState("Description");

  const handleTitleChange = (event) => {
    setTitleZ(event.target.innerText);
  };
  const handleDescriptionChange = (event) => {
    setTitleD(event.target.innerText);
  };

  return (
    <div className="h-auto p-3 m-3 mb-0 ">
      <h1
        className="text-3xl tracking-wide mb-[3vh] font-semibold"
        contentEditable="true"
        onBlur={handleTitleChange}
      >
        {titleZ}
      </h1>
      <p
        className=" tracking-wide text-wrap  font-semibold min-h-[10vh] border-0"
        contentEditable="true"
        onBlur={handleDescriptionChange}
      >
        {titleD}
      </p>
    </div>
  );
}

export default TitleDescrip;
