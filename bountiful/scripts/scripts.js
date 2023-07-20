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

//This section is for the drinks ordered box.

let numberOfOrders = Number(window.localStorage.getItem("number-of-orders"))
localStorage.setItem('number-of-orders', numberOfOrders);
const ordersCount = document.querySelector('.s-drinks');
ordersCount.textContent = `${numberOfOrders}`; 