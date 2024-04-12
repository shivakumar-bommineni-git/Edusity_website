// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link to="/Job-Applications">Job Applications</Link>
        </li>
        <li>
          <Link to="/interview-scheduled">Interview Scheduled</Link>
        </li>
        <li>
          <Link to="/hired-candidates">Hired Candidates</Link>
        </li>
        {/* Add more navigation links here */}
      </ul>
    </div>
  );
}

export default Sidebar;
