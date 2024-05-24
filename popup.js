document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get("viewedListings", (data) => {
        const viewedListings = data.viewedListings;
        const listingsDiv = document.getElementById('listings');
        viewedListings.forEach((listingId) => {
            const div = document.createElement('div');
            div.className = 'listing';
            div.textContent = `Listing ID: ${listingId}`;
            listingsDiv.appendChild(div);
        });
    });
});

