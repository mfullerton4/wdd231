const url = './data/members.json';
const cardsContainer = document.querySelector('#cards');

async function getMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
            console.error('Error loading member data:', error);
        }
}
function displayMembers(members) {
    cardsContainer.innerHTML = '';

    members.forEach(member => {
        const card = document.createElement('section');
        card.classList.add('member-card');

        card.innerHTML = `
        <img src="./images/${member.image}" alt="${member.name}">
        <h2>${member.name}</h2>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p class="level">Memebership Level: ${member.membership}</p>
        `;

        cardsContainer.appendChild(card);

    });

}

getMembers();

const gridBtn = document.querySelector('#grid');
const listBtn = document.querySelector('#list');

gridBtn.addEventListener('click', () => {
    cardsContainer.classList.add('grid');
    cardsContainer.classList.remove('list');
});

listBtn.addEventListener('click', () => {
    cardsContainer.classList.add('list');
    cardsContainer.classList.remove('grid');
});

//footer dates

document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;