import React from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

class Bio extends React.Component {
  render() {
    return (
      <div style={{ background: "papayawhip" }}>
        <Container style={{ paddingTop: 50, paddingBottom: 50 }}>
          <Alert variant="dark">
            <Alert.Heading>About</Alert.Heading>
          </Alert>

          <div id="info">
            I am a recent graduate of Flatiron School's Online Software
            Engineering Program, with background in sales and customer services.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </Container>
      </div>
    );
  }
}

export default Bio;
