const start = document.getElementById("start");
let timer;

start.addEventListener("click", startQuiz);
function startQuiz(){
   start.style.display = "none";
   counterRender();
   timer = setInterval(counterRender,1000);
   questionRender();
   quiz.style.display = "block";
}

const quiz = document.getElementById("quiz");

const question = document.getElementById("question");

const counter = document.getElementById("counter");

const timeGauge = document.getElementById("timeGauge");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

const scoreContainer = document.getElementById("scoreContainer");
function scoreRender(){
   scoreContainer.style.display="block";
   let scoreAmount = Math.round(100 * score / questions.length);
   
}

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

const quizTime = 60; 
const gaugeWidth = 150;
let count = 0;
const gaugeProgressUnit = gaugeWidth/quizTime;

function counterRender(){
   if(count <= quizTime ){
      counter.innerHTML = count;
      timeGauge.style.width = gaugeProgressUnit * count +_"px";
      count++;
   }else{
      count= 0;
      wrongAnswer();
      if(runningQuestionIndex < lastQuestionIndex){
       runningQuestionIndex++;
       questionRender();
       //need an else statment if the timer runs out before a question is answered?
         scoreRender();
      }
   }
}
let timer= setInterval(counterRender, 1000);

function checkAnswer(answer){
   if(questions[runningQuestionIndex].correct === answer){
      score++;
      correctAnswer();
   }else{
      wrongAnswer();
   }
   if(runningQuestionIndex < lastQuestionIndex){
     runningQuestionIndex++;
     questionRender(); 

   }else{
      scoreRender();

   }
}