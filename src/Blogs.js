import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

export default class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
    };
  }

  componentDidMount() {
    fetch(
      " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40ashok997"
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          blogs: result.items,
        });
      });
  }

  render() {
    return (
      <div style={{ background: "papayawhip" }}>
        <Container style={{ paddingTop: 50, paddingBottom: 50 }}>
          <Alert variant="dark">
            <Alert.Heading>Blogs</Alert.Heading>
          </Alert>
          {this.state.blogs.map((blog) => (
            <p>{blog.title}</p>
          ))}
          <ListGroup as="ul">
            <ListGroup.Item
              action
              href="https://medium.com/@ashok997/intro-to-javascript-for-sportsfans-76ba53ec31c8"
            >
              Blog 1
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://medium.com/@ashok997/intro-to-javascript-for-sportsfans-2-7ebc2dfdd6c7"
            >
              Blog 2
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://medium.com/@ashok997/intro-to-javascript-for-sportsfans-3-d58c7355f00e"
            >
              Blog 3
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://medium.com/@ashok997/intro-to-javascript-for-sportsfans-4-4b2ebf7b5754"
            >
              Blog 4
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </div>
    );
  }
}
