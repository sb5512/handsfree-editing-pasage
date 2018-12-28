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
    this.setState({
      content: contents[this.state.nextPhrase],
      contents: contents
    });
  };

  handleNext = () => {
    if (this.state.contents.length !== 0) {
      this.state.nextPhrase = this.state.nextPhrase + 1;
      this.props.resetTranscript();
      this.setState({ content: this.state.contents[this.state.nextPhrase] });
    }
  };

  handleFileChosen = file => {
    this.state.fileReader.onloadend = this.handleFileRead;
    this.state.fileReader.readAsText(file);
  };
  render() {
    return (
      <React.Fragment>
        <div className="upload-expense">
          <input
            type="file"
            id="file"
            className="input-file"
            accept=".csv"
            onChange={e => this.handleFileChosen(e.target.files[0])}
          />
        </div>
        <div className="row justify-content-md-center">
          {this.state.content}
        </div>
        <button className="btn btn-primary" onClick={this.handleNext}>
          Next
        </button>
      </React.Fragment>
    );
  }
}
export default ImportFromFileBodyComponent;
