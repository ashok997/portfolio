import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bio from "./Bio";
import Projects from "./Projects";
import Blogs from "./Blogs";
import TechnicalSkills from "./TechnicalSkills";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
    };
  }

  componentDidMount() {
    fetch(
      " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40ashok997"
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          blogs: result.items,
        });
      });
  }

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
