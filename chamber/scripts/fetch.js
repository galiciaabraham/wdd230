const url = 'https://galiciaabraham.github.io/wdd230/chamber/data.json';

const displayBusiness = (businesses) => {
    const cards = document.querySelector('.cards');

    businesses.forEach((business) => {
        const businessName = document.createElement('h2');
        const businessAddress = document.createElement('h3');
        const businessPhone = document.createElement('h4');
        const businessWeb = document.createElement('h4');
        const businessLogo = document.createElement('a');

    
        
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
