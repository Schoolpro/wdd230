const apiKey = 'f6f6f9f52131734c0e78b20935024001';
const lat = 40.3649;
const lon = -111.7382;
const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${apiKey}&units=metric&lang=es`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const temp = data.current.temp;
        const description = data.current.weather[0].description;
        const icon = data.current.weather[0].icon;

        document.getElementById('temperature').innerText = `Temperatura: ${temp}°C`;
        document.getElementById('description').innerText = `Condición: ${description}`;
        document.getElementById('weather-icon').innerHTML = `<img src="https://openweathermap.org/img/w/${icon}.png" alt="${description} icon">`;
    })
    .catch(error => console.error('Error al obtener los datos del clima:', error));
