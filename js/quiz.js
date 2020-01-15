var questions = [
  {   question: 'How many states are in the United States?',
      answer: 50
  },
  {   question: 'How many licks does it take to get to the center of a Toosie Pop?',
      answer: 3
  },
  {   question: 'What is the meaning of life?',
      answer: 42
  }
];

var correctAnswers = 0;
var question;
var answer;
var response;

function print(message) {
  document.write(message);
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i].question;
  answer = questions[i].answer;
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
  } 
}

html = "You got " + correctAnswers + " question(s) right."
print(html);
