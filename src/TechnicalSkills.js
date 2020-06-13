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
              src="/images/javascript.svg"
              width="100"
              height="100"
              rounded
            />
            <Figure.Caption>JavaScript</Figure.Caption>
            <Figure.Image
              src="/images/ruby.png"
              width="100"
              height="100"
              rounded
            />
            <Figure.Caption>Ruby</Figure.Caption>
            <Figure.Image
              src="/images/java.png"
              width="100"
              height="100"
              rounded
            />
            <Figure.Caption>Java</Figure.Caption>
            <Figure.Image
              src="/images/rails.png"
              width="100"
              height="100"
              rounded
            />
            <Figure.Caption>Ruby on Rails</Figure.Caption>
            <Figure.Image
              src="/images/logo512.png"
              width="100"
              height="100"
              rounded
            />
            <Figure.Caption>React</Figure.Caption>
            <Figure.Image
              src="/images/redux.png"
              width="100"
              height="100"
              rounded
            />
            <Figure.Caption center>Redux</Figure.Caption>
            <Figure.Image
              src="/images/html.png"
              width="100"
              height="100"
              rounded
            />
            <Figure.Caption center>HTML</Figure.Caption>
            <Figure.Image
              src="/images/css.png"
              width="100"
              height="100"
              rounded
            />
            <Figure.Caption center>CSS</Figure.Caption>
            <Figure.Image
              src="/images/bootstrap.png"
              width="100"
              height="100"
              rounded
            />
            <Figure.Caption>Bootstrap</Figure.Caption>
            <Figure.Image
              src="/images/git.png"
              width="100"
              height="100"
              rounded
            />
            <Figure.Caption center>Git</Figure.Caption>
            <Figure.Image
              src="/images/sql.jpeg"
              width="100"
              height="100"
              rounded
            />
            <Figure.Caption center>SQL</Figure.Caption>
          </Figure>
        </Container>
      </div>
    );
  }
}
