const url = 'https://galiciaabraham.github.io/wdd230/chamber/data.json';

const displayBusiness = (businesses) => {
    const cards = document.querySelector('.cards');

    businesses.forEach((business) => {
        let businessName = document.createElement('h2');
        let businessAddress = document.createElement('h3');
        let businessPhone = document.createElement('h4');
        let businessWeb = document.createElement('a');
        let businessLogo = document.createElement('img');
        
        businessName.textContent = `Business Name: ${business.name}`;
        businessAddress.textContent = `Address: ${business.address}`;
        businessPhone.textContent = `Phone number: ${business.phone}`;
        
        businessWeb.textContent = `Website: ${business.website}`;
        businessWeb.setAttribute('href',`${business.website}`);

        businessLogo.setAttribute('src', business.imageurl);
        businessLogo.setAttribute('alt', `Logo of ${business.name}`);
        businessLogo.setAttribute('loading','lazy');
        
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
