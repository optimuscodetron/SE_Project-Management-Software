import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import WorkspaceSidebar from '../components/workspaceSidebar/workspaceSidebar';
import Navbar from '../../Components/Layout/navbar/navbar';
import "./Inbox.css";

const Inbox = (props) => {
  const [messages, setMessages] = useState([
    {
      id: 6,
      sender: 'Pallavi Kashyap ',
      subject: 'Meet Schedule',
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
      sender: 'Tanu',
      subject: 'Need info',
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
      sender: 'Khushboo Gupta',
      subject: 'Project Update',
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
      sender: 'Kushagra Sharma',
      subject: 'Task Reminder',
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
      sender: 'Nikhil Garg',
      subject: 'Deadline Extension',
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
      sender: 'Het Patel',
      subject: 'Vacation Request',
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

  const handleSelectMessage = (messageId) => {
    setSelectedMessageId(messageId);
  };

  return (
    <div className="inbox-container bg-navy-700">
      <div className="inbox-content">
        <div className="message-list">
          <br></br>
          <br></br>
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

          <br></br>
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
        {selectedMessageId && (
          <div className="message-details">
            <br></br>
            <br></br>
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
           
          </div>
        )}
      </div>
    </div>
  );
};

export default Inbox;
