document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('banner');
    const closeButton = document.getElementById('close-banner');

    // lunes, martes y miércoles
    const today = new Date().getDay();
    console.log(`Today is: ${today}`);

    if (today === 1 || today === 2 || today === 3) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }

    closeButton.addEventListener('click', () => {
        banner.style.display = 'none';
    });
});
