import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Nav className="justify-content-center bg-dark">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/bio"> About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/technicalskills">Technical Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}
