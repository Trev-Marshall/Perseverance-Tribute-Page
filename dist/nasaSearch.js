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
}