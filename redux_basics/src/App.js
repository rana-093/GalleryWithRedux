import React, { Component, Fragment } from "react";

import "antd/dist/antd.css";

import "./App.css";
import Gallery from "../src/components/index";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Gallery />
      </Fragment>
    );
  }
}

export default App;
