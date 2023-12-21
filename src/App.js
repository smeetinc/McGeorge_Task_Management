import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Add from "./pages/Add";
import Progress from "./pages/Progress";
import Completed from "./pages/Completed";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="flex min-h-screen">
          <SideNav />
          <div className="flex-1 min-h-screen">
            <div className=" min-h-screen">
              <Header />
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
    </>
  );
}

export default App;
