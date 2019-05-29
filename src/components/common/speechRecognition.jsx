import React, { Component } from "react";
import TextToNumbers from "../../utils/textToNumbers";
import Utils from "../../utils/Utils";

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
          spellMode: false,
          oldTranscript: "",
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
        return interimWord.endsWith("map") || interimWord.endsWith("done");
      }

      updateTranscript(event) {
        // state hascommand true bhayo bhane hami command mode ma cham
        interimTranscript = "";
        let suggestionListNumber = null;
        let hasCommand = false;
        let spellMode = this.state.spellMode;
        let oldTranscript = this.state.oldTranscript;

        /**
         * Command is already set to "map". Now we here see what after we say "map" command
         */
        if (this.state.hasCommand) {
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            let currentTranscription = event.results[i][0].transcript.trim();
            let objIsNumberAndVal = Utils.checkStringIsNumberWordOrNumber(
              currentTranscription
            );

            // get final transcript here
            if (event.results[i].isFinal) {
              if (currentTranscription.endsWith("done")) {
                spellMode = false;
                hasCommand = false;
                finalTranscript = this.state.oldTranscript;
              } else if (currentTranscription.endsWith("spell")) {
                // This is where we will check if selection mode is on and "spell word is in the transcript"
                console.log(
                  "NOWWWWWWWWWWWW I AMMMMMMMMMMM IN SPell MODEEEEEEEEE"
                );
                // this.resetTranscript();
                hasCommand = false; // Still command mode
                spellMode = true;
                oldTranscript = this.state.finalTranscript;
              } else if (
                // Here we check if the transcript is a number TODOOOOOOOO for now only one
                objIsNumberAndVal.check
              ) {
                suggestionListNumber = objIsNumberAndVal.value;
                hasCommand = true;
                spellMode = false;
              } else {
                hasCommand = true;
                spellMode = this.state.spellMode;
              }
            } else {
              // Even interim results has some command then execute it.
              hasCommand = true;
              spellMode = this.state.spellMode;
            }
          }
        } else {
          /**
           * NO COMMAND MODE - Command is "map" begins
           */
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              let ifContainsMap = event.results[i][0].transcript
                .trim()
                .endsWith("map");

              if (ifContainsMap) {
                commands.push("map");
                hasCommand = true;
              }
              // If we say map and go to spell mode and now in that state we say "a" "b" "c" and say done then we come here
              if (
                this.state.spellMode &&
                event.results[i][0].transcript.trim().endsWith("done")
              ) {
                spellMode = false;
                finalTranscript = this.state.oldTranscript;
              }
              // finalscript k bhayo ta
              else {
                finalTranscript = this.concatTranscripts(
                  finalTranscript,
                  ifContainsMap
                    ? event.results[i][0].transcript.substring(
                        0,
                        event.results[i][0].transcript.lastIndexOf(" ")
                      )
                    : event.results[i][0].transcript
                );
              }
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
        this.setState({
          finalTranscript,
          interimTranscript,
          commands,
          hasCommand,
          suggestionListNumber,
          spellMode,
          oldTranscript
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

        console.log(
          "SUGGESTION NUMBER FOR WORD IS : ",
          this.state.suggestionListNumber
        );
        /** OBJECT CREATION FOR EACH WORD BEGINS */
        let transcriptObject = [];
        if (this.state.spellMode) {
          for (const [index, word] of transcript.split(" ").entries()) {
            if (index >= this.state.oldTranscript.split(" ").length) {
              let showSuggestionBool =
                this.state.suggestionListNumber &&
                index === this.state.suggestionListNumber
                  ? true
                  : false;
              transcriptObject.push({
                text: word,
                showSuggestion: showSuggestionBool,
                spellMode: this.state.spellMode
              });
            }
          }
        } else {
          for (const [index, word] of transcript.split(" ").entries()) {
            let showSuggestionBool =
              this.state.suggestionListNumber &&
              index === this.state.suggestionListNumber
                ? true
                : false;
            transcriptObject.push({
              text: word,
              showSuggestion: showSuggestionBool,
              spellMode: this.state.spellMode
            });
          }
        }
        /** OBJECT CREATION FOR EACH WORD ENDS */

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
