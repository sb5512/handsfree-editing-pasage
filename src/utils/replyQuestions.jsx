const replyQuestions = `What day comes after Sunday?
What is the colour of the snow?`;

function getReplyQuestions(index) {
  let questionsArr = replyQuestions.split("\n");
  return questionsArr[index % questionsArr.length];
}

module.exports = getReplyQuestions;
