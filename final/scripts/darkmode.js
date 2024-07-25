const modeButton = document.getElementById('mode');
const body = document.body;

modeButton.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
});
