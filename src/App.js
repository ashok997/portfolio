import React from "react";
import Bio from "./Bio";
import Projects from "./Projects";
import Blogs from "./Blogs";
import TechnicalSkills from "./TechnicalSkills";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <Navbar></Navbar>
        <Bio></Bio>
        <TechnicalSkills></TechnicalSkills>
        <Projects></Projects>
        <Blogs></Blogs>
      </div>
    );
  }
}

export default App;
