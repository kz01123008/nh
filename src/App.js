import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

/* Pages */
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Services from "./pages/Service/ServicesPage";
import Project from "./pages/Project/ProjectPage";
import ProjectApp from "./pages/Project/ProjectApp";
import ProjectGame from "./pages/Project/ProjectGame";

import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop";
import Project1 from "./pages/Project/Project1";
import Project2 from "./pages/Project/Project2";
import Project3 from "./pages/Project/Project3";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      <RouterScrollTop />
      {loading ? (
        <div className="loading-pag">
          <div className="loader">
            <span>Ngoc Han</span>
            <span>Ngoc Han</span>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/project" element={<Project />}></Route>
          <Route exact path="/service" element={<Services />}></Route>
          <Route exact path="/project/app" element={<ProjectApp />} />
          <Route exact path="/project/game" element={<ProjectGame />} />
          <Route exact path="/project/1" element={<Project1 />} />
          <Route exact path="/project/2" element={<Project2 />} />
          <Route exact path="/project/3" element={<Project3 />} />
        </Routes>
      )}
    </>
  );
}

export default App;
