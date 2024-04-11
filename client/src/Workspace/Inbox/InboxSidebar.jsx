import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Inbox.css";
import InboxIssues from './InboxIssues';
import IssueInfo from './Issue_Info';

const Inbox = (props) => {
  const [messages, setMessages] = useState([
    {
      id: 6,
      sender: 'Issue 1 ',
      subject: 'Alert',
      body: 'This is a message about upcoming meeting. Answer the poll for deciding meeting date.',
      isRead: false,
      relatedTask: {
        taskId: 'Task005',
        taskName: 'Meetings',
        deadline: '2024-04-10',
        completed: false,
      },
    },
    {
      id: 5,
      sender: 'Issue 2',
      subject: 'Alert',
      body: 'This is a message to ask info about your branch of the project.',
      isRead: true,
      relatedTask: {
        taskId: 'Task006',
        taskName: 'Merging',
        deadline: '2024-03-26',
        completed: true,
      },
    },
    {
      id: 1,
      sender: 'Issue 3',
      subject: 'Alert',
      body: 'This is a message about a project update.',
      isRead: false,
      relatedTask: {
        taskId: 'Task001',
        taskName: 'Implement User Authentication',
        deadline: '2024-04-15',
        completed: false,
      },
    },
    {
      id: 2,
      sender: 'Issue 4',
      subject: 'Alert',
      body: 'This is a message to remind you about a task.',
      isRead: true,
      relatedTask: {
        taskId: 'Task002',
        taskName: 'Update Dashboard UI',
        deadline: '2024-03-28',
        completed: true,
      },
    },
    {
      id: 3,
      sender: 'Issue 5',
      subject: 'Alert',
      body: 'The deadline for the UI redesign task has been extended to next week.',
      isRead: false,
      relatedTask: {
        taskId: 'Task003',
        taskName: 'Redesign User Interface',
        deadline: '2024-04-05',
        completed: false,
      },
    },
    {
      id: 4,
      sender: 'Issue 6',
      subject: 'Alert',
      body: 'I need to request some time off next month.',
      isRead: false,
      relatedTask: {
        taskId: 'Task004',
        taskName: 'Optimize Database Queries',
        deadline: '2024-04-15',
        completed: false,
      },
    },
    // Add more messages as needed
  ]);


  const [selectedMessageId, setSelectedMessageId] = useState(null);
  const [showIssueInfo, setShowIssueInfo] = useState(false);
  const handleSelectMessage = (messageId) => {
    setSelectedMessageId(messageId);
    setShowIssueInfo(true); 
  };

  const handleCloseIssueInfo = () => {
    setSelectedMessageId(null);
    setShowIssueInfo(false); // Hide the IssueInfo component when closed
  };

  return (
    <div className="inbox-container bg-navy-700">
      <div className="inbox-content">
        <div className="message-list">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className='flex justify-end mx-2'>
          <div onClick={props.onCloseInbox} className="close-button">
              &#x2716;   
            </div>
            <br></br>
            </div>
          <h2 className="inbox-title">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H28V28H4Z" fill="#007BFF" />
              <path d="M22 6L16 12L10 6L9 7L13 11L22 6Z" fill="#fff" />
              <path d="M12 18L8 22L7 21L11 17L16 21L15 22L12 18Z" fill="#fff" />
            </svg>
            Inbox
          </h2>
          <ul>
            {messages.map((message) => (
              <li
                key={message.id}
                className={`message-item ${selectedMessageId === message.id ? 'selected' : ''}`}
                onClick={() => handleSelectMessage(message.id)}
                style={{
                  borderBottom: '1px solid  rgba(255, 255, 255, 0.1)', // Light white with 50% opacity
                }}
              >
                <div className="message-sender">{message.sender}</div>
                <div className="message-subject">{message.subject}</div>
                {message.isRead && <div className="message-unread-dot"></div>}
              </li>
            ))}
          </ul>
        </div>
        {showIssueInfo  && (
          <div className="issue-info">
          <div className="message-details">
            <IssueInfo  onCloseIssueInfo={handleCloseIssueInfo}/>
            <br></br>
            <br></br>{/*
            <h1>{messages.find((m) => m.id === selectedMessageId)?.subject}</h1><br></br>
            <div className="message-task">
              <h2>Task Details:</h2><br></br>
              <p><strong>Task ID:</strong> {messages.find((m) => m.id === selectedMessageId)?.relatedTask.taskId}</p><br></br>
              <p><strong>Task Name:</strong> {messages.find((m) => m.id === selectedMessageId)?.relatedTask.taskName}</p><br></br>
              <p><strong>Deadline:</strong> {messages.find((m) => m.id === selectedMessageId)?.relatedTask.deadline}</p><br></br>
              <p><strong>Status:</strong> {messages.find((m) => m.id === selectedMessageId)?.relatedTask.completed ? 'Completed' : 'Pending'}</p><br></br>
            </div>
            <div className="message-body">
              <h2>Message Body:</h2>
              <p>{messages.find((m) => m.id === selectedMessageId)?.body}</p>
            </div><br></br>
           */}
        </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Inbox;
