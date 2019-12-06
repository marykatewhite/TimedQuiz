var questions = [

  {
    title: "What is the body of water that borders Greece, Turkey and Southern Italy?",
    choices: ["Red Sea", "Mediterranean Sea", "Aegean Sea", "Black Sea"],
    answer: "Aegean Sea"
  },

  {
    title: "Which European country was reunified in 1990?",
    choices: ["Austria", "Switzerland", "Germany", "Russia"],
    answer: "Germany"
  },

  {
    title: "Which Desert dominates a large area of Northern Africa?",
    choices: ["Kalahari", "Sahara", "Gobi", "Atacama"],
    answer: "Gobi"
  },

  {
    title: "What is the formal language of Libya?",
    choices: ["English", "Spanish", "Arabic", "Dutch"],
    answer: "Arabic"
  },

  {
    title: "The currents of which Ocean create the El Nino effect?",
    choices: ["Pacific", "Indian", "Atlantic", "Arctic"],
    answer: "Pacific"
  },

  {
    title: "In which Canadian province is Montreal located?",
    choices: ["Vancouver", "Ontario", "Quebec", "Nova Scotia"],
    answer: "Quebec"
  },

  {
    title: "What is the capital of South Korea?",
    choices: ["Tokyo", "Beijing", "Seoul", "Phnom Penh"],
    answer: "Seoul"
  },

  {
    title: "How many states starting with the letter A in the USA?",
    choices: ["3", "4", "5", "7"],
    answer: "4"
  },

  {
    title: "How many countries are in South America?",
    choices: ["20", "15", "14", "12"],
    answer: "15"
  },

  {
    title: "What is the currency of Sweden?",
    choices: ["Euro", "Krona", "Franc", "Pound"],
    answer: " "
  },

];

var timerEl = document.querySelector("#timerText");
var startButton = document.querySelector("#startBtn");
var startingTime = document.querySelector("#timerText")
var remainingTime = 75
var interval;
var userScore = 0;

startingTime.textContent = remainingTime
startButton.addEventListener("click", countdown)


function countdown() {

  interval = setInterval(function () {
    remainingTime--;

    if (remainingTime <= 0) {
      clearInterval(interval);
      alert("Time's up!");
    }
    timerEl.textContent = remainingTime;
  }, 1000)
}

var i = 0


function questionDisplay() {

  if (i === questions.length) {
    document.getElementById("questionText").textContent = "";
    document.getElementById("OptionA").textContent = "";
    document.getElementById("OptionB").textContent = "";
    document.getElementById("OptionC").textContent = "";
    document.getElementById("OptionA").textContent = "";
    return;
  }

  else {
    document.getElementById("questionText").innerHTML = questions[i].title[0];
    document.getElementById("OptionA").innerHTML = questions[i].choices[0];
    document.getElementById("OptionB").innerHTML = questions[i].choices[1];
    document.getElementById("OptionC").innerHTML = questions[i].choices[2];
    document.getElementById("OptionD").innerHTML = questions[i].choices[3];
  }

}

document.getElementById("OptionA").addEventListener("click", nextQuestion)
document.getElementById("OptionB").addEventListener("click", nextQuestion)
document.getElementById("OptionC").addEventListener("click", nextQuestion)
document.getElementById("OptionD").addEventListener("click", nextQuestion)


var userRightWrong;

function nextQuestion(event) {
  if (event.target.textContent === questions[i].answer) {
    userRightWrong = "Correct"
  }
  else {
    userRightWrong = "Incorrect"
    remainingTime -= 5
  }

  document.getElementById("answer").textContent = userRightWrong;
  i++;
  showQuestions();
}

// so all of this down here is stuff i started to write and had no idea if it was right and i guess we will never know


// var questyDisplay = document.getElementById("quizBody");

// document.getElementById("optionA")

// var lastQuestion = questions.length - 1;
// var currentQuestion = questions[0]

// var optionA = document.getElementById("OptionA");
// var optionB = document.getElementById("OptionB");
// var optionC = document.getElementById("OptionC");
// var optionD = document.getElementById("OptionA");

// function displayQuestion(){  
//   question.innerHTML = "<p>"+ currentQuestion +"</p>";
//   optionA.innerHTML = questions.choices[0];
//   optionB.innerHTML = questions.choices[1];
//   optionB.innerHTML = questions.choice[2];
//   optionC.innerHTML = questions.choice[3];
// }





