function toggleMenu() {
    document.getElementById('primary-nav').classList.toggle('open');
}

const x = document.getElementById('hamburger')
x.onclick = toggleMenu;