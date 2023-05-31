const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

let year = new Date().getFullYear();

document.querySelector('#copyright-year').textContent = year;

document.querySelector('#last-updated').textContent = `Last modified: ${document.lastModified}`;

document.querySelector('#today').textContent = `Today is ${new Date().toLocaleDateString("en-UK", options)}`;

	