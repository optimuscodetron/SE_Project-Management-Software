import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useState } from "react";
function TitleDescrip() {
  const [Disc, setDisc] = useState(" ");
  const activeIssue = useSelector((state) => state.activeIssue.value);
  const [title,setTitle] = useState("");
  const handleTitleChange = (event) => {
    // setTitleZ(event.target.innerText);
  };
  const handleDescriptionChange = (event) => {
    // setTitleD(event.target.innerText);
  };
  useEffect(() => {
    const fetchIssue = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/workspace/issue/description`, {
          
            params: {
              activeIssueId: activeIssue._id,
            },
            withCredentials: true,
          }
        );
    
        const assigneeUsername = response.data;
        console.log(assigneeUsername);
        const title = assigneeUsername.issue.title;
        const Disc = assigneeUsername.issue.description;
        setTitle(title)
        setDisc(Disc);
 
      } catch (error) {
        console.error('Failed to fetch issue:', error);
      }
    };
  
    fetchIssue();
  }, []);
  return (
    <div className="h-auto p-3 m-3 mb-0 ">
      <h1
        className="text-3xl tracking-wide mb-[3vh] font-semibold"
        contentEditable="true"
        onBlur={handleTitleChange}
      >
        {title}
      </h1>
      <p
        className=" tracking-wide text-wrap  font-semibold min-h-[10vh] border-0"
        contentEditable="true"
        onBlur={handleDescriptionChange}
      >
        {Disc}
      </p>
    </div>
  );
}

export default TitleDescrip;
