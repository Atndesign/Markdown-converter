import React, { Component } from "react";

class MarkdownInput extends Component {
  state = {};
  render() {
    return (
      <div className="markdown">
        <h2 className="markdown__title">Markdown</h2>
        <textarea
          onInput={(e) => this.props.handleMarkdownInput(e)}
          id=""
          cols="30"
          rows="10"
          className="markdown__text"
        ></textarea>
        <input onChange={(e) => this.props.load()} type="file" name="" id="" />
        <a
          className="btn btn-primary"
          href={this.props.dlLink}
          download="Markdown.md"
          onClick={(e) => this.props.downloadFile()}
        >
          Download MD file
        </a>
      </div>
    );
  }
}

export default MarkdownInput;
