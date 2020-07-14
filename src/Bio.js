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
            fontSize: 22,
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
              I am a Software Engineer base in San Antonio, TX. I mostly use
              JavaScript, Java, Ruby on Rails to create my applications. In
              addtion to that, I am also familier with HTML, CSS, React, Redux,
              Bootstrap and other libraries. I am also a recent graduate of
              Flatiron School Software Engineering program. My love for coding
              stems from my affinity toward gaming and it helps me bring that
              childlike enthusiam everytime I sit down to code!
            </p>
            <hr />
            <div>
              <a href="https://medium.com/@ashok997"> Medium |</a>
              <a href="https://github.com/ashok997"> Github |</a>
              <a href="https://www.linkedin.com/in/ashokmaharjan/"> LinkedIn</a>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Bio;
