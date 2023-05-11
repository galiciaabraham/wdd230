function toggleMenu() {
    document.getElementById('primary-nav').classList.toggle('open');
}

const x = document.getElementById('hamburguer-button');
x.onclick = toggleMenu();