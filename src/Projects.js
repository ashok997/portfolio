import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";

export default class Projects extends Component {
  render() {
    return (
      <div id="Projects">
        <h3>Projects</h3>
        <CardDeck>
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src="https://i9.ytimg.com/vi/yOOxsFXYbcM/mq2.jpg?sqp=CJy9-vYF&amp;rs=AOn4CLAO5muOweo686sg2NyspJCm7A1LBQ"
            />
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
            <Card.Img
              variant="top"
              src="https://i9.ytimg.com/vi/A8ezaT_sj9I/mq2.jpg?sqp=CPTB-vYF&amp;rs=AOn4CLBU2FDXeB46ggOsJMO4I8bUlzZgxQ"
            />
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
            <Card.Img
              variant="top"
              src="https://i9.ytimg.com/vi/zrCYUwBIV4A/mq2.jpg?sqp=CPTB-vYF&amp;rs=AOn4CLCCsEWD4OkHu3U0UnzJ2gcR3koj-A"
            />
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
      </div>
    );
  }
}
