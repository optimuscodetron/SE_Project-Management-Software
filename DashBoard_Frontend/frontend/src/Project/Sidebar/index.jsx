import React from 'react';
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
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
             DemoProject
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/project/board" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="th-large">Agile Board</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/project/settings" activeClassName="activeClicked">
                {/* <FontAwesomeIcon icon="fa-solid fa-gear" /> */}
              <CDBSidebarMenuItem icon="gear">ProjectSettings</CDBSidebarMenuItem>
            </NavLink>
            <hr />
                <NavLink exact to="/project/issue" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Issues</CDBSidebarMenuItem>
                </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

      </CDBSidebar>
    </div>
  );
};

export default Sidebar;