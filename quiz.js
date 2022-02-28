var questions = [
   { 
    text : "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer : "alerts"
    },
    { 
       text : "The condition in an if/else statement is enclosed with _______.",
     choices : ["quotes", "curly brackets", "parenthesis", "square brackets"],
     answer : "curly brackets"
       },
       { 
         text : "Arrays in JavaScript can be used to store _______.",
         choices: ["numbers & strings", "booleans", "other arrays", "all of the above"],
         answer : "all of the above"
         },
      {
         text : "String values must be enclosed within ______ when being assigned to variables.",
         choices: ["quotes", "curly brackets", "parenthesis", "commas"],
         answer : "quotes"
         },
     {
      text : "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal/bash", "for loops", "console log"],
      answer : "console log"
      },
]
var questionIndex = 0
var quizTime = 60;
const start = document.getElementById("start");
let timer;

//start.addEventListener("click", startQuiz);
//function startQuiz(){
 //  start.style.display = "none";
  // counterRender();
   //timer = setInterval(counterRender,1000);
   //questionRender();
   //quiz.style.display = "block";
//}

const quiz = document.getElementById("quiz");
const nextBtn =document.getElementById("nextBtn");
const question = document.getElementById("question");
const questionContainer = document.getElementById("questionContainer");
const submitBtn=document.getElementById("submitBegin");
const counter = document.getElementById("counter");
var score = 0;

const timeGauge = document.getElementById("timeGauge");
const answerList = document.getElementById("answerList");
const scoreContainer = document.getElementById("scoreContainer");
function scoreRender(){
   scoreContainer.style.display="block";
   let scoreAmount = Math.round(100 * score / questions.length);

}
start.addEventListener("click", function(){
   console.log("gameStarted")
   gameStart()
})
function gameStart(){
   timeLeft=setInterval(setTime, 1000)   
   firstQuestion(questionIndex)
   start.style.display="none"
}


let lastQuestionIndex = questions.length -1;
let runningQuestionIndex = 0;
function firstQuestion(q){
   question.textContent=""
   answerList.textContent=""
   for(var i = 0; i < questions.length; i++){
      var Q=questions[q].text
      var A=questions[q].choices
      question.textContent=Q
   }
   A.forEach(item=>{
      var answerbtn = document.createElement("button")
      answerbtn.textContent=item
      answerList.appendChild(answerbtn)
      answerbtn.addEventListener("click", function(){
         checkAnswer(answerbtn.textContent)
      })
   })
   
}
// function newQuestion(q){
//    questions.innerHTML=q.question
//     questions.innerHTML= "<p>" + q.question+ "</p>";
//     choiceA.innerHTML = q.choiceA;
//     choiceB.innerHTML = q.choiceB;
//     choiceC.innerHTML = q.choiceC;
//     choiceD.innerHTML = q.choiceD;
// }
runningQuestionIndex++
//var quizTime = 60; 
//renderQuestion()
function setTime(){
   quizTime --;
   counter.textContent="time " + quizTime;
   if(quizTime==0){
      console.log("Time is up!");
   }
}

const gaugeWidth = 150;
var count = 0;
const gaugeProgressUnit = gaugeWidth/quizTime;

// function counterRender(){
//    if(count <= quizTime ){
//       counter.innerHTML = count;
//       timeGauge.style.width = gaugeProgressUnit * count +"px";
//       count++;
//    }else{
//       count= 0;
//       wrongAnswer();
//       if(runningQuestionIndex < lastQuestionIndex){
//        runningQuestionIndex++;
//        questionRender();
//        //need an else statment if the timer runs out before a question is answered?
//          scoreRender();
//       }
//    }
// }
 //timer= setInterval(counterRender, 1000);

function checkAnswer(ans){
   var answerCheck = document.createElement("h3")
   if(ans==questions[questionIndex].answer){
      score++;
      answerCheck.textContent="correct!"
      displayScore(score)
   }else{
      answerCheck.textContent="incorrect!"
   }
   questionContainer.appendChild(answerCheck)
   questionIndex++
   nextQuestion(questionIndex, answerCheck)
//   // if(runningQuestionIndex < lastQuestionIndex){
//      runningQuestionIndex++;
//      questionRender(); 

//    }else{
//       scoreRender();

//    }
}
function nextQuestion(q, checker){
   nextBtn.addEventListener("click", function(){
      if(q>=questions.length){
         console.log ("done")
         checker.textContent=""
         end()
      }else {
         firstQuestion(q)
         checker.textContent=""
      }
   })
}
var endingPage = document.getElementById("endingPage")
endingPage.style.display = "none"
var scoreDisplay = document.getElementById("scoreDisplay")
var submitbtn = document.getElementById("submitbtn")
var name = document.getElementById("name")
function displayScore(s){
   scoreDisplay.textContent= "You scored: " + s
}
function end(){
   questionContainer.style.display="none"
   counter.style.display="none"
   endingPage.style.display="block"
}