import React from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

class Bio extends React.Component {
  render() {
    return (
      <div id="bio">
        <Container>
          <Alert variant="info">
            <Alert.Heading>About</Alert.Heading>
          </Alert>
          <p>
            I am a recent graduate of Flatiron School's Online Software
            Engineering Program, with background in sales and customer services.
          </p>
        </Container>
      </div>
    );
  }
}

export default Bio;
