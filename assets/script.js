const start = document.querySelector("#start-btn");

const quiz = document.querySelector("#quiz");

const question = document.querySelector("#question");

const choiceA = document.querySelector("#A");

const choiceB = document.querySelector("#B");

const choiceC = document.querySelector("#C");

const counter = document.querySelector("#counter");

const timeGauge = document.querySelector("#timeGauge");

const progress = document.querySelector("#progress");

const scoreDiv = document.querySelector("#scoreContainer");

let playerScore = 0;

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

let runningQuestion = 0;


// render a question

function renderQuestion() {

    quiz.classList.remove('hidden')

    let q = questions[runningQuestion];

    question.textContent = q.question;

    choiceA.textContent = q.choiceA;

    choiceB.textContent = q.choiceB;

    choiceC.textContent = q.choiceC;



}

function setTimer() {

}

function startGame() {
    runningQuestion = 0
    playerScore = 0;
    //setTimer()
    renderQuestion();
}

function compareAnswer(event) {
    
    console.log(runningQuestion)
    if (runningQuestion < questions.length) {
        renderQuestion();
    } else {
        //game end
        console.log("gameover")
    }
    runningQuestion++;
    console.log(event);
};

start.addEventListener("click", function () {
    startGame()
});

choiceA.addEventListener("click", function () {
    compareAnswer(event);
})
choiceB.addEventListener("click", function () {

})
choiceC.addEventListener("click", function () {

})

//git remote add origin 