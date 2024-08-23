function loadHTML(elementId, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => document.getElementById(elementId).innerHTML = data)
        .catch(error => console.error('Error loading HTML:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    loadHTML('header', '/header.html');
    loadHTML('footer', '/footer.html');
});
