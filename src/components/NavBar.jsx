import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Portfolio from "./Portfolio";
import Projects from "./Projects";
import About from "./About";

function NavBar() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Portfolio</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" exact component={<Portfolio/>} />
        <Route path="/about" component={<About/>} />
        <Route path="/projects" component={<Projects/>} />
      </Routes>
    </Router>
  );
}

export default NavBar;
