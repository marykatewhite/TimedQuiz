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
    answer: "Sahara"
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
    answer: "Krona"
  },

];


var startButton = document.querySelector("#startBtn");
var startingTime = document.querySelector("#timerText")
var remainingTime = 75
var interval;
var userScore = 0;
var i = 0
var finishTime = 0;




// Quiz code


function nextQuestion(event) {
  console.log("Clicked on: " + event.target.id);
  if (event.target.textContent == questions[i].answer) {
    console.log("Correct!");
    i++;
    questionDisplay();
  }
  else {
    console.log("Wrong!");
    remainingTime -= 5;
  }
}



function questionDisplay() {
  startingTime.textContent = remainingTime

  if (i === questions.length) {
    document.getElementById("questionText").textContent = "";
    document.getElementById("OptionA").textContent = "";
    document.getElementById("OptionB").textContent = "";
    document.getElementById("OptionC").textContent = "";
    document.getElementById("OptionA").textContent = "";
    alert("All done!");
    function storeScore() {
      localStorage.setItem("currentscore", remainingTime);
    }
    storeScore();
    window.location.href = "scoreboard.html";
    document.getElementById("yourScoreDisplay").textContent = localStorage.getItem(remainingTime);
  }

  else {
    document.getElementById("questionText").innerHTML = questions[i].title;
    document.getElementById("OptionA").innerHTML = questions[i].choices[0];
    document.getElementById("OptionB").innerHTML = questions[i].choices[1];
    document.getElementById("OptionC").innerHTML = questions[i].choices[2];
    document.getElementById("OptionD").innerHTML = questions[i].choices[3];
  }

  document.getElementById("OptionA").addEventListener("click", nextQuestion);
  document.getElementById("OptionB").addEventListener("click", nextQuestion);
  document.getElementById("OptionC").addEventListener("click", nextQuestion);
  document.getElementById("OptionD").addEventListener("click", nextQuestion);

  console.log(remainingTime);

}

function countdown() {
  startButton.style.display = "none";

  interval = setInterval(function () {
    remainingTime--;

    if (remainingTime <= 0) {
      clearInterval(interval);
      alert("Time's up!");
    }
    startingTime.textContent = remainingTime;
  }, 1000)
}


startButton.addEventListener("click", countdown)
startButton.addEventListener("click", questionDisplay)

