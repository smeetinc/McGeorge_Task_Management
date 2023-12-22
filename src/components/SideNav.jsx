import React from "react";
import { FaUser } from "react-icons/fa";

import { MdFormatListBulletedAdd } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdFreeCancellation } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="md:block bg-green-500   text-white basis-2/6 lg:basis-1/5 py-12 pl-9 sticky h-screen top-0 bottom-0 left-0">
      <div className="flex items-center">
        <FaUser className="" />
        <h2 className="text-2xl font-bold text-white ml-4">John Doe</h2>
      </div>
      <div>
        <nav>
          <ul className="">
            <li className="grid grid-cols-2 place-items-center lg:place-items-start gap-3 py-3 hover:text-gray-700 transition duration-150 ease">
              <Link to="/" className="">
                Dashboard
              </Link>
              <Link to="/">
                <MdDashboard size={25} className="ml-4" />
              </Link>
            </li>
            <li className="grid grid-cols-2 place-items-center lg:place-items-start gap-3 py-3 hover:text-gray-700 transition duration-150 ease">
              <Link to="/add" className="">
                Add New Task
              </Link>
              <Link to="/add" className="">
                <MdFormatListBulletedAdd size={25} className="ml-4" />
              </Link>
            </li>
            <li className="grid grid-cols-2 place-items-center lg:place-items-start gap-3 py-3 hover:text-gray-700 transition duration-150 ease">
              <Link to="/progress" className="">
                Incomplete Task(s)
              </Link>
              <Link to="/progress">
                <MdFreeCancellation size={25} className="ml-4" />
              </Link>
            </li>
            <li className="grid grid-cols-2 place-items-center lg:place-items-start gap-3 py-3 hover:text-gray-700 transition duration-150 ease">
              <Link to="/completed" className="">
                Completed Task(s)
              </Link>
              <Link to="/completed">
                <AiOutlineFileDone
                  size={25}
                  className="justify-self-start ml-4"
                />
              </Link>
            </li>
            <li className="grid grid-cols-2 gap-4 place-items-center lg:place-items-start absolute  bottom-0 py-3 hover:text-gray-700 transition duration-150 ease">
              <Link to="/logout" className="">
                Logout
              </Link>
              <Link to="/logout">
                <IoMdLogOut size={25} className="justify-self-start ml-4" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideNav;
