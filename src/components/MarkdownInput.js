import React, { Component } from "react";

class MarkdownInput extends Component {
  state = {};
  render() {
    return (
      <div className="markdown">
        <div className="markdown__title"></div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="markdown__text"
        ></textarea>
      </div>
    );
  }
}

export default MarkdownInput;
