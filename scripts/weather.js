// Select HTML elements in the document
const currentTemp = document.querySelector('#temperature');
const weatherImage = document.querySelector('#weather-image');
const description = document.querySelector('#description');

// API key and location coordinates
const apiKey = '4af53861742ef0628fb279558fe64705';
const lat = 40.3649;
const lon = -111.7382;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}&lang=en`;

// Asynchronous function to fetch the weather data
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // For testing purposes
            displayResults(data); // Uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to display the results on the webpage
function displayResults(data) {
    currentTemp.textContent = `${Math.round(data.main.temp)} °C`;
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherImage.setAttribute('src', iconSrc);
    weatherImage.setAttribute('alt', data.weather[0].description);
    description.textContent = capitalizeWords(data.weather[0].description);
}

// Helper function to capitalize each word in the description
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Invoke the apiFetch function
apiFetch();
