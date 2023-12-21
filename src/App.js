import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Progress from "./pages/Progress";
import Completed from "./pages/Completed";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="">
          <SideNav />
          <div>
            <Header />
            <div>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/completed" element={<Completed />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
