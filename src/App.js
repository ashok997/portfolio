import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
          <Route exact={true} path="/" component={Bio} />
          <Route path="/bio" component={Bio} />

          {/* <Bio></Bio> */}
          <TechnicalSkills></TechnicalSkills>
          <Projects></Projects>
          <Blogs></Blogs>
        </div>
      </Router>
    );
  }
}

export default App;
