const menu = document.getElementById('menu');
const nav = document.querySelector('.navigation');

menu.addEventListener('click', function () {
    nav.classList.toggle('open');
});
