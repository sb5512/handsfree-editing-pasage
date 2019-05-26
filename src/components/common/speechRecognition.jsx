import React, { Component } from "react";

export default function SpeechRecognition(options) {
  const SpeechRecognitionInner = function(WrappedComponent) {
    const BrowserSpeechRecognition =
      typeof window !== "undefined" &&
      (window.SpeechRecognition ||
        window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition ||
        window.oSpeechRecognition);
    const recognition = BrowserSpeechRecognition
      ? new BrowserSpeechRecognition()
      : null;
    const browserSupportsSpeechRecognition = recognition !== null;
    let listening;
    if (
      !browserSupportsSpeechRecognition ||
      (options && options.autoStart === false)
    ) {
      listening = false;
    } else {
      recognition.start();
      listening = true;
    }
    let pauseAfterDisconnect = false;
    let interimTranscript = "";
    let finalTranscript = "";
    let commands = [];
    let hasCommand = false;

    return class SpeechRecognitionContainer extends Component {
      constructor(props) {
        super(props);

        if (browserSupportsSpeechRecognition) {
          recognition.continuous = options.continuous !== false;
          recognition.interimResults = true;
          recognition.onresult = this.updateTranscript.bind(this);
          recognition.onend = this.onRecognitionDisconnect.bind(this);
        }

        this.state = {
          interimTranscript,
          finalTranscript,
          listening,
          commands: [],
          hasCommand: false,
          suggestionListNumber: null
        };
      }

      disconnect = disconnectType => {
        if (recognition) {
          switch (disconnectType) {
            case "ABORT":
              pauseAfterDisconnect = true;
              recognition.abort();
              break;
            case "RESET":
              pauseAfterDisconnect = false;
              recognition.abort();
              break;
            case "STOP":
            default:
              pauseAfterDisconnect = true;
              recognition.stop();
          }
        }
      };

      onRecognitionDisconnect() {
        listening = false;
        if (pauseAfterDisconnect) {
          this.setState({ listening });
        } else if (recognition) {
          if (recognition.continuous) {
            this.startListening();
          } else {
            this.setState({ listening });
          }
        }
        pauseAfterDisconnect = false;
      }

      updateSplitFinalTranscriptCommands(toChangeScript) {
        console.log(toChangeScript);
        toChangeScript = toChangeScript.substring(0, toChangeScript.length - 1);
        return toChangeScript;
      }

      containsCommands(interimWord) {
        return interimWord.endsWith("map");
      }

      updateTranscript(event) {
        interimTranscript = "";
        let suggestionListNumber = null;
        let hasCommand = false;
        if (this.state.hasCommand) {
          console.log("I have command");
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              if (event.results[i][0].transcript.trim().endsWith("done")) {
                console.log(
                  "It should now listen to stuff Let us set the word"
                );
                hasCommand = false;
              } else if (
                event.results[i][0].transcript.trim().endsWith("1") ||
                event.results[i][0].transcript.trim().endsWith("one")
              ) {
                console.log("NOW I AM HERRRRRRRRRRRRRRRR with command 1");
                suggestionListNumber = 1;
                hasCommand = true;
              } else {
                hasCommand = true;
              }
            } else {
              // Even interim results has some command then execute it.
              hasCommand = true;
            }
          }
        } else {
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              let ifContainsMap = event.results[i][0].transcript
                .trim()
                .endsWith("map");
              if (ifContainsMap) {
                commands.push("map");
                hasCommand = true;
              }
              finalTranscript = this.concatTranscripts(
                finalTranscript,
                ifContainsMap
                  ? event.results[i][0].transcript.substring(
                      0,
                      event.results[i][0].transcript.lastIndexOf(" ")
                    )
                  : event.results[i][0].transcript
              );
            } else {
              interimTranscript = this.concatTranscripts(
                interimTranscript,
                this.containsCommands(event.results[i][0].transcript.trim())
                  ? ""
                  : event.results[i][0].transcript
              );
            }
          }
        }
        // updateFinalTranscriptIfCommand
        // transcript = this.updateSplitFinalTranscriptCommands(transcript);

        // check for commands
        // Will have to determine if command mode keeps on becoming active
        // Will have to determine if command mode keeps on becoming active
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAA", finalTranscript);
        console.log("BBBBBBBBBBBBBBBBBBBBbBBBB", interimTranscript);
        this.setState({
          finalTranscript,
          interimTranscript,
          commands,
          hasCommand,
          suggestionListNumber
        });
      }

      concatTranscripts(...transcriptParts) {
        return transcriptParts
          .map(t => t.trim())
          .join(" ")
          .trim();
      }

      resetTranscript = () => {
        interimTranscript = "";
        finalTranscript = "";
        this.disconnect("RESET");
        this.setState({ interimTranscript, finalTranscript });
      };

      startListening = () => {
        if (recognition && !listening) {
          if (!recognition.continuous) {
            this.resetTranscript();
          }
          try {
            recognition.start();
          } catch (DOMException) {
            // Tried to start recognition after it has already started - safe to swallow this error
          }
          listening = true;
          this.setState({ listening });
        }
      };

      abortListening = () => {
        listening = false;
        this.setState({ listening });
        this.disconnect("ABORT");
      };

      stopListening = () => {
        listening = false;
        this.setState({ listening });
        this.disconnect("STOP");
      };

      render() {
        let transcript = this.concatTranscripts(
          finalTranscript,
          interimTranscript
        );

        let transcriptObject = [];
        for (const [index, word] of transcript.split(" ").entries()) {
          let showSuggestionBool =
            this.state.suggestionListNumber &&
            index === this.state.suggestionListNumber
              ? true
              : false;
          // if (this.state.suggestionListNumber === 1) {
          //   console.log("U+ AMMMMMMMMMMMMSAAAAAAAAAAAAAAAAa");
          //   showSuggestionBool = true;
          // } else {
          //   showSuggestionBool = false;
          // }
          transcriptObject.push({
            text: word,
            showSuggestion: showSuggestionBool
          });
        }

        return (
          <WrappedComponent
            resetTranscript={this.resetTranscript}
            startListening={this.startListening}
            abortListening={this.abortListening}
            stopListening={this.stopListening}
            transcript={transcript}
            transcriptObject={transcriptObject}
            recognition={recognition}
            browserSupportsSpeechRecognition={browserSupportsSpeechRecognition}
            {...this.state}
            {...this.props}
          />
        );
      }
    };
  };

  if (typeof options === "function") {
    return SpeechRecognitionInner(options);
  } else {
    return SpeechRecognitionInner;
  }
}
