'use strict';

let toggleNavStatus = false;

let toggleNav = function() {
    let getSideBar = document.querySelector(".nav-sidebar");
    let getSideBarUl = document.querySelector(".nav-sidebar ul");
    let getSideBarTitle = document.querySelector(".nav-sidebar ul li span");
    let getSideBarLinks = document.querySelectorAll(".nav-sidebar ul li a");

    if(toggleNavStatus === false) {
        getSideBarUl.style.visibility = "visible";
        getSideBar.style.width = "280px";
        getSideBarTitle.style.opacity = ".7";
        getSideBar.style.backgroundColor = "#35012c";

        let arrayLength = getSideBarLinks.length
        for(let i = 0; i < arrayLength; i++) {
            getSideBarLinks[i].style.opacity = "1";
        }
        toggleNavStatus = true;
    } else if(toggleNavStatus === true) {
        getSideBar.style.width = "60px";
        getSideBarTitle.style.opacity = "0";
        getSideBar.style.backgroundColor = "#ffffff00"

        let arrayLength = getSideBarLinks.length
        for(let i = 0; i < arrayLength; i++) {
            getSideBarLinks[i].style.opacity = "0";
        }

        getSideBarUl.style.visibility = "hidden";

        toggleNavStatus = false;
    }
};

var body = document.getElementsByTagName("body")[0];
var parent = document.getElementById("parent-div");
var child = document.getElementsByClassName("appear-on-scroll");
body.onscroll = function(){
if(document.documentElement.scrollTop>=child.offsetTop)//Adjust Tolerance
{
    child.style.display="block"
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
    if(e.target == modal) {
        modal.style.display = 'none';
    };
};
function openModal() {
    modal.style.display = 'block';
    modalPara.textContent = 'hello';
};
function openModal1() {
    modal.style.display = 'block';
    modalPara.textContent = 'Hi';
};
function closeModal() {
    modal.style.display = 'none';
};

let quizContainer = document.querySelector('.quiz-box');
let resultsContainer = document.querySelector('.results-container');
let sumbitBtn = document.querySelector('sumbit');

