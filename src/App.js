import React from "react";
import Bio from "./Bio";
import Projects from "./Projects";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Bio></Bio>
          <Projects></Projects>
        </header>
      </div>
    );
  }
}

export default App;
