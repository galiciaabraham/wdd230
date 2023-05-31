function toggleMenu() {
    document.getElementById('primary-nav').classList.toggle('open');
    document.getElementById('hamburger').classList.toggle('open');
}


const x = document.getElementById('hamburger')
x.onclick = toggleMenu;

const button = document.querySelector('.close');
const banner = document.querySelector('.banner')

button.addEventListener('click', ()=>{
    banner.parentNode.removeChild(banner);
});

let today = new Date().getDay();
console.log(today);

if (today == 1 || today == 2){
    banner.setAttribute('class','banner');
} else {
    banner.setAttribute('class','no-tuesday');

}

