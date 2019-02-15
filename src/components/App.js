import React, { Component } from "react";
import LinkList from "./LinkList";
import CreateLink from "./CreateLink";

class App extends Component {
  render() {
    return (
      <>
        <fieldset style={{}}>
          <legend>
            <b>Create a Link</b>
          </legend>
          <CreateLink />
        </fieldset>
        <fieldset style={{ marginTop: "20px" }}>
          <legend>
            <b>Links</b>
          </legend>
          <LinkList />
        </fieldset>
      </>
    );
  }
}

export default App;
