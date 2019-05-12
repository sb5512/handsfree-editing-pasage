import commandsENUM from "../components/tasks/freetextformation/commandENUM";

class Utils {
  static getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  static containsCommand(transcriptArr) {
    const lastText = transcriptArr[transcriptArr.length - 1];

    switch (lastText) {
      case commandsENUM.MAP:
        return { command: "map", isCommand: true };

      default:
        return { command: "null", isCommand: false };
    }
  }
}

// module.exports = Utils;
export default Utils;
