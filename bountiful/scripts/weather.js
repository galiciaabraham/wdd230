//Weather Code...

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature-data-today');
const weatherSummary = document.querySelector('.weather-summary');
const humidity = document.querySelector('.humidity');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.07834&lon=-117.3049&cnt=3&units=imperial&appid=68b149e223862febf5a2dfa8070ec10f';

async function apiFetch() {
    const response = await fetch(url);
    if(response.ok) {
        const data = await response.json();
        displayResults(data);
        threeDayForecast(data);

    }
}

function displayResults (weatherData) {
    temperature.textContent = `${weatherData.list[0].main.temp}`;
    
    let weatherIconAlt = `${weatherData.list[0].weather[0].description}`;
    
    let altArray = weatherIconAlt.split(" ");
    for(let i = 0; i < altArray.length; i++) {
        altArray[i] = altArray[i][0].toUpperCase() + altArray[i].substr(1);
    };
    weatherIconAlt = altArray.join(" ");
    
    let weatherIconSrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    weatherIcon.setAttribute('src', weatherIconSrc);
    weatherIcon.setAttribute('alt', weatherIconAlt);

    weatherSummary.textContent = `${weatherIconAlt}`;


    humidity.textContent = `Humidity: ${weatherData.list[0].main.humidity}`;

}

function threeDayForecast(weatherData) {
    let forecastBox = document.querySelector('.threeday-forecast');

    days = weatherData.list;
    console.log(days);
    
    days.forEach((day) => {
        let forecastImage = document.createElement('img');
        let forecastHolder = document.createElement('div');
        let forecastTemperature = document.createElement('span');
        let forecastSummary = document.createElement('span');

        forecastTemperature.textContent = `${day.main.temp}F°`;
        forecastSummary.textContent = `${day.weather[0].description}`;
        let forecastIconAlt = `${day.weather[0].description}`;
        let forecastIconSrc = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;

        forecastImage.setAttribute('src', forecastIconSrc);
        forecastImage.setAttribute('alt', forecastIconAlt);

        forecastHolder.appendChild(forecastImage);
        forecastHolder.appendChild(forecastTemperature);
        forecastHolder.appendChild(forecastSummary);
        

        forecastBox.appendChild(forecastHolder);
    })

}

apiFetch();

