const temperature = document.querySelector('.temperature-data').innerHTML;

const windSpeed = document.querySelector('.wind-speed-data').innerHTML;

tempInFloat = parseFloat(temperature);
windInFloat = parseFloat(windSpeed);

const chill = document.querySelector('.wind-chill-result');

function calculateChill() {
    const windChill = 35.74 + (0.6215 * tempInFloat) - (35.75 * (windInFloat ** 0.16)) + (0.4275 * tempInFloat * (windInFloat ** 0.16));
  chill.textContent = windChill;
};

if (tempInFloat <= 50 && windInFloat > 3){
    calculateChill();
} else {
    chill.textContent = 'N/A';
};