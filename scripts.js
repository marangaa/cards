document.getElementById('cardForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const cardName = document.getElementById('cardName').value;
    const cardDetails = document.getElementById('cardDetails').value;
    
    const cardCollection = document.getElementById('cardCollection');
    
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${cardName}</h3><p>${cardDetails}</p>`;
    
    cardCollection.appendChild(card);
    
    // Clear the form
    document.getElementById('cardForm').reset();
});
