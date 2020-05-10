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
      markdown: e,
      html: this.handleConversion(e),
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

  readfile = (e) => {
    console.log(e.target.result);
    this.handleMarkdownInput(e.target.result);
  };

  load = (e) => {
    let uploaded = e.target.files[0];
    if (uploaded.name.slice(-3) === ".md") {
      let reader = new FileReader();
      reader.addEventListener("load", this.readfile);
      reader.readAsText(uploaded);
    } else {
      alert("You must load a .md or .txt file! ");
    }
    return;
  };

  render() {
    return (
      <section className="main">
        <div className="row">
          <div className="col-lg-6">
            <MarkdownInput
              markdown={this.state.markdown}
              handleMarkdownInput={this.handleMarkdownInput}
              handleConversion={this.handleConversion}
              downloadFile={this.downloadFile}
              load={this.load}
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
