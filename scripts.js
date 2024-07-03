const cardData = [
    {
        name: "John Doe",
        title: "Web Developer",
        description: "Passionate about creating beautiful and functional web applications.",
        interests: ["React", "TypeScript", "UI/UX", "Open Source"],
        imageUrl: "https://via.placeholder.com/300x200"
    },
    {
        name: "Jane Smith",
        title: "UX Designer",
        description: "Dedicated to creating intuitive and user-friendly interfaces.",
        interests: ["User Research", "Wireframing", "Prototyping", "Accessibility"],
        imageUrl: "https://via.placeholder.com/300x200"
    },
    {
        name: "peter parker",
        title: "Web Developer",
        description: "Passionate about creating beautiful and functional web applications.",
        interests: ["React", "TypeScript", "UI/UX", "Open Source"],
        imageUrl: "https://via.placeholder.com/300x200"
    }
        
];

function createCard(data) {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <img src="${data.imageUrl}" alt="${data.name}" class="card-image">
        <div class="card-content">
            <h2 class="card-title">${data.name}</h2>
            <p class="card-subtitle">${data.title}</p>
            <p class="card-description">${data.description}</p>
            <div class="card-interests">
                ${data.interests.map(interest => `<span class="interest-tag">${interest}</span>`).join('')}
            </div>
        </div>
    `;

    return card;
}

function renderCards() {
    const container = document.getElementById('card-container');
    cardData.forEach(data => {
        const card = createCard(data);
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderCards);