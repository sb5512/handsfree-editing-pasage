import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";

class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestion: this.props.showSuggestion,
      // What the user has entered
      userInput: this.props.text,
      indexing: this.props.indexing,
      currentHoverText: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ showSuggestion: nextProps.showSuggestion });
  }

  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;
    const filteredSuggestions = suggestions;
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestion: true
    });
  };

  onClick = e => {
    // Update the user input and reset the rest of the state
    if (!this.props.selectMode) {
      this.setState({
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestion: false,
        userInput: e.currentTarget.innerText
      });
    }
  };

  onHoverSelectable = event => {
    this.setState({
      userInput: event.currentTarget.textContent
    });
  };

  // After this is for trying the modal bootstrap

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    const { onClick, onHoverSelectable } = this;

    let suggestionsListComponent;
    if (this.state.showSuggestion) {
      suggestionsListComponent = (
        <Modal
          show={this.props.showSuggestion}
          dialogClassName="modal-90w"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Suggestion list for : TODO</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.suggestions.map((suggestion, index) => {
              let className; // ??? maybe some css setup
              return (
                <Modal.Title
                  className={className}
                  key={suggestion}
                  onMouseEnter={onHoverSelectable}
                  onClick={onClick}
                >
                  <div className="p-3 mb-2 bg-secondary text-white">
                    {suggestion}
                    <div className="float-right text-warning">
                      {String.fromCharCode(97 + index)}
                    </div>
                  </div>
                  <hr />
                </Modal.Title>
              );
            })}
            <Modal.Title>
              <div className="p-3 mb-2 bg-secondary text-warning">
                spell , lowercase, delete
              </div>
            </Modal.Title>
          </Modal.Body>
        </Modal>
      );
    } else {
      suggestionsListComponent = <span />;
    }

    return (
      <>
        {" "}
        <Fragment>
          <span
            style={{
              fontSize: 34,
              cursor: "pointer",
              paddingLeft: 20
            }}
          >
            {this.state.userInput}
            {suggestionsListComponent}
          </span>
          {this.state.indexing + 1}
        </Fragment>
      </>
    );
  }
}

export default Autocomplete;
