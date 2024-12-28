// Function to fetch weather data from the API
function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '1a16ca47fa9fb72c3fc479b2495c5a55'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    // Fetch data from OpenWeatherMap
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Handle the response
            if (data.cod === 200) {
                const temperature = data.main.temp;
                const humidity = data.main.humidity;
                const description = data.weather[0].description;

                // Update the DOM with the weather data
                document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
                document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
                document.getElementById('description').textContent = `Description: ${description}`;
            } else {
                alert('City not found!');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error fetching weather data');
        });
}