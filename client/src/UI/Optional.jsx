import React from 'react'
import { useState } from 'react'

const Optional = () => {
  const [selectedView, setSelectedView] = useState('Inbox')
  const views = ['Inbox', 'My Issues', 'Roadmaps']
  const [issues, setIssues] = useState([
    // Add your initial issue data here
    {
      title: 'Fix navigation bar bug',
      assignee: 'John Doe',
      dueDate: '2024-03-25',
      status: 'Active',
    },
    // Add more issue objects
  ])
  const [filter, setFilter] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [newAssignee, setNewAssignee] = useState('')
  const [newDueDate, setNewDueDate] = useState('')

  const handleViewChange = (view) => {
    setSelectedView(view)
  }

  const handleMarkComplete = (issueIndex) => {
    setIssues(
      issues.map((issue, index) =>
        index === issueIndex ? { ...issue, status: 'Completed' } : issue
      )
    )
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase())
  }

  const Issue = ({ title, assignee, dueDate, status, onMarkComplete }) => {
    return (
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-600">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <div>
            <div className="text-base font-medium text-white">{title}</div>
            <div className="text-sm text-gray-400">{assignee}</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {dueDate && (
            <div className="text-sm text-gray-400">Due {dueDate}</div>
          )}
          <span
            className={`px-2 py-1 rounded-md text-xs font-medium ${
              status === 'Overdue' ? 'bg-red-500 text-white' : status === 'Active' ? 'bg-green-500 text-white' : 'bg-gray-400 text-white'
            }`}
          >
            {status}
          </span>
          {status !== 'Completed' && (
            <button
              className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              onClick={() => onMarkComplete()}
            >
              Mark Complete
            </button>
          )}
        </div>
      </div>
    )
  }

  const handleNewIssue = (newTitle, newAssignee, newDueDate) => {
    setIssues([
      ...issues,
      {
        title: newTitle,
        assignee: newAssignee,
        dueDate: newDueDate,
        status: 'Active',
      },
    ])
    setNewTitle('') // Clear form fields after creating an issue
    setNewAssignee('')
    setNewDueDate('')
  }

  const filteredIssues = issues.filter((issue) =>
    issue.title.toLowerCase().includes(filter)
  )

  return (
    
      <div className="flex min-h-screen bg-gray-800">
        <WorkspaceSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-6 bg-navy-700">
            <div className="text-xl font-bold text-white">
              {views.map((view) => (
                <button
                  key={view}
                  className={`px-3 py-2 rounded-md text-white focus:outline-none hover:bg-opacity-70 ${
                    selectedView === view ? '                    bg-navy-600' : 'bg-navy-700'
                }`}
                onClick={() => handleViewChange(view)}
              >
                {view}
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 bg-gray-600 text-white rounded-md focus:outline-none"
              value={filter}
              onChange={handleFilterChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-3 top-3 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.293 14.293a1 1 0 0 1-1.414 0l-3.792-3.792a5 5 0 1 1 1.414-1.414l3.792 3.792a1 1 0 0 1 0 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {filteredIssues.map((issue, index) => (
            <Issue
              key={index}
              title={issue.title}
              assignee={issue.assignee}
              dueDate={issue.dueDate}
              status={issue.status}
              onMarkComplete={() => handleMarkComplete(index)}
            />
          ))}
        </div>
        {selectedView === 'My Issues' && (
          <div className="p-4 bg-gray-700">
            <h2 className="text-lg font-semibold text-white mb-2">
              Create New Issue
            </h2>
            <input
              type="text"
              placeholder="Title"
              className="w-full bg-gray-600 text-white rounded-md px-4 py-2 mb-2 focus:outline-none"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Assignee"
              className="w-full bg-gray-600 text-white rounded-md px-4 py-2 mb-2 focus:outline-none"
              value={newAssignee}
              onChange={(e) => setNewAssignee(e.target.value)}
            />
            <input
              type="date"
              placeholder="Due Date"
              className="w-full bg-gray-600 text-white rounded-md px-4 py-2 mb-2 focus:outline-none"
              value={newDueDate}
              onChange={(e) => setNewDueDate(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
              onClick={() => handleNewIssue(newTitle, newAssignee, newDueDate)}
            >
              Create Issue
            </button>
          </div>
        )}
      </div>
    </div>
  
)
}

const WorkspaceSidebar = () => {
// Sidebar component implementation
return (
  <div className="w-64 bg-gray-900 text-white">
    <div className="p-4 border-b border-gray-800">
      <h1 className="text-lg font-semibold">Project Name</h1>
      <p className="text-sm text-gray-400">Project description</p>
    </div>
    <div className="p-4">
      <h2 className="text-sm font-semibold uppercase text-gray-400 mb-4">
        Sections
      </h2>
      <ul className="space-y-2">
        <li>
          <a href="#" className="block hover:text-gray-300">
            Section 1
          </a>
        </li>
        <li>
          <a href="#" className="block hover:text-gray-300">
            Section 2
          </a>
        </li>
        <li>
          <a href="#" className="block hover:text-gray-300">
            Section 3
          </a>
        </li>
      </ul>
    </div>
  </div>
)
}

export default Optional;

