async function fetchwheather() {
    const apikey = "b6b431c32f5b94d653de0c8f3b8ac9b4";
    const city = document.getElementById('wheather-search').value.trim();
    const wheatherinfo = document.getElementById('wheather-info');
    const temp = document.getElementById('temp');
    const humidityy = document.getElementById('humidity');
    const forecast = document.getElementById('forecast');
    const image = document.getElementById('wheather-image');

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    try {
        const currentwheather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
        const forecastweather = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`;

        const response = await fetch(currentwheather);
        const response1 = await fetch(forecastweather);

        const data = await response.json();
        const data1 = await response1.json();

        const weather = data.weather[0].description;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const icon = data.weather[0].icon;

        wheatherinfo.innerHTML = weather;
        temp.innerHTML = `Temperature: ${temperature} °C`;
        humidityy.innerHTML = `Humidity: ${humidity}%`;
        image.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        //document.getElementById('wheather-search').value="";

        forecast.innerHTML = "";

        for (let i = 0; i < data1.list.length; i += 4) {
            const item = data1.list[i];
            const date = new Date(item.dt * 1000);
            const day = date.toLocaleDateString();
            const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const temp = item.main.temp;
            const desc = item.weather[0].description;
            const icon = item.weather[0].icon;

            const forecastItem = document.createElement("div");
            forecastItem.innerHTML = `
                <div>
                    <strong>${day} ${time}</strong><br>
                    <img src="http://openweathermap.org/img/wn/${icon}@2x.png"><br>
                    ${desc}<br>
                    ${temp} °C
                </div>
            `;
            forecast.appendChild(forecastItem);
        }

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
