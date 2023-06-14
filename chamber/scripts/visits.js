//miliseconds to days constant = 1000 ms/s *60 s/m * 60 m/h * 24 h/day 
const msToDays = 86400000;

//Displaying last visit.
let lastVisitSpan = document.querySelector('.visits');

//get current time in miliseconds. 
const todayInMs = Date.now();
//const testTime = todayInMs - (3 * 24 * 60 * 60 * 1000 );
//console.log(testTime);

//get the last local storage visit saved
let latestVisitLs = Number(window.localStorage.getItem("lastVisit-ls"))
//set the local storage to today's date
localStorage.setItem('lastVisit-ls', todayInMs.toString());

//calculate time elapsed between the last visit and today in miliseconds
let lastVisitInDays = (latestVisitLs - todayInMs) / msToDays;
function calculateDays() {
    let visitInDays = Math.round(lastVisitInDays);
    lastVisitSpan.textContent = `You visited the site ${visitInDays} days ago`;
}
//decide wether the message will say today or the number of days elapsed
if (lastVisitInDays >= 1) {
    calculateDays();
} else {
    lastVisitSpan.textContent = `Your last visit was today`;
};


