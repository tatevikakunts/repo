function Question(id, text, answers) {
  this.id = id;
  this.text = text;
  this.answers = answers;
}

function Answer(id, text, isTrue) {
  this.id = id;
  this.text = text;
  this.isTrue = isTrue;
}
const getAnswers = () => {
  const answers = [];
  for (let i = 0; i < 4; i++) {
    const ans = new Answer(i, `Answer: ${i}`, i === 2 ? true : false);
    answers.push(ans);
  }
  return answers;
};

const getQuestions = () => {
  const questions = [];
  for (let i = 0; i < 10; i++) {
    const question = new Question(i, `Question ${i}`, getAnswers());
    questions.push(question);
  }
  return questions;
};

const renderQuestionInterface = (questionInd) => {
  document.querySelector("#app").innerHTML = questionTemplate(
    quiz[questionInd]
  );
};

const questionTemplate = (question) => {
  return `
  <div>
  <h3>${question.text}</h3>
  <div class ="answers" id = "question_${question.id}">${renderAnswers(
    question.answers
  )}</div>
  </div>
  `;
};

const renderAnswers = (answers) => {
  let output = "";
  answers.forEach((answer) => (output += `${answerTemplate(answer)}`));
  return output;
};
const answerTemplate = (answer) => {
  return `<div id = "answer_${answer.id}"><span>${answer.text}</span></div>`;
};

const addAnswerListener = () => {
  const answerButtons = document.querySelectorAll(".answers > div");
  for (btn of answerButtons) {
    btn.addEventListener("click", answerClickHandler);
  }
};
const answerClickHandler = (event) => {
  event.preventDefault();
  const answerId = +event.currentTarget.id.split("_")[1];
  const parentElement = event.currenTarget.parentNode;
  const question = quiz.filter(
    (element) => element.id === +parentElement.id.split("_")[1]
  )[0];
  // const findId = question.answers[findId]((answer) => answer.Id === answerId);
  const answer = question.answers.filter((answ) => answ.id === answerId)[0];

  showResult(answer.isTrue);
  isAnswered = true;
};
const showResult = (isTrue) => {
  result += isTrue ? 1 : 0;
};

const chooseQuestion = (ind) => {
  renderQuestionInterface(ind);
  addAnswerListener();
};

const showFinish = () => {
  document.querySelector("#app").innerHTML = `Correct answers - ${result}`;
};

const main = () => {
  let interval = setInterval(() => {
    if (questionIndex === quiz.length && isAnswered) {
      showFinish();
      clearInterval(interval);
      return;
    }
    if (isAnswered) {
      chooseQuestion(questionIndex++);
      isAnswered = false;
    }
  }, 1000);
};

let result = 0;
let questionIndex = 0;
let isFinished = false;
let isAnswered = true;

const quiz = getQuestions();
main();
