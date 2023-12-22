import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Add from "./pages/Add";
import Progress from "./pages/Progress";
import Completed from "./pages/Completed";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Router>
        <div className="flex min-h-screen">
          <div className="md:hidden">{menu ? <SideNav /> : ""}</div>
          <div className="hidden md:block">
            <SideNav />
          </div>
          <div className="flex-1 min-h-screen">
            <div className=" min-h-screen">
              <div className="flex justify-between items-center md:hidden">
                <div
                  onClick={() => setMenu(!menu)}
                  className="cursor-pointer mr-2 md:hidden"
                >
                  {menu ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
                <Header />
              </div>
              <div className="hidden md:block">
                <Header />
              </div>

              <div className="min-h-screen">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/add" element={<Add />} />
                  <Route path="/progress" element={<Progress />} />
                  <Route path="/completed" element={<Completed />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
