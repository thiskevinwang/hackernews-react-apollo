import React, { Component } from "react";

class Link extends Component {
  render() {
    return (
      <div>
        <li style={{ margin: "10px" }}>
          {this.props.link.description} ({this.props.link.url})
        </li>
      </div>
    );
  }
}

export default Link;
