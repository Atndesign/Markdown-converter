import React, { Component } from "react";

class Result extends Component {
  state = {};

  updateHtml = () => {
    return { __html: this.props.result };
  };
  componentDidUpdate() {
    this.updateHtml();
  }
  render() {
    return (
      <div className="result">
        <h2 className="markdown__title">Result</h2>
        <div dangerouslySetInnerHTML={this.updateHtml()}></div>
      </div>
    );
  }
}

export default Result;
