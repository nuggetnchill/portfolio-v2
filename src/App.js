import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.scss";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/projects' component={ProjectPage} />
        <Route path='/contact' component={ContactPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
