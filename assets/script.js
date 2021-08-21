const start = document.querySelector("#start-btn");

const quiz = document.querySelector("#quiz");

const question = document.querySelector("#question");

const choiceA = document.querySelector("#A");

const choiceB = document.querySelector("#B");

const choiceC = document.querySelector("#C");

const progress = document.querySelector("#progress");

const scoreDiv = document.querySelector("#scoreContainer");

const timerDiv = document.querySelector("#timer");

var timeInterval;

let playerScore = 0;

let timeLeft = 60;

let questions = [

    {

        question: "What does HTML stand for?",

        choiceA: "Correct",

        choiceB: "Wrong",

        choiceC: "Wrong",

        correct: "A"

    }, {

        question: "What does CSS stand for?",

        choiceA: "Wrong",

        choiceB: "Correct",

        choiceC: "Wrong",

        correct: "B"

    }, {

        question: "What does JS stand for?",

        choiceA: "Wrong",

        choiceB: "Wrong",

        choiceC: "Correct",

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
    timeInterval = setTimeout(function () {
        setInterval(function () {
            timeLeft--;
            console.log(timeLeft);
            //stop timer at 0
            if (timeLeft <= 0) {
                clearInterval(timeInterval);
            }
        }, 1000);
    })
}

function startGame() {
    runningQuestion = 0;
    playerScore = 0;
    setTimer();
    renderQuestion();
}
function gameOver () {
    timeLeft = 0;
};

//compares answers and renders next question or game over
function compareAnswer(userAnswer) {
    if (questions[runningQuestion -1].correct !== userAnswer) {
        timeLeft= timeLeft-15;
    }

    if (runningQuestion < questions.length) {
        renderQuestion();
    } else {
        gameOver();
        console.log("gameover")
    }
};

start.addEventListener("click", function () {
    startGame();
});
