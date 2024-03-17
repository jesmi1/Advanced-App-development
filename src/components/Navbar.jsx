import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaUserFriends, FaPlus } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or brand */}
        <Link to="/" className="text-white text-2xl font-bold flex items-center">
          <FaCalendarAlt className="mr-2" /> Party Planner
        </Link>
        {/* Navigation links */}
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white flex items-center">
              <FaHome className="mr-1" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/events" className="text-white flex items-center">
              <FaCalendarAlt className="mr-1" />
              Events
            </Link>
          </li>
          <li>
            <Link to="/friends" className="text-white flex items-center">
              <FaUserFriends className="mr-1" />
              Friends
            </Link>
          </li>
        </ul>
        {/* Action button */}
        <Link to="/create-event" className="bg-white text-blue-500 font-bold py-2 px-4 rounded-md flex items-center">
          <FaPlus className="mr-1" />
          Create Event
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
