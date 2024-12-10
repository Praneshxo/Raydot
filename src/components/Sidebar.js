import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,  faSlidersH, faRobot, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Ensure the CSS file path is correct
import { faComment } from '@fortawesome/free-regular-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Add a logo container here */}
      <div className="logo-container">
        <img src="logo.webp" alt="Your Logo" />
      </div>
      <NavLink to="/" exact activeClassName="active"> 
      <h3>Home</h3>
        <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
      </NavLink>
      <NavLink to="/nlp" activeClassName="active">
      <h3>Nlp</h3>
        <FontAwesomeIcon icon={faRobot} className="sidebar-icon" />
      </NavLink>
      <NavLink to="/shift-schedule" activeClassName="active">
      <h3>Chatbot</h3>
        <FontAwesomeIcon icon={faComment} className="sidebar-icon" />
      </NavLink>
      <NavLink to="/sectors" activeClassName="active">
      <h3>Database</h3>
        <FontAwesomeIcon icon={faDatabase} className="sidebar-icon" />
      </NavLink>
      <NavLink to="/settings" activeClassName="active">
      <h3>Settings</h3>
        <FontAwesomeIcon icon={faSlidersH} className="sidebar-icon" />
      </NavLink>
    </div>
  );
}

export default Sidebar;
