// The code given below is for one object refactor the code it for using the JSON Data.
let questions = [
  {
    category: 'Food & Drink 01',
    id: 'qa-1',
    correctAnswer: 'Three',
    options: ['Two', 'Three', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac? 01",
  },
  {
    category: 'Food & Drink 02',
    id: 'qa-2',
    correctAnswer: 'Three',
    options: ['Two', 'Three', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac? 02",
  },
  {
    category: 'Food & Drink 03',
    id: 'qa-3',
    correctAnswer: 'Three',
    options: ['Two', 'Three', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac? 03",
  },
  {
    category: 'Food & Drink 04',
    id: 'qa-4',
    correctAnswer: 'Three',
    options: ['Two', 'Three', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac? 04",
  }
];

// const questionObj =
// {
//   category: 'Food & Drink',
//   id: 'qa-1',
//   correctAnswer: 'Three',
//   options: ['Two', 'Three', 'Four', 'Five'],
//   question:
//     "How many pieces of bun are in a Mcdonald's Big Mac?",
// };

const eleQuestion = document.getElementById("question");
const eleOptions = document.getElementById("options");
const eleScore = document.getElementById("score");

let scores = {};
let currntQuestion = 0;
questionDisplay(questions[currntQuestion], questions.length - 1 == currntQuestion);

// --display question
function questionDisplay(questionObj, lastQuestion) {

  eleOptions.textContent = '';
  const { id, correctAnswer, question, options } = questionObj;
  eleQuestion.textContent = question;

  // --display options
  sufflingTheOptions(options);
  options.forEach((option) => {
    const newOptionEle = document.createElement('button');
    newOptionEle.textContent = option;
    eleOptions.appendChild(newOptionEle);
    newOptionEle.addEventListener('click', function (e) {
      updateScore(option == correctAnswer, id);
    });
  });

  /// --scores calculation and update
  eleScore.textContent = `Score: ${Object.values(scores).reduce((acc, score) => acc + score, 0)}`;

  function updateScore(isCorrect) {
    scores[id] = isCorrect ? 1 : -0.25;
    const score = Object.values(scores).reduce((acc, score) => acc + score, 0);

    eleScore.textContent = `Score: ${score}`;

    // after last question
    if (lastQuestion === true) {
      eleQuestion.textContent = "Quiz Completed!!!";
      eleOptions.textContent = '';
    } else {
      currntQuestion += 1;
      questionDisplay(questions[currntQuestion], questions.length - 1 == currntQuestion);
    }
  }
}

/// --suffling the options
function sufflingTheOptions(options) {
  // [options[0], options[3]] = [options[3], options[0]];
  for (var i = options.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * i);
    [options[i], options[j]] = [options[j], options[i]];
  }
}

