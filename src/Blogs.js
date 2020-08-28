import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

export default class Blogs extends Component {
  constructor() {
    super();
    this.state = {
      blogs: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    fetch(
      " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40ashok997"
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          blogs: result.items,
          loading: false,
        });
      });
  }

  render() {
    return (
      <div style={{ background: "papayawhip" }}>
        {this.state.loading ? (
          <Spinner animation="border" />
        ) : (
          <Container
            style={{ paddingTop: 50, paddingBottom: 50, fontFamily: "Verdana" }}
          >
            <Alert variant="dark">
              <Alert.Heading>Blogs</Alert.Heading>
            </Alert>
            {this.state.blogs.map((blog) => (
              <ListGroup as="ul">
                <ListGroup.Item action href={blog.link} target="_blank">
                  <>
                    {blog.title} - published {blog.pubDate.split(" ")[0]}
                  </>
                </ListGroup.Item>
              </ListGroup>
            ))}
          </Container>
        )}
      </div>
    );
  }
}
