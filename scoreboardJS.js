var submitBtn = document.getElementById("submitButton");
var scoreboardDisplay = document.getElementById("scoreboardList");
var score = localStorage.getItem("currentscore");
document.getElementById("yourScoreDisplay").textContent = score;
var scoreboardDisplay = document.getElementById("scoreboardList");



function submitScore() {
    var scoreboardHistory = localStorage.getItem("scoreboardHistory");
    if (scoreboardHistory == null) {
        scoreboardHistory = {}
    } else {
        scoreboardHistory = JSON.parse(scoreboardHistory);
    }
    var userInitials = document.getElementById("initialsDisplay").value;
    scoreboardHistory[userInitials] = score;
    var scoreboardJSON = JSON.stringify(scoreboardHistory);
    localStorage.setItem("scoreboardHistory", scoreboardJSON);
    var keyList = Object.keys(scoreboardHistory);
    for (i in keyList){
        scoreboardDisplay.innerHTML += keyList[i] + ' : ' + scoreboardHistory[keyList[i]] + '<br/>'
    }
}

submitBtn.addEventListener("click", submitScore)
