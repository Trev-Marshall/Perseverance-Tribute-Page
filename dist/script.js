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