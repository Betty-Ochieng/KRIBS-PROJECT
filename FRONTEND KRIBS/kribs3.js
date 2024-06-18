document.addEventListener('DOMContentLoaded', () => {
    const priceRange = document.getElementById('priceRange');
    const priceDisplay = document.querySelector('.price-display');

    priceRange.addEventListener('input', (event) => {
        const value = event.target.value;
        priceDisplay.textContent = `AED 0 - AED ${value.toLocaleString()}`;
    });
    
    const searchBar = document.querySelector('.search-bar');
    const cards = document.querySelectorAll('.property-card');

    searchBar.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase();
        cards.forEach(card => {
            const cardTitle = card.querySelector('h4').textContent.toLowerCase();
            if (cardTitle.includes(searchText)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
