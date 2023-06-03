//miliseconds to days constant = 1000 ms/s *60 s/m * 60 m/h * 24 h/day 
const msToDays = 86400000;

//Displaying last visit.
const lastVisitSpan = document.querySelector('.visits');

//get last visit. 
const todayInMs = Date.now();

//
let latestVisitLs = Number(window.localStorage.getItem("lastVisit-ls"))

localStorage.setItem('lastVisit-ls', todayInMs);

let lastVisitInMs = latestVisitLs / msToDays;
console.log(lastVisitInMs);

function calculateDays() {
    let visitInDays = lastVisitInMs * msToDays;
    Math.round(visitInDays);
    lastVisitSpan = $`You visited the site ${visitInDays} ago`;
}

if (lastVisitInMs >= 86400000) {
    calculateDays();
} else {
    lastVisitSpan.textContent = `Your last visit was today`;
};


