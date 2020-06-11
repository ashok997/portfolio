import React, { Component } from "react";
import Figure from "react-bootstrap/Figure";
import Container from "react-bootstrap/Container";

export default class TechnicalSkills extends Component {
  render() {
    return (
      <div>
        <Container>
          <Figure>
            <Figure.Image
              src="/javascript.svg"
              width="100"
              height="100"
              rounded
            />
            <Figure.Caption center>JavaScript</Figure.Caption>
            <li>JavaScript</li>
            <li>Ruby</li>
            <li>Java </li>
            <li>React</li>
            <li>Redux</li>
            <li>Ruby on Rail </li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
            <li>Git</li>
            <li>Bootstrap</li>
          </Figure>
        </Container>
      </div>
    );
  }
}
