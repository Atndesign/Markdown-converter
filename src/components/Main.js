import React, { Component } from "react";
import MarkdownInput from "./MarkdownInput";
import Result from "./Result";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dlLink: "",
    };
  }

  handleMarkdownInput = (e) => {
    this.setState({
      markdown: e.target.value,
      html: this.handleConversion(e.target.value),
    });
  };

  handleConversion = (markdownValue) => {
    let showdown = require("showdown");
    let converter = new showdown.Converter();
    return converter.makeHtml(markdownValue);
  };

  downloadFile = () => {
    let fileBlob = new Blob([this.state.markdown], { type: "text" });
    this.setState({
      dlLink: window.URL.createObjectURL(fileBlob),
    });
  };

  render() {
    return (
      <section className="main">
        <div className="row">
          <div className="col-lg-6">
            <MarkdownInput
              handleMarkdownInput={this.handleMarkdownInput}
              handleConversion={this.handleConversion}
              downloadFile={this.downloadFile}
              dlLink={this.state.dlLink}
            />
          </div>
          <div className="col-lg-6">
            <Result result={this.state.html} />
          </div>
        </div>
      </section>
    );
  }
}

export default Main;
