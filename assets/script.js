//global variables
const start = document.querySelector("#start-btn");

const quiz = document.querySelector("#quiz");

const question = document.querySelector("#question");

const choiceA = document.querySelector("#A");

const choiceB = document.querySelector("#B");

const choiceC = document.querySelector("#C");

const progress = document.querySelector("#progress");

const playerScoreDiv = document.querySelector("#playerScore");

const timerDiv = document.querySelector("#timeOut");

const leaderBoardDiv = document.querySelector("#leaderBoard");

var timeInterval;

let playerScore = 0;

let timeLeft = 60;

//array of questions
let questions = [

    {

        question: "What does HTML stand for?",

        choiceA: "Hyper Text Markup Language",

        choiceB: "Hang Tight My Lad",

        choiceC: "Hail To My Lord",

        correct: "A"

    }, {

        question: "What does CSS stand for?",

        choiceA: "Car Should Stop",

        choiceB: "Cascading Style Sheet",

        choiceC: "Cats So Sick",

        correct: "B"

    }, {

        question: "What does JS stand for?",

        choiceA: "Just Stellar",

        choiceB: "Judicial System",

        choiceC: "Javascript",

        correct: "C"

    }
];

const lastQuestion = questions.length - 1;

let runningQuestion;


// render a question
function renderQuestion() {
    quiz.classList.remove('hidden')

    let q = questions[runningQuestion];

    question.textContent = q.question;

    choiceA.textContent = q.choiceA;

    choiceB.textContent = q.choiceB;

    choiceC.textContent = q.choiceC;

    runningQuestion++;
}

//function for timer
function setTimer() {
    timeInterval = setInterval(function () {
        timeLeft--;
        timerDiv.textContent = timeLeft;
        //stop timer at 0
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

//start game function
function startGame() {
    runningQuestion = 0;
    playerScore = 0;
    setTimer();
    renderQuestion();
};

//game over function
function gameOver() {
    timeLeft = 1;
    var initials= prompt("Enter Player Initials.");
    if (initials !== null) {
        //get player initials and score and combine into obj
        var scoreObj = {
            "Initials": initials,
            "Score": playerScore
        };
        //send to localStorage
        localStorage.setItem("Scores", JSON.stringify(scoreObj));
    } 
    displayLeaderboard();
};

//Leaderboard Display
function displayLeaderboard() {
    var userScores = localStorage.getItem("Scores");
    console.log(userScores);
    //leaderBoardDiv.textContent = JSON.stringify(userScores);
};

//compares answers and renders next question or game over
function compareAnswer(userAnswer) {
    if (questions[runningQuestion - 1].correct !== userAnswer) {
        timeLeft = timeLeft - 15;
    } else {
        playerScore++;
        console.log(playerScore);
    }

    if (runningQuestion < questions.length) {
        renderQuestion();
    } else {
        gameOver();
        console.log("gameover")
    }
};

//starts game when button is clicked
start.addEventListener("click", function () {
    startGame();
});
