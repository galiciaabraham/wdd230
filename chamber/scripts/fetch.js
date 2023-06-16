const url = 'https://galiciaabraham.github.io/wdd230/chamber/data.json';

const displayBusiness = (businesses) => {
    const cards = document.querySelector('.cards');
    cards.classList.add('grid-type');


    businesses.forEach((business) => {
        let cardHolder = document.createElement('div');
        cardHolder.setAttribute('class','grid-display');
        cardHolder.classList.add('card-holder');
        let businessName = document.createElement('h2');
        let businessAddress = document.createElement('h3');
        let businessPhone = document.createElement('h4');
        let businessWeb = document.createElement('a');
        let businessLogo = document.createElement('img');
        
        businessName.textContent = `Business Name: ${business.name}`;
        businessAddress.textContent = `Address: ${business.address}`;
        businessPhone.textContent = `Phone number: ${business.phone}`;
        
        businessWeb.textContent = `${business.website}`;
        businessWeb.setAttribute('href',`${business.website}`);

        businessLogo.setAttribute('src', business.imageurl);
        businessLogo.setAttribute('alt', `Logo of ${business.name}`);
        businessLogo.setAttribute('loading','lazy');

        businessWeb.appendChild(businessLogo);
        cardHolder.appendChild(businessName);
        cardHolder.appendChild(businessAddress);
        cardHolder.appendChild(businessPhone);
        cardHolder.appendChild(businessWeb);
        //cardHolder.appendChild(businessLogo);

        cards.appendChild(cardHolder);
        
    });
}

async function getBusinessData(url) {
    const response = await fetch(url);
    if(response.ok){
        const data = await response.json();
        //console.log(data.businesses);
        displayBusiness(data.businesses);

    } else {
        console.error(error);
    }

};

getBusinessData(url);


const gridButton = document.querySelector('.grid-button');
const listButton = document.querySelector('.list-button');
const container = document.querySelector('.cards');



gridButton.addEventListener("click",() =>{
    container.classList.add('grid-type');
    container.classList.remove('list-type');

});

listButton.addEventListener("click",()=>{
    container.classList.add('list-type');
    container.classList.remove('grid-type');

});

