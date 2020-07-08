import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
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
            <Card.Img variant="top" src={screenshot1} />
            <Card.Header>Superfans United</Card.Header>
            <Card.Body>
              <Card.Text>
                <Alert variant="dark">
                  <p>
                    Built with : React, Redux, Rails, Javascript Single Page
                  </p>
                  <hr />
                  <p>
                    This application the enable users to 'collect' characters
                    cards. Users can then upvote, downvote or comments on those
                    characters
                  </p>
                  <hr />
                  <p>
                    Designed application with Rails backend and Javascript
                    frontend with the content from marvel api
                  </p>
                  <hr />
                  <p>
                    Utilized React and Redux for state management of the
                    application and used react bootstrap for styling on the
                    pages
                  </p>
                </Alert>
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
            <Card.Header>Payment Tracker</Card.Header>
            <Card.Body>
              <Card.Text>
                <Alert variant="dark">
                  <p>Built with : Rails, Javascript, CSS</p>
                  <hr />
                  <p>
                    This application will allow users to keep track of payments
                    made on credit cards
                  </p>
                  <hr />
                  <p>
                    Launched Single Page Application with Rails backend and
                    Javascript frontend
                  </p>
                  <hr />
                  <p>
                    Implemented AJAX and JSON to handle interactions between
                    server and client
                  </p>
                </Alert>
              </Card.Text>
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
            <Card.Header>Activation Tracker</Card.Header>
            <Card.Body>
              <Card.Text>
                <Alert variant="dark">
                  <p>Built with : Ruby on Rails, Omniauth</p>
                  <hr />
                  <p>
                    This application will allow users to create and keep track
                    of all the phones that they have in their store and also
                    records all the activations they have completed.
                  </p>
                  <hr />
                  <p>Coded an application on Ruby on Rails Framework</p>
                  <hr />
                  <p>
                    Added standard user authentication, including signup, login,
                    logout, and passwords
                  </p>
                  <hr />
                  <p>
                    Integrated omniauth to allow user login from social media
                    platforms like Facebook.
                  </p>
                </Alert>
              </Card.Text>
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
