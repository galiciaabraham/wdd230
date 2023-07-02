const displaySpotlights = (topbusinesses) => {
    const spotlights = document.querySelector('#Spotlights');

    topbusinesses.forEach((business) => {
        let spot = document.createElement('div');
        spot.setAttribute('class','spot');
        let businessName = document.createElement('h2');
        let businessWeb = document.createElement('a');
        let businessLogo = document.createElement('img');
        
        businessName.textContent = `${business.name}`;
        
        businessWeb.textContent = `${business.website}`;
        businessWeb.setAttribute('href',`#`);

        businessLogo.setAttribute('src', business.imageurl);
        businessLogo.setAttribute('alt', `Logo of ${business.name}`);
        businessLogo.setAttribute('loading','lazy');

        businessWeb.appendChild(businessLogo);
        spot.appendChild(businessName);
        spot.appendChild(businessWeb);
        spotlights.appendChild(spot);
        
    });
}
  
  function randomBusiness(businesses) {
  return businesses[Math.floor(Math.random()*businesses.length)];
  };

async function getSpotlights(url) {
    const response = await fetch(url);
    if(response.ok){
        const data = await response.json();
        let goldBusinesses = data.businesses.filter((business) => 
            business.level === "gold" || business.level === "silver"
        );
        const shuffledArray = goldBusinesses.sort((a, b) => 0.5 - Math.random());
        let topBusinesses = shuffledArray.slice(0,3);
        displaySpotlights(topBusinesses);

    } else {
        console.error(error);
    }

};

getSpotlights('https://galiciaabraham.github.io/wdd230/chamber/data.json');