const url = 'https://galiciaabraham.github.io/wdd230/chamber/data.json';

const displayBusiness = (businesses) => {
    
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
