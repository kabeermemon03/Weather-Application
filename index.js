// https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=ec463c0f2d08c08f73aab76576c7ff00&units=metric //

const tableBody = document.querySelector("tbody")
const cities = ["Lahore", "Karachi", "Hyderabad", "Islamabad"]
const citySpan = document.querySelector("#citySpan")
const searchBar = document.querySelector("#searchBar");
const searchButton = document.querySelector("#searchBtn");
const Temp = document.querySelector("#temp")
const Humidity = document.querySelector("#humidity")
const weatherTableBody = document.querySelector("#weatherTableBody")
const Wind = document.querySelector("#wind")

searchButton.addEventListener('click', function (e) {
    const cityName = searchBar.value;
    const capitalizedCity = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ec463c0f2d08c08f73aab76576c7ff00&units=metric`)
        .then(response => response.json())
        .then(data => {
            Temp.textContent = data.main.temp + " °C";
            Wind.textContent = (data.wind.speed * 3.6).toFixed(1) + " km/h";
            Humidity.textContent = data.main.humidity + " %";
            citySpan.textContent = capitalizedCity;
        });
});

cities.forEach((city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ec463c0f2d08c08f73aab76576c7ff00&units=metric`)
        .then(response => response.json())
        .then(data => {
            const newRow = document.createElement("tr")
            newRow.innerHTML = `<td>${data.name}</td>
              <td>${data.main.temp} °C</td>
              <td>${data.main.humidity} %</td>
              <td>${(data.wind.speed * 3.6).toFixed(1)} km/h</td>`
              weatherTableBody.appendChild(newRow);
        });
         
});




