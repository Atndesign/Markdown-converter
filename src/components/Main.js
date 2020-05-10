import React, { Component } from "react";
import MarkdownInput from "./MarkdownInput";
import Result from "./Result";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="main">
        <div className="row">
          <div className="col-lg-6">
            <MarkdownInput />
          </div>
          <div className="col-lg-6">
            <Result />
          </div>
        </div>
      </section>
    );
  }
}

export default Main;
