import React from 'react';
import { useState } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
  const [projectName, setprojectName] = useState("DemoProject");

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
             {projectName}
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/workspace/project/board" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="th-large">Agile Board</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/workspace/project/settings" activeClassName="activeClicked">
                {/* <FontAwesomeIcon icon="fa-solid fa-gear" /> */}
              <CDBSidebarMenuItem icon="cog" className="">Project Settings</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/invite" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="plus">Invite to Workspace</CDBSidebarMenuItem>
            </NavLink>
            <hr />
                <NavLink exact to="/workspace/project/issue" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Issues</CDBSidebarMenuItem>
                </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

      </CDBSidebar>
    </div>
  );
};

export default Sidebar;