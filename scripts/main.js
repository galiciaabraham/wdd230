
let year = newDate().getfullYear();

document.querySelector('#copyright').textContent = `&copy; ${year} .:|:. Abraham Galicia .:|:. Mexico`;

document.querySelector('#last-updated').textContent = document.lastModified;