import React, { useState } from "react";

const CreateIssueOverlay = ({ onClose }) => {
  const [issueType, setIssueType] = useState("");
  const [issueTitle, setIssueTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignees, setAssignees] = useState([]);
  const [priority, setPriority] = useState("");
  const [cycle, setCycle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assignee, setAssignee] = useState("");

  const [assigneeNames, setAssigneeNames] = useState([
    "Tera bro",
    "Mera bro",
    "Humara bro",
    "That hoe",
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your logic to handle issue creation
    console.log("Issue created!");
    onClose(); // Close the overlay after issue creation
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75 z-50">
      <div className="bg-customGray rounded-lg shadow-lg p-6 m-4 max-w-md w-full text-white opacity-90">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">New Issue</h2>
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={onClose}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="issueTitle" className="block   mb-1"></label>
            <input
              type="text"
              id="issueTitle"
              className="border border-gray-300 rounded-md w-full py-2 px-3 placeholder-black text-black font-semibold"
              value={issueTitle}
              onChange={(e) => setIssueTitle(e.target.value)}
              placeholder={issueTitle ? "" : "Issue Title"}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block   mb-1"></label>
            <textarea
              id="description"
              className="border font-semibold border-gray-300 rounded-md w-full py-2 px-3 placeholder-black text-black"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={description ? "" : "Description"}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="issueType" className="block font-semibold mb-1">
              Issue Type
            </label>
            <select
              id="issueType"
              className="border border-gray-300 font-semibold rounded-md w-full py-2 px-3 text-black"
              value={issueType}
              onChange={(e) => setIssueType(e.target.value)}
            >
              <option value="">Select...</option>
              <option value="bug">Bug</option>
              <option value="improvement">Improvement</option>
              <option value="feature">Feature</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="priority" className="block font-semibold mb-1">
              Priority
            </label>
            <select
              id="priority"
              className="border border-gray-300 font-semibold rounded-md w-full py-2 px-3 text-black"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="">Select...</option>
              <option value="urgent">Urgent</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
              <option value="no-priority">No Priority</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="cycle" className="block font-semibold mb-1">
              Cycle Option
            </label>
            <select
              id="cycle"
              className="border border-gray-300 font-semibold rounded-md w-full py-2 px-3 text-black"
              value={cycle}
              onChange={(e) => setCycle(e.target.value)}
            >
              <option value="">Select...</option>
              <option value="no-cycle">No Cycle</option>
              <option value="cycle-1">Cycle 1</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="dueDate" className="block  font-semiboldmb-1">
              Due Date
            </label>
            <input
              type="date"
              id="dueDate"
              className="border border-gray-300 font-semibold rounded-md w-full py-2 px-3 text-black"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="assignee" className="block font-semibold mb-1">
              Assignee
            </label>
            <select
              id="assignee"
              className="border border-gray-300 font-semibold rounded-md w-full py-2 px-3 text-black"
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
            >
              <option value="">Select...</option>
              {assigneeNames.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end font-semibold mt-6">
            <button
              type="button"
              className="px-4 py-2 mr-2 text-sm text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Create Issue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateIssueOverlay;
