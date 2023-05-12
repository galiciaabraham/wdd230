function toggleMenu() {
    document.getElementById('primary-nav').classList.toggle('opentoggle');
    document.getElementById('hamburger').classList.toggle('opentoggle');
}


const x = document.getElementById('hamburger')
x.onclick = toggleMenu;