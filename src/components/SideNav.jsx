import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="bg-green-500 h-screen md:w-1/4 px-2 pt-4 text-white">
      <div className="flex items-center">
        <FaUser className="" />
        <h2 className="text-2xl font-bold text-white ml-4">John Doe</h2>
      </div>
      <div>
        <nav>
          <ul className="">
            <li>
              <Link
                to="/dashboard"
                className="block py-3 hover:bg-gray-700 transition duration-150 ease"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/add"
                className="block py-3 hover:bg-gray-700 transition duration-150 ease"
              >
                Add New Task
              </Link>
            </li>
            <li>
              <Link
                to="/progress"
                className="block py-3 hover:bg-gray-700 transition duration-150 ease"
              >
                Incomplete Task(s)
              </Link>
            </li>
            <li>
              <Link
                to="/completed"
                className="block py-3 hover:bg-gray-700 transition duration-150 ease"
              >
                Completed Task(s)
              </Link>
            </li>
            <li>
              <Link
                to="/logout"
                className="block absolute  bottom-0 py-3 hover:text-gray-700 transition duration-150 ease"
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideNav;
