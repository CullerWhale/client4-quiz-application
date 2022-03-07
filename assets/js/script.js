
var startEl = document.querySelector("#start");
//TIMER
// function setCounterText() {
//   countEl.textContent = count;
// }
timerEl = document.getElementById('countdown');
var timeLeft = 75;
// Want: a timer that counts down from 75
function countDown() {
  // var timeLeft = 75;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      // displayMessage();
    }
  }, 1000);
}

var questions = document.querySelector("#question");
var possibleAnswers = document.querySelector("#answers");
var x = 0;


function quizQuestions() {
  var currentQuestion = document.createElement('div');
  currentQuestion.textContent = myQuestions[x].question;
  questions.appendChild(currentQuestion);

  for (var i = 0; i < myQuestions[x].answers.length; i++) {
    var answers = document.createElement('button');
    answers.textContent = myQuestions[x].answers[i];
    possibleAnswers.appendChild(answers);
    answers.addEventListener("click", function () {
      console.log(answers.textContent);
      if (answers.textContent == myQuestions[x].correctAnswer) {
        questions.innerHTML = '';
        possibleAnswers.innerHTML = '';
        x++;
        timerEl.textContent = timeLeft;
        quizQuestions();
      } else {
          timeLeft -= 20;
          timerEl.textContent = timeLeft;
          x++;
          questions.innerHTML = '';
          possibleAnswers.innerHTML = '';
          quizQuestions();
      }
    })
  }
}




startEl.addEventListener("click", function () {
  // count++;
  // clearInterval(mainEl);
  countDown();
  quizQuestions();
});


// Quiz Question bank


const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: [
      "Douglas Crockford",
      "Sheryl Sandberg",
      "Brendan Eich",
      "Volodymyr Zelenskyy"
    ],
    correctAnswer: "Brendan Eich"
  },

  {
    question: "Which one of these is a JavaScript package manager?",
    answers: [
      "npm",
      "Node.js",
      "TypeScript",
      "Solidity"
    ],
    correctAnswer: "npm"
  },

  {
    question: "Which tool can you use to ensure code quality?",
    answers: [
      "Angular",
      "jQuery",
      "RequireJS",
      "ESLint"
    ],
    correctAnswer: "ESLint"
  }

]

