let searchButton = document.getElementById('search');
searchButton.addEventListener('click', requestAPI());

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
        content.innerHTML = `<h2>${data.title}</h2> <iframe title="space-video" src="${data.url}" frameBorder="0"></iframe> <p>${data.explanation} - <span id="date">${data.date}</span></p>`;
    } else {
        content.innerHTML = `<h2>${data.title}</h2> <img src="${data.url}" alt="Nasa Image of the Day"> <p>${data.explanation}</p>`;
    };
}