function toggleMenu() {
    document.querySelector('.home-nav').classList.toggle('open');
    document.querySelector('#hamburger').classList.toggle('open');
}


const toggleClick = document.querySelector('#hamburger');
toggleClick.onclick = toggleMenu;

