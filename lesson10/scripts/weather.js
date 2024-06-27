
const currentTemp = document.querySelector('#temperature');
const weatherImage = document.querySelector('#weather-image');
const description = document.querySelector('#description');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=4af53861742ef0628fb279558fe64705';


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayResults(data) {
    currentTemp.textContent = `${Math.round(data.main.temp)} °F`;
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherImage.setAttribute('src', iconSrc);
    weatherImage.setAttribute('alt', data.weather[0].description);
    description.textContent = capitalizeWords(data.weather[0].description);
}

function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

apiFetch();
