import React, { Component } from "react";

class MarkdownInput extends Component {
  state = {};
  render() {
    return (
      <div className="markdown">
        <h2 className="markdown__title">Markdown</h2>
        <textarea
          value={this.props.markdown}
          onChange={(e) => this.props.handleMarkdownInput(e.target.value)}
          id=""
          cols="30"
          rows="10"
          className="markdown__text"
        ></textarea>
        <input onChange={(e) => this.props.load(e)} type="file" name="" id="" />
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
