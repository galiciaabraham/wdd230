//Hamburguer Button Code...

function toggleMenu() {
    document.querySelector('.home-nav').classList.toggle('open');
    document.querySelector('#hamburger').classList.toggle('open');
}


const toggleClick = document.querySelector('#hamburger');
toggleClick.onclick = toggleMenu;

//Footer Last modified and copyright year code...

let year = new Date().getFullYear();

document.querySelector('#copyright-year').textContent = year;

document.querySelector('#last-updated').textContent = `Last modified: ${document.lastModified}`;