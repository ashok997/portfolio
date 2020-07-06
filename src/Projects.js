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
      <div style={{ background: "papayawhip" }}>
        <Container style={{ paddingTop: 50, paddingBottom: 50 }}>
          <Alert variant="dark">
            <Alert.Heading>Projects</Alert.Heading>
          </Alert>

          <Card>
            <Card.Header> Superfans United </Card.Header>
            <Card.Img variant="top" src={screenshot1} />
            <Card.Body>
              <Card.Title>
                Built with : React, Redux, Rails, Javascript Single Page
              </Card.Title>
              <Card.Text>
                <li>
                  This application the enable users to 'collect' characters
                  cards. Users can then upvote, downvote or comments on those
                  characters
                </li>
                <li>
                  Designed application with Rails backend and Javascript
                  frontend with the content from marvel api
                </li>
                <li>
                  Utilized React and Redux for state management of the
                  application and used react bootstrap for styling on the pages
                </li>
              </Card.Text>
              <Button
                variant="dark"
                action
                href="https://www.youtube.com/watch?v=yOOxsFXYbcM&t=15s"
              >
                Watch Demo
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={screenshot2} />
            <Card.Body>
              <Card.Title>Payment Tracker</Card.Title>
              <Card.Text>Built with : Rails, Javascript, CSS</Card.Text>
              <Button
                variant="dark"
                action
                href="https://www.youtube.com/watch?v=A8ezaT_sj9I&t=13s"
              >
                Watch Demo
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={screenshot3} />
            <Card.Body>
              <Card.Title>Activation Tracker</Card.Title>
              <Card.Text>Built with : Ruby on Rails, Omniauth</Card.Text>
              <Button
                variant="dark"
                action
                href="https://www.youtube.com/watch?v=zrCYUwBIV4A&t=4s"
              >
                Watch Demo
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}
