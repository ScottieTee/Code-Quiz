const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const question = document.getElementById("question");

const counter = document.getElementById("counter");

const timeGauge = document.getElementById("timeGauge");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

const scoreContainer = document.getElementById("scoreContainer");

let questions = [
    { 
     question : "loremloremlorem"
     choiceA : "ipsum"
     choiceB : "valum"
     choiceC : "blank"
     choiceD : "answer"
     correct : "A"
     },
     { 
        question : "loremloremlorem2"
        choiceA : "ipsum"
        choiceB : "valum"
        choiceC : "blank"
        choiceD : "answer"
        correct : "A"
        },
     { 
     question : "loremloremlorem"
     choiceA : "ipsum"
     choiceB : "valum"
     choiceC : "blank"
     choiceD : "answer"
     correct : "A"
     },
     { 
        question : "loremloremlorem"
        choiceA : "ipsum"
        choiceB : "valum"
        choiceC : "blank"
        choiceD : "answer"
        correct : "A"
        },
     { 
     question : "loremloremlorem"
     choiceA : "ipsum"
     choiceB : "valum"
     choiceC : "blank"
     choiceD : "answer"
     correct : "A"
     },
]

let lastQuestionIndex = questions.length -1;
let runningQuestionIndex = 0;

function newQuestion(){
    let q = questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question+ "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}
runningQuestionIndex++
renderQuestion()