import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { CSVLink } from "react-csv";

// NOTE:
// When you change the imageNumber = 7 and phraseQuestionImageCount = 60. Dont forget to change it in one more place at the bottom
class ModalSession extends Component {
  handleClose = () => {
    this.props.startListening();
    // We will end the session once the images gets past 7
    if (this.props.imageNumber === 7) {
      this.props.historyStates.history.goBack();
      this.props.resetImageNumber();
    }
    // We will end the session once the copy task gets past 60
    if (this.props.phraseQuestionImageCount === 60) {
      this.props.historyStates.history.goBack();
      this.props.resetPhraseQuestionImageCount();
    }
    this.props.sessionCounterUp();
    this.props.restartTimer();
    this.props.clearLogDataPersist();
  };

  componentWillMount() {
    if (this.props.commandTag || this.props.dwellTag) {
      this.props.pressf4ToStartStopGaze();
      console.log("Did I get called? This is commandTag or dwelltag");
    } else {
      console.log("Did I get called? This is normal");
      this.props.pressf4f5ToStartStopGaze();
    }
    this.props.stopListening();
  }

  render() {
    let toShowHeadingText = "End of Session";
    let toShowBodyText = `You can now download the logdata, next session will begin after three seconds`;
    // We will end the session once the images gets past 7
    if (this.props.imageNumber === 7) {
      toShowHeadingText = "End of the EXPERIMENT";
      toShowBodyText =
        "Thank you for completing the free text formation task experiment!!!. \n \n You will be redirected back to selection of next experiment.";
    }
    // We will end the session once the copytask text gets past 60
    if (this.props.phraseQuestionImageCount === 60) {
      toShowHeadingText = "End of the EXPERIMENT";
      toShowBodyText =
        "Thank you for completing the copy task experiment!!!. \n\n You will be redirected back to selection of next experiment.";
    }
    return (
      <div>
        <Modal show={true} backdrop="static">
          <Modal.Header>
            <Modal.Title>{toShowHeadingText}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{toShowBodyText}</Modal.Body>
          <Modal.Footer>
            {this.props.data.length > 1 ? (
              <CSVLink
                filename={this.props.filename}
                className="btn btn-primary float-right"
                target="_blank"
                onClick={this.handleClose}
                data={this.props.data}
                headers={[
                  { label: "Command", key: "command" },
                  { label: "Time", key: "time" },
                  { label: "Text", key: "textForLog" }
                ]}
              >
                Download log data
              </CSVLink>
            ) : (
              <div />
            )}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default ModalSession;
