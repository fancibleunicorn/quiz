
//Assigned DOM Elements
var quizContainer = document.getElementById("quiz");
var submitButton = document.getElementById("submit");
var timer = document.getElementById("timer");


//Function to Clear Quiz Box Area
function clearBox(quiz) {
    document.getElementById("quiz").innerHTML = "";
}

//Quiz Questions

var quizQuestions = [
    { q: "Commonly used data types DO NOT include:",
        a: {
            1: "strings",
            2: "booleans",
            3: "alerts",
            4: "numbers",
        },
        correctAnswer : "3"
    },

    { q: "The condition in an if/else statement is enclosed with ________",
        a: {
            1: "quotes",
            2: "curly brackets",
            3: "parenthesis",
            4: "square brackets",
        },
        correctAnswer : "3"
    },

    { q: "Arrays in JavaScript can be used to store _________",
        a: {
            1: "numbers and strings",
            2: "curly other arrays",
            3: "booleans",
            4: "all of the above",
        },
        correctAnswer : "4"
    },

    { q: "String values must be enclosed within _______ when being assigned to variables.",
        a: {
            1: "commas",
            2: "curly brackets",
            3: "quotes",
            4: "parenthesis",
        },
        correctAnswer : "3"
    },

    { q: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: {
            1: "JavaScript",
            2: "terminal/bash",
            3: "for loops",
            4: "console.log",
        },
        correctAnswer : "4"
    },
]


//Run the Quiz
function startQuiz(){
   
    clearBox()

    //loop through questions/answer array
    for (var i = 0; i < quizQuestions.length; ++i) {
        questionList = quizQuestions[i].q;
        answerList = quizQuestions[i].a;

        console.log(answerList)
        console.log(questionList)
        
        
    }
        var currentQuestion = document.createElement("h1");
        currentQuestion.innerText = questionList;
        quizContainer.appendChild(currentQuestion);


        var answerOne =document.createElement("button");
        answerOne.innerText=answerList[1];
        answerOne.style.width = "40%";
        answerOne.style.backgroundColor = "midnightblue"
        quizContainer.appendChild(answerOne);

        var answerTwo =document.createElement("button");
        answerTwo.innerText=answerList[2];
        answerTwo.style.width = "40%";
        answerTwo.style.backgroundColor = "midnightblue"
        quizContainer.appendChild(answerTwo);

        var answerThree =document.createElement("button");
        answerThree.innerText=answerList[3];
        answerThree.style.width = "40%";
        answerThree.style.backgroundColor = "midnightblue"
        quizContainer.appendChild(answerThree);

        var answerFour =document.createElement("button");
        answerFour.innerText=answerList[4];
        answerFour.style.width = "40%";
        answerFour.style.backgroundColor = "midnightblue"
        quizContainer.appendChild(answerFour);

}


//When you click the Start Button, Start the quiz
submitButton.addEventListener("click", startQuiz);