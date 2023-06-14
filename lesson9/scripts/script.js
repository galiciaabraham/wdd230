const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData(url) {
    const response = await fetch(url);
    if(response.ok) {
        const data = await response.json();
        //console.table(data.prophets);
        displayProphets(data.prophets);
    } else {
        console.error(error);
    }
}

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards');

    prophets.forEach((prophet) => {
        let cardHolder = document.createElement('section');
        let name = document.createElement('h2');
        let birthday = document.createElement('h3');
        let placeOfBirth = document.createElement('h3');
        let portrait = document.createElement('img');

        name.textContent = `${prophet.name} ${prophet.lastname}`;
        birthday.textContent = `Date of Birth: ${prophet.birthdate}`;
        placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name}, ${prophet.lastname}`);
        portrait.setAttribute('loading','lazy');
        portrait.setAttribute('width','340');
        portrait.setAttribute('height','440');

        cardHolder.appendChild(name);
        cardHolder.appendChild(birthday);
        cardHolder.appendChild(placeOfBirth);
        cardHolder.appendChild(portrait);

        cards.appendChild(cardHolder);

    });
};

getProphetData(url);

