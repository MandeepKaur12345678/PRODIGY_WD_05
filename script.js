document.getElementById('searchButton').addEventListener('click', function() {
    const location = document.getElementById('locationInput').value;
    const apiKey = '735c97408e73f5490f0d4d8479e5a5b0';
    const url = `apikey`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('location').textContent = data.name;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Could not retrieve weather data. Please try again.');
        });
});
