const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json'

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch('https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json');
    const data = await response.json();
    //console.table(data);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('H2');
        let portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
       

        card.appendChild(fullName);
        card.appendChild(portrait);
        
        cards.appendChild(card);
    });
}