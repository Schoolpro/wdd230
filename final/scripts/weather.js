document.addEventListener("DOMContentLoaded", () => {
    const currentTemp = document.querySelector('#temperature');
    const weatherImage = document.querySelector('#weather-image');
    const description = document.querySelector('#description');
    const forecastContainer = document.querySelector('#forecast');
    const currentHumidity = document.querySelector('#humidity');
    const tempMax = document.querySelector('#temp-max');

    const apiKey = '4af53861742ef0628fb279558fe64705';
    const lat = 20.4229839;
    const lon = -86.9223432;

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}&lang=en`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}&lang=en`;

    async function apiFetch(url) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                return await response.json();
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function fetchCurrentWeather() {
        const data = await apiFetch(currentWeatherUrl);
        if (data) {
            displayCurrentWeather(data);
        }
    }

    async function fetchForecast() {
        const data = await apiFetch(forecastUrl);
        if (data) {
            displayForecast(data);
        }
    }

    function displayCurrentWeather(data) {
        currentTemp.textContent = `${Math.round(data.main.temp)}`;
        currentHumidity.textContent = `${data.main.humidity}`;
        const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherImage.setAttribute('src', iconSrc);
        weatherImage.setAttribute('alt', data.weather[0].description);
        description.textContent = capitalizeWords(data.weather[0].description);
        tempMax.textContent = `${Math.round(data.main.temp_max)}`;
    }

    function displayForecast(data) {
        forecastContainer.innerHTML = '';
        const forecastList = data.list.filter((item, index) => index % 8 === 0).slice(0, 3);
        forecastList.forEach(day => {
            const forecastItem = document.createElement('div');
            forecastItem.classList.add('forecast-item');
            const iconSrc = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
            forecastItem.innerHTML = `
                <p>${new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })}</p>
                <p>Temp: ${Math.round(day.main.temp)}°C</p>
                <img src="${iconSrc}" alt="${day.weather[0].description}">
                <p>${capitalizeWords(day.weather[0].description)}</p>
            `;
            forecastContainer.appendChild(forecastItem);
        });
    }

    function capitalizeWords(str) {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    fetchCurrentWeather();
    fetchForecast();
});
