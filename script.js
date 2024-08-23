function loadHTML(elementId, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data);
}

document.addEventListener('DOMContentLoaded', () => {
    loadHTML('header', '/header.html');
    loadHTML('footer', '/footer.html');
});
