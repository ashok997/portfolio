import React, { Component } from "react";
import Figure from "react-bootstrap/Figure";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

export default class TechnicalSkills extends Component {
  render() {
    return (
      <div style={{ background: "papayawhip" }}>
        <Container style={{ paddingTop: 50, paddingBottom: 50 }}>
          <Alert variant="dark">
            <Alert.Heading>Technical Skills</Alert.Heading>
          </Alert>
          <Figure>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <Figure.Image
                  src="/images/javascript.svg"
                  width="100"
                  height="100"
                  rounded
                />
                <Figure.Caption class="figure-caption text-center">
                  JavaScript
                </Figure.Caption>
              </Col>
              <Col md="auto">
                <Figure.Image
                  src="/images/ruby.png"
                  width="100"
                  height="100"
                  rounded
                />
                <Figure.Caption class="figure-caption text-center">
                  Ruby
                </Figure.Caption>
              </Col>
              <Col md="auto">
                <Figure.Image
                  src="/images/java.png"
                  width="100"
                  height="100"
                  rounded
                />
                <Figure.Caption class="figure-caption text-center">
                  Java
                </Figure.Caption>
              </Col>
              <Col md="auto">
                <Figure.Image
                  src="/images/rails.png"
                  width="100"
                  height="100"
                  rounded
                />
                <Figure.Caption class="figure-caption text-center">
                  Ruby on Rails
                </Figure.Caption>
              </Col>
              <Col md="auto">
                <Figure.Image
                  src="/images/logo512.png"
                  width="100"
                  height="100"
                  rounded
                />
                <Figure.Caption class="figure-caption text-center">
                  React
                </Figure.Caption>
              </Col>
              <Col md="auto">
                <Figure.Image
                  src="/images/redux.png"
                  width="100"
                  height="100"
                  rounded
                />
                <Figure.Caption class="figure-caption text-center">
                  Redux
                </Figure.Caption>
              </Col>

              <Col md="auto">
                <Figure.Image
                  src="/images/html.png"
                  width="100"
                  height="100"
                  rounded
                />
                <Figure.Caption class="figure-caption text-center">
                  HTML
                </Figure.Caption>
              </Col>
              <Col md="auto">
                <Figure.Image
                  src="/images/css.png"
                  width="100"
                  height="100"
                  rounded
                />
                <Figure.Caption class="figure-caption text-center">
                  CSS
                </Figure.Caption>
              </Col>
              <Col md="auto">
                <Figure.Image
                  src="/images/bootstrap.png"
                  width="100"
                  height="100"
                  rounded
                />
                <Figure.Caption class="figure-caption text-center">
                  Bootstrap
                </Figure.Caption>
              </Col>
              <Col md="auto">
                <Figure.Image
                  src="/images/git.png"
                  width="100"
                  height="100"
                  rounded
                />
                <Figure.Caption class="figure-caption text-center">
                  Git
                </Figure.Caption>
              </Col>
              <Col md="auto">
                <Figure.Image
                  src="/images/sql.png"
                  width="100"
                  height="100"
                  rounded
                />
                <Figure.Caption class="figure-caption text-center">
                  SQL
                </Figure.Caption>
              </Col>
            </Row>
          </Figure>
        </Container>
      </div>
    );
  }
}
