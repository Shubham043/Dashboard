import React, { useState ,useEffect} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'; // Import the specific icon you want to use

import './navbar.css';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 994) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="rgba(0,0,0,1)"></path></svg>
      </button>
      <ul className="sidebar-menu">
        <h3>Admin Dashboard</h3>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/jobs">Jobs</a>
        </li>
        <li>
          <a href="/candidates">Candidates</a>
        </li>
        <li>
          <a href="/candidates">Candidates</a>
        </li>
        <li>
          <a href="/candidates">Candidates</a>
        </li>
        {/* Add more sidebar menu items */}
      </ul>
    </div>
  );
}

export default Navbar;
