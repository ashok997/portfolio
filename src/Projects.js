import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import screenshot1 from "./screenshot_1.png";
import screenshot2 from "./screenshot_2.png";
import screenshot3 from "./screenshot_3.png";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

export default class Projects extends Component {
  render() {
    return (
      <div id="Projects">
        <Container style={{ paddingTop: 50 }}>
          <Alert variant="info">
            <Alert.Heading>Projects</Alert.Heading>
          </Alert>
          <CardDeck>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={screenshot1} />
              <Card.Body>
                <Card.Title>Superfans United</Card.Title>
                <Card.Text>
                  Built with : React, Redux, Rails, Javascript
                </Card.Text>
                <Button
                  variant="primary"
                  action
                  href="https://www.youtube.com/watch?v=yOOxsFXYbcM&t=15s"
                >
                  Watch Demo
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={screenshot2} />
              <Card.Body>
                <Card.Title>Payment Tracker</Card.Title>
                <Card.Text>Built with : Rails, Javascript, CSS</Card.Text>
                <Button
                  variant="primary"
                  action
                  href="https://www.youtube.com/watch?v=A8ezaT_sj9I&t=13s"
                >
                  Watch Demo
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={screenshot3} />
              <Card.Body>
                <Card.Title>Activation Tracker</Card.Title>
                <Card.Text>Built with : Ruby on Rails, Omniauth</Card.Text>
                <Button
                  variant="primary"
                  action
                  href="https://www.youtube.com/watch?v=zrCYUwBIV4A&t=4s"
                >
                  Watch Demo
                </Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </div>
    );
  }
}
