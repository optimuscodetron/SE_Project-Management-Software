import React from "react";
import { useState } from "react";

function Comment() {
  const [commentInput, addCommentInput] = useState("");

  const assigneeChange = (e) => {
    e.preventDefault();
    console.log("assignee");
  };

  const [commentList, commentListAdd] = useState([
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
  ]);

  const subscribeToIssue = (e) => {
    e.preventDefault();
    console.log("subscribe");
  };

  const addComment = (e) => {
    e.preventDefault();
    if (commentInput !== "") {
      commentListAdd((prevListItems) => [...prevListItems, commentInput]);
      addCommentInput("");
      console.log("add comment");
    }
  };

  const topCommentTitle = {
    display: "flex",
    justifyContent: "space-between",
    color: "white",
  };

  const commentFontStyle = {
    display: "flex",
    color: "white",
    padding: "4px",
  };

  const textStyleComment = {
    padding: "2px",
  };

  const submitButtonStyle = {
    marginLeft: "4px",
    marginRight: "4px",
    paddingBottom: "4px",
    paddingTop: "1px",
    paddingLeft: "12px",
    paddingRight: "12px",
    borderRadius: "0.25rem",
    // border: "1px solid gray ",
  };

  return (
    <div className="bg-gray-900 h-full m-2 mt-0">
      <div className="p-2">
        <div className="topCommentTitle" style={topCommentTitle}>
          <div className="justify-self-start">Comments</div>
          <div className="justify-self-end">
            <button
              className="text-xs p-1 rounded-sm hover:bg-gray-800"
              onClick={subscribeToIssue}
            >
              Subscribe
            </button>
            <button
              className="text-xs ml-2 p-1 rounded-sm hover:bg-gray-800"
              onClick={assigneeChange}
            >
              assignee
            </button>
          </div>
        </div>

        <div className="p-2">
          <div className="commentSection" style={commentFontStyle}>
            <ul className="text-sm">
              {commentList.map((string, index) => (
                <li key={index} style={textStyleComment}>
                  {string}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full">
          <form
            onSubmit={addComment}
            style={{
              width: "100%",
              backgroundColor: "gray-800",
              padding: "4px",
              color: "white",
              border: "1px solid gray ",
              borderRadius: "5px",
            }}
          >
            <div style={{ width: "95%" }}>
              {/* <label htmlFor="username">Username:</label> */}
              <input
                type="text"
                placeholder="Write Comment"
                style={{
                  margin: "10px",
                  width: "100%",
                  background: "none",
                  border: "none",
                  outline: "none",
                }}
                value={commentInput}
                onChange={(e) => addCommentInput(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div style={{ width: "98%" }}>
              <div
                style={{
                  display: "flex",
                  marginBottom: "4px",
                  marginLeft: "2px",
                  marginRight: "2px",
                  padding: "1px",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  type="submit"
                  className="text-sm bg-gray-800"
                  style={submitButtonStyle}
                >
                  Comment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Comment;
