import React from "react";
import Bio from "./Bio";
import Projects from "./Projects";
import Blogs from "./Blogs";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        ></link>
        <header className="App-header">
          <Bio></Bio>
          <Projects></Projects>
          <Blogs></Blogs>
        </header>
      </div>
    );
  }
}

export default App;
