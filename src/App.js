import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/home' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/projects' component={ProjectPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/404' component={ErrorPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
