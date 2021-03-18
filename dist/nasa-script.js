'use strict';

let toggleNavStatus = false;

let toggleNav = function () {
    let getSideBar = document.querySelector(".nav-sidebar");
    let getSideBarUl = document.querySelector(".nav-sidebar ul");
    let getSideBarTitle = document.querySelector(".nav-sidebar ul li span");
    let getSideBarLinks = document.querySelectorAll(".nav-sidebar ul li a");

    if (toggleNavStatus === false) {
        getSideBarUl.style.visibility = "visible";
        getSideBar.style.width = "280px";
        getSideBarTitle.style.opacity = ".7";
        getSideBar.style.backgroundColor = "#35012c";

        let arrayLength = getSideBarLinks.length
        for (let i = 0; i < arrayLength; i++) {
            getSideBarLinks[i].style.opacity = "1";
        }
        toggleNavStatus = true;
    } else if (toggleNavStatus === true) {
        getSideBar.style.width = "60px";
        getSideBarTitle.style.opacity = "0";
        getSideBar.style.backgroundColor = "#ffffff00"

        let arrayLength = getSideBarLinks.length
        for (let i = 0; i < arrayLength; i++) {
            getSideBarLinks[i].style.opacity = "0";
        }

        getSideBarUl.style.visibility = "hidden";

        toggleNavStatus = false;
    }
};

let modal = document.querySelector('.modal');
let modalBtn = document.querySelector('.modal-btn');
let modalBtn1 = document.querySelector('.modal-btn1');
let modalPara = document.querySelector('.modal-para');
let closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click', openModal);
modalBtn1.addEventListener('click', openModal1);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    };
};
function openModal() {
    modal.style.display = 'block';
    modalPara.textContent = 'The rover costed about 2.4 BILLION to make and another 300 million to keep up and running for another 2 years. It is the size of a small car!';
};
function openModal1() {
    modal.style.display = 'block';
    modalPara.textContent = 'It took 7 months for the rover to reach mars and land. According to NASA Perseverance left the Earth at about 24,600 mph, which is astronomical!... See what I did there!';
};
function closeModal() {
    modal.style.display = 'none';
};

//Quiz functions
function buildQuiz() {
    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];

            for (let letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );
    quizContainer.innerHTML = output.join('');
};

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {

        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;

            answerContainers[questionNumber].style.color = 'lightgreen';
        }

        else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `<p>${numCorrect} out of ${myQuestions.length}!</p>`;
};

// Quiz Variables
let quizContainer = document.querySelector('.quiz-box');
let resultsContainer = document.querySelector('.results-container');
let submitBtn = document.querySelector('#submit');

const myQuestions = [
    {
        question: 'How long did it take for Perseverance to get to Mars?',
        answers: {
            a: '1 Year',
            b: '7 Months',
            c: '3 Years'
        },
        correctAnswer: 'b'
    },
    {
        question: 'How much did it cost to build the rover initially?',
        answers: {
            a: '$1 million',
            b: '$20 Billion',
            c: '$2.4 Billion'
        },
        correctAnswer: 'c'
    },
    {
        question: 'How big is the Mars Perseverance rover?',
        answers: {
            a: 'Octapus-Sized',
            b: 'Car-Sized',
            c: 'Tank-Sized'
        },
        correctAnswer: 'b'
    }
];

buildQuiz();

submitBtn.addEventListener('click', showResults);
