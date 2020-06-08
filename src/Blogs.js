import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default class Blogs extends Component {
  render() {
    return (
      <div id="blogs">
        <h3>Blogs</h3>
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
            disabled
          >
            Blog 2
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="https://medium.com/@ashok997/intro-to-javascript-for-sportsfans-3-d58c7355f00e"
            disabled
          >
            Blog 3
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="https://medium.com/@ashok997/intro-to-javascript-for-sportsfans-4-4b2ebf7b5754"
            disabled
          >
            Blog 4
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}
