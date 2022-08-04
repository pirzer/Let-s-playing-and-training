/* ----- Pages & Container to display/hide/set attribute ----- */
const getStarted = document.querySelector(".get-started");
const mainQuiz = document.querySelector(".main-quiz");
const questionAnswers = document.querySelector(".qa-container");
const finalScore = document.querySelector(".final-score");
const timerContainer = document.querySelector(".timer");
const progressBar = document.querySelector(".progress-bar");
/* ----- Buttons ----- */
const startButton = document.querySelector("#start-btn");
const optionButtons = document.querySelectorAll(".option");
const checkButton = document.querySelector(".check-answer");
const nextButton = document.querySelector(".next-question");
const finishButton = document.querySelector(".finish-quiz");
const restartButton = document.querySelector("#restart-btn");
const quitButton = document.querySelectorAll(".quit-quiz");
/* ----- Variables to manipulate innerText ----- */
let myScore = document.querySelector(".my-score");
let totalScore = document.querySelector(".total-score");
let scoreText = document.querySelector(".display-score h3");
let currentQuestion = document.querySelector(".current-question");
let totalQuestions = document.querySelector(".total-questions");
let timer = document.querySelector(".timer span");
/* ----- Initial declaration ----- */
let displayQuiz;
let timerInterval;
let timeUp = document.createElement("h2");
let calculateProgress;
let selectedButton;
let selectedButtonIndex;
let correctAnswerButton;
let correctButtonIndex;
let scorePercent;
/* ----- Quiz questions ----- */
const quizes = [
    {
      question: "Who is responsible for ethics in an organisation?",
      options: ["Employees", "Employers", "HR", "All of the Above"],
      answers: 3, 
    },
    {
      question: "Ethics & Law overlap. This is called in Business as…",
      options: ["Grey Area", "a Drucker Principle: Red Area", "a Deming Principle: Yellow Area", "a Freud Principle: Dark Area"],
      answers: 0,
    },
    {
      question: "Ethical character traits include integrity, honesty, and justice",
      options: ["True", "Integrity & Honesty only", "Honesty & Justice only", "Justice and Integrity only"],
      answers: 0,
    },
    {
      question: "Which of the following is not the responsibilities of an Employee?",
      options: ["Comply with the Code", "Make Declaration of Compliance to the Code", "Continously promote high standard of business conduct and ethics", "Keep abreast with latest update"],
      answers: 2,
    },
    {
      question: "What is the definition of ethics?",
      options: ["A set of classroom laws", "Telling the truth 55% of the time", "A set of moral principles", "A set of criminal laws"],
      answers: 3,
    },
];



/* Display Nickname to the QUIZ */
function submitForm(e) {
    e.preventDefault();
    let Name = document.forms["form"]["nickname"].value;

    sessionStorage.setItem("name",Name);
    location.href = "index_quiz.html";

}
/* Nickname details to the QUIZ */ 


/* ----- Functions to manipulate styles -----*/
const disableButton = (button) => {
  // Make button disabled by adding a disabled attribute to the button
  button.setAttribute("disabled", "");
  // Set cursor style back to default
  button.style.cursor = "auto";
}

const enableButton = (button) => {
  // Enable the button by removing the disabled attribute from the button
  button.removeAttribute("disabled", ""); 
  // Set cursor style to pointer
  button.style.cursor = "pointer";
};

const removeBackgroundStyle = () => {
  // Remove background color of every option button
  optionButtons.forEach(eachButton => {
    eachButton.style.backgroundColor = "";
  });
};

const optionClicked = (button) => {
  // Set the selected button to be the option that is clicked
  selectedButton = button;
  // Ensure all option buttons' background color are removed before setting new one below
  removeBackgroundStyle();
  // When any option button is clicked, change button to this color:
  button.style.backgroundColor = "rgba(242, 44, 173, 0.71)"; //"color enables when is clicked on the choice
  // When any option is clicked, enable the check answer button
  enableButton(checkButton);
}

/* ----- Functions to set Timer -----*/
const insertTimerText = () => {
  // When timer countdown to 0, ensure the text shows 0
  timer.innerText = 0;
  // Display a 'Times up!' text
  timeUp.textContent = 'Hey!!!!  Times up!';
  // Insert the text before the question and answer/options section
  questionAnswers.insertAdjacentElement('beforebegin', timeUp);
  // Align the text to center
  timeUp.style.textAlign = "center";
  // Give this color to the text when times up
  timeUp.style.color = "#efef39";
  // Give this color background to the text when times up
  timeUp.style.backgroundColor = "rgba(255, 32, 32 , 0.9)";
  // Define font-size to the text when times up
  timeUp.style.fontSize = "45px";
}

const timerCountdown = () => {
  // Every 1000 milliseconds/ 1 second interval, execute this:
  timerInterval = setInterval(() => {
    // If time left is more than 0 second, execute this:
    if(timer.textContent > 0) {
      // Time left should reduce by 1
      timer.innerText--;
    // If time left is less or equal to 0 second, execute this:
    } else if (timer.textContent <= 0) {
      optionButtons.forEach(eachButton => {
        // Disable all option buttons
        disableButton(eachButton);
        // Display correct answer
        displayAnswer();
        // Hide the check answer button and display next question button
        checkButton.style.display ="none";
        nextButton.style.display ="inline";
      })
      // If nothing is selected after time is up execute this:
      if(selectedButton == undefined) {
        // If it is the last question, execute this:
        if(currentQuestion.textContent === totalQuestions.textContent) {
          // Hide next question button and display finish quiz button
          nextButton.style.display ="none";
          finishButton.style.display="inline";
        } else {
          // otherwise, if it's not the last question, display next quesiton button
          nextButton.style.display = "inline";
        }
      }
      insertTimerText();
      // Stop the timer
      clearInterval(timerInterval);
    }
  }, 1000)
}

/* ----- Function to update Progress Bar -----*/
const updateProgressBar = () => {
  // Progress bar 'value' is 1 less than current question because, eg: when you're on question 2, you have only completed 1 question.
  calculateProgress = ((currentQuestion.textContent - 1) / totalQuestions.textContent)*100;
  // Update the progress bar 'value' accordingly
  progressBar.setAttribute("value", calculateProgress);
}

/* ----- Logical process functions -----*/
const startQuiz = () => {
  // Hide the get started button, and display timer
  getStarted.style.display ="none";
  timerContainer.style.display = "inline";
  // Disable check answer button as nothing is selected
  disableButton(checkButton);
  // Set the total questions to be the quiz questions' length
  totalQuestions.innerText = quizes.length;
  // Display the main quiz container
  mainQuiz.style.display = "inline";
  // Start timer countdown
  timerCountdown();
  // Set question to be the first question in the quizes array
  question.innerText = quizes[0].question;
  // Loop through each button and display the options text in correct order
  for(i = 0; i < optionButtons.length; i++) {
    optionButtons.item(i).innerText = quizes[0].options[i]
  }
  // increase the current question count from 0 to 1
  currentQuestion.innerText++;
}

//   if(currentQuestion.textContent >= quizes.length) {

const checkAnswer = () => {
  // If current question is the last question, execute this:
  if(currentQuestion.textContent >= quizes.length) {
    // Hide next question and check answer button, and display finish quiz button
    nextButton.style.display="none"
    checkButton.style.display="none"
    finishButton.style.display = "inline"
  } else {
    // If not the last question, hide check answer button and display next button
    checkButton.style.display = "none";
    nextButton.style.display="inline";
  };
  selectedButton.style.backgroundColor = "rgba(255, 0, 78, 0.99)"   /* Wrong answer */
  // Display answer
  displayAnswer();
  // Ensure thet imer countdown is stopped
  clearInterval(timerInterval);
  // Add to score depending on if answered correctly
  addScore();
  // Disable each option button
  optionButtons.forEach(eachButton => {
    disableButton(eachButton)
  });
};


const displayAnswer = () => {
  // Find out the correct answer button where it matches answer in quizes array
  correctAnswerButton = document.querySelector(`[data-index="${quizes[currentQuestion.textContent-1].answers}"]`)
  // Find the correct answer button's index
  correctButtonIndex = quizes[currentQuestion.textContent-1].answers
  // Change the correct answer button to this color
  correctAnswerButton.style.backgroundColor = "rgb(68, 240, 68)"; /* Correct answer  */
}

const addScore = () => {
  // Find out the index of the selected button
  selectedButtonIndex = selectedButton.getAttribute("data-index")
  // If the selected button is the correct answer, execute this:
  if(selectedButtonIndex == correctButtonIndex) {
    // Increase the score by 1 each time
    myScore.innerText++;
    // Find out the score percentage according to score obtained
    scorePercent = (myScore.textContent / totalQuestions.textContent) * 100
  // If it's not the correct answer, then just leave it as it is
  } else {
    myScore;
  }
  // If score percentage is less than 70
  if(scorePercent < 80 || myScore.textContent == 0) {
    // Display text 'Better luck next time!'
    scoreText.innerText = 'It does not look promesing, please get in touch with us soon! - Performance below 80%!!'}
// testing
      if(scorePercent <= 40 || myScore.textContent == 0) {
    // Display text the following message, if the Percentage below 40%
    scoreText.innerText = 'Our Experts will contact you ASAP, you are in Throubles! - Performance below 40%!!'}
// testing
      
      
// If score percentage is more than or equal to 80%, then show text below
   else {
    scoreText.innerText = "Fantastic, Keep your ethic values up! Performance above 80%!!"
  }
};

const nextQuestion = () => {
  // Display the main quiz content
  mainQuiz.style.display = "inline";
  // Remove the 'Times Up!' text
  timeUp.textContent = "";
  // Reset time left to 15
  timer.innerText = 8; //15 second to 10, or 8 seconds
  // hide the next question button and display check answer button
  nextButton.style.display = "none";
  checkButton.style.display = "inline";
  // Increase current question by 1 everytime
  currentQuestion.innerText++;
  // Disable check answer button
  disableButton(checkButton);
  // Update progress bar accordingly
  updateProgressBar();
  // Start timer countdown
  timerCountdown();
  // Set question to be the correct question form the quizes array
  question.innerText = quizes[currentQuestion.textContent - 1].question;
  // Change all option buttons to the appropriate text
  for(i = 0; i < optionButtons.length; i++) {
    optionButtons.item(i).innerText = quizes[currentQuestion.textContent - 1].options[i]
  }
};

const restartQuiz = () => {
  // Reset score and current question to 0, time left to 15
  myScore.innerText = 0;
  currentQuestion.innerText = 0;
  timer.innerText = 8; //15 second to 10, or 8 seconds
  // Enable each option button, and remove backgound color
  optionButtons.forEach(eachButton => {
    enableButton(eachButton)
    removeBackgroundStyle(eachButton)
  });
  // Display check answer button, hide finish quiz button and final score content
  checkButton.style.display = "inline";
  finishButton.style.display="none";
  finalScore.style.display="none";
  // Update progress bar accordingly and start quiz
  updateProgressBar();
  startQuiz();
}


/* ----- Buttons event listeners -----*/
// When get started button is clicked, execute this:
startButton.addEventListener("click", startQuiz);

// When check answer button is clicked, execute this:
checkButton.addEventListener("click", checkAnswer);

// When next question button is clicked, execute this:
nextButton.addEventListener("click", () => {
  // Go to the next question, remove background color, and enable all options button
  nextQuestion();
  removeBackgroundStyle();
  optionButtons.forEach(eachButton => {
    enableButton(eachButton)
  })
});

// When finish quiz button is clicked
finishButton.addEventListener("click", () => {
  // Remove 'Time up!' text
  timeUp.textContent = '';
  // Display final score content, and hide main quiz content
  finalScore.style.display = 'flex';
  mainQuiz.style.display = "none";
  // Total score should be same as the total available questions
  totalScore.innerText = totalQuestions.textContent;
  // Stop timer
  clearInterval(timerInterval);
 })

// When restart button is clicked, execute this:
restartButton.addEventListener("click", restartQuiz);

// Loop over quit quiz buttons (There are 2)
quitButton.forEach(button => {
  // When quit quiz button is clicked, execute this:
  button.addEventListener("click", () => {
    // Display get started content, hide main quiz and final score content
    getStarted.style.display ="flex";
    mainQuiz.style.display="none";
    finalScore.style.display="none";
    // Refresh page and go to main website
    location.href = "index_nickname2.html";
})
});

