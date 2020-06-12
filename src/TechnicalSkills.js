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
            <Figure.Caption>JavaScript</Figure.Caption>
            <Figure.Image src="/ruby.png" width="100" height="100" rounded />
            <Figure.Caption>Ruby</Figure.Caption>
            <Figure.Image src="/java.png" width="100" height="100" rounded />
            <Figure.Caption>Java</Figure.Caption>
            <Figure.Image src="/rails.png" width="100" height="100" rounded />
            <Figure.Caption>Ruby on Rails</Figure.Caption>
            <Figure.Image src="/logo512.png" width="100" height="100" rounded />
            <Figure.Caption>React</Figure.Caption>
            <Figure.Image src="/html.png" width="100" height="100" rounded />
            <Figure.Caption center>HTML</Figure.Caption>
            <Figure.Image src="/css.png" width="100" height="100" rounded />
            <Figure.Caption center>CSS</Figure.Caption>
            <Figure.Image
              src="/bootstrap.png"
              width="100"
              height="100"
              rounded
            />
            <Figure.Caption>Bootstrap</Figure.Caption>
            <Figure.Image src="/git.png" width="100" height="100" rounded />
            <Figure.Caption center>Git</Figure.Caption>
            <li>Redux</li>

            <li>SQL</li>
          </Figure>
        </Container>
      </div>
    );
  }
}
