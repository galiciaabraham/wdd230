const apiKey = '68b149e223862febf5a2dfa8070ec10f';

const url = `https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=${apiKey}`;

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

async function apiFetch(){
    try {
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
        }
}

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    let desc = weatherData.weather[0].description;
    let descArray = desc.split(" ");
    
    for(let i = 0; i < descArray.length; i++) {
        descArray[i] = descArray[i][0].toUpperCase() + descArray[i].substr(1);
    };
    desc = descArray.join(" ");

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

}


apiFetch();