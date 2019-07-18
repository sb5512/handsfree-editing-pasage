import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { CSVLink } from "react-csv";

class ModalSession extends Component {
  state = { show: true };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  render() {
    return (
      <div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>End of Session</Modal.Title>
          </Modal.Header>
          <Modal.Body>You can now download the logdata</Modal.Body>
          <Modal.Footer>
            {this.props.data.length > 1 ? (
              <CSVLink
                filename={"logdata.csv"}
                className="btn btn-primary float-right"
                target="_blank"
                data={this.props.data}
                headers={[
                  { label: "Command", key: "command" },
                  { label: "Time", key: "time" },
                  { label: "Text", key: "text" }
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
