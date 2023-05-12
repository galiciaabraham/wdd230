const today = new Date();

let year = today.getFullYear();
let month = today.getMonth();
let day = today.getDay();

function monthInText() {
    let monthText = "";
    switch(month){
        case 0 :
             monthText = "January";
             break;
    }
}

function todayIs() {
    document.querySelector('#today').textContent = `${}`;
}


document.querySelector('#copyright-year').textContent = year;

document.querySelector('#last-updated').textContent = `Last modified: ${document.lastModified}`;