import React, { Component } from "react";

class ImportFromFileBodyComponent extends Component {
  state = {
    fileReader: new FileReader(),
    content: "Upload phrases text file",
    contents: [],
    nextPhrase: 0
  };
  handleFileRead = e => {
    const contents = this.state.fileReader.result.split("\n");
    //console.log(contents);

    this.setState({
      content: contents[this.state.nextPhrase],
      contents: contents
    });
  };

  handleNext = e => {
    if (this.state.contents.length !== 0) {
      const val = this.state.nextPhrase + 1;
      this.setState({ content: this.state.contents[val], nextPhrase: val });
      this.props.resetTranscript();
    }
  };

  handleFileChosen = file => {
    this.state.fileReader.onloadend = this.handleFileRead;
    this.state.fileReader.readAsText(file);
  };
  componentWillReceiveProps(nextProps) {
    if (
      this.props.commands &&
      this.props.commands[0].split(" ")[
        this.props.commands[0].split(" ").length - 1
      ] === "next"
    ) {
      this.handleNext();
      this.props.resetTranscript();
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="upload-expense">
          <input
            type="file"
            id="file"
            className="input-file"
            accept=".*"
            onChange={e => this.handleFileChosen(e.target.files[0])}
          />
          <button
            className="pull-right btn btn-primary"
            onClick={this.handleNext}
          >
            Next
          </button>
        </div>

        <div className="row justify-content-md-center">
          {this.state.content}
        </div>
      </React.Fragment>
    );
  }
}
export default ImportFromFileBodyComponent;
