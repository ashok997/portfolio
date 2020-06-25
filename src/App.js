import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bio from "./Bio";
import Projects from "./Projects";
import Blogs from "./Blogs";
import TechnicalSkills from "./TechnicalSkills";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header"></header>
          <Navbar></Navbar>
          <Switch>
            <Route exact={true} path="/">
              <Bio></Bio>
              <TechnicalSkills></TechnicalSkills>
              <Projects></Projects>
              <Blogs></Blogs>
            </Route>
            <Route path="/bio" component={Bio} />
            <Route path="/technicalskills" component={TechnicalSkills} />
            <Route path="/projects" component={Projects} />
            <Route path="/blogs" component={Blogs} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
