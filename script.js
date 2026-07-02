// Simple Filter Functionality for the Game List
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const gameCards = document.querySelectorAll('.game-card');

    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase().trim();

        gameCards.forEach(card => {
            const title = card.getAttribute('data-title').toLowerCase();
            
            // If search query matches the data-title attribute, show card; else, hide it
            if (title.includes(searchString)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
