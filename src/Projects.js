import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <h3>Projects</h3>
        <CardDeck>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../public/superfans-screenshot.png" />
            <Card.Body>
              <Card.Title>Superfans United</Card.Title>
              <Card.Text>
                Built with : React, Redux, Rails, Javascript
              </Card.Text>
              <Button variant="primary">Watch Demo</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../public/superfans-screenshot.png" />
            <Card.Body>
              <Card.Title>Payment Tracker</Card.Title>
              <Card.Text>Built with : Rails, Javascript, CSS</Card.Text>
              <Button variant="primary">Watch Demo</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../public/superfans-screenshot.png" />
            <Card.Body>
              <Card.Title>Activation Tracker</Card.Title>
              <Card.Text>Built with : Ruby on Rails, Omniauth</Card.Text>
              <Button variant="primary">Watch Demo</Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  }
}
