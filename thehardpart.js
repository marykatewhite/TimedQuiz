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
var remainingTime = 75

var userScore = 0;

startButton.addEventListener("click", countdown());

function countdown() {
  
  setInterval(function() {
    remainingTime -= 1;
    timerEl.innerHTML = remainingTime;
    }, 1000);
    if (remainingTime = 0) {
      alert("Time's up!")
    }
};

var questyDisplay = document.getElementById("quizBody");

var lastQuestion = questions.length - 1;
var currentQuestion = questions[0]


function displayQuestion(){  
  question.innerHTML = "<p>"+ currentQuestion +"</p>";
  optionA.innerHTML = questions.choices[0];
  optionB.innerHTML = questions.choices[1];
  optionB.innerHTML = questions.choice[2];
  optionC.innerHTML = questions.choice[3];
}

// function clickHandler() {
//   if 
// }





