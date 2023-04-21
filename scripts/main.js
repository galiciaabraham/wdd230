let year = new Date().getFullYear();

document.querySelector('#copyright-year').textContent = year;

document.querySelector('#last-updated').textContent = `Last modified: ${document.lastModified}`;