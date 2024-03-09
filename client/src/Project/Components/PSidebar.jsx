import React from 'react';
import { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';


const PSidebar = () => {
  const [projectName, setprojectName] = useState("DemoProject");
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const style = {
    "backgroundColor": "rgb(31, 41, 55)",
  }

  return (
    <div>
      
    </div>

  );
};

export default PSidebar;