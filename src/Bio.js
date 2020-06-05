import React from "react";
import Alert from "react-bootstrap/Alert";

class Bio extends React.Component {
  render() {
    return (
      <div>
        <Alert variant="primary">
          <Alert.Heading>About</Alert.Heading>
          <p>
            Hi, I am a recent graduate of Flatiron School's Online Software
            Engineering Program, with background in sales and customer services.
          </p>
          <hr />
          <p className="mb-0">LinkeIn Medium Github</p>
        </Alert>
      </div>
    );
  }
}

export default Bio;
