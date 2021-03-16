'use strict';

requestAPI();

async function requestAPI() {
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`);
    console.log(response);
    let data = await response.json();
    console.log(data);
    useApiData(data);
}

function useApiData(data) {

    let content = document.querySelector('#content');

    if (data.media_type === 'video') {
        content.innerHTML = `<iframe title="space-video" src="${data.url}" frameBorder="0"></iframe> <div class="column"><h2 class="iotd-title">${data.title}</h2><p class="iotd-p">${data.explanation} - <span id="date">${data.date}</span></p></div>`;
    } else {
        content.innerHTML = `<img src="${data.url}" alt="Nasa Image of the Day"> <div class="column"><h2 class="iotd-title">${data.title}</h2><p class="iotd-p">${data.explanation} - <span id="date">${data.date}</span></p></div>`;
    };
};

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
