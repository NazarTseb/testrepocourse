function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value.trim();
    const apiKey = 'bccea1adaf73babbee2852e268428e5b'; // заміни на свій робочий ключ
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            if (data.cod !== 200) {
                weatherInfo.innerHTML = `<p style="color:red;">Error: ${data.message}</p>`;
                return;
            }
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            document.getElementById('weatherInfo').innerHTML = `<p style="color:red;">${error}</p>`;
        });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
