const questionObj =
{
  category: 'Food & Drink',
  id: 'qa-1',
  correctAnswer: 'Three',
  options: ['Two', 'Three ', 'Four', 'Five'],
  question:
    "How many pieces of bun are in a Mcdonald's Big Mac?",
};


const { correctAnswer, question, options } = questionObj;

const eleQuestion = document.getElementById("question");
const eleOptions = document.getElementById("options");

// --display question
eleQuestion.textContent = question;

// --display options
options.forEach((option) => {
  const newOptionEle = document.createElement('button');
  newOptionEle.textContent = option;
  eleOptions.appendChild(newOptionEle);
});



