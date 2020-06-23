import React from "react";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

class Bio extends React.Component {
  render() {
    return (
      <div style={{ background: "papayawhip", textAlign: "center" }}>
        <Container
          style={{
            paddingTop: 50,
            paddingBottom: 50,
            fontFamily: "Verdana",
            fontSize: 25,
          }}
        >
          <Alert variant="dark">
            <Alert.Heading>About Me</Alert.Heading>
          </Alert>
          <Image
            src="/images/ashok.jpg"
            height="200"
            width="210"
            roundedCircle
          ></Image>

          <div id="bio-info">
            <p>
              I am a recent graduate of Flatiron School's Online Software
              Engineering Program, with background in sales and customer
              services.
            </p>
          </div>
        </Container>
      </div>
    );
  }
}

export default Bio;
