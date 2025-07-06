function updateTime() {

// Mexico City
let mexicoCityElement = document.querySelector("#mexico-city");
if (mexicoCityElement) {
let mexicoCityDateElement = mexicoCityElement.querySelector(".date");
let mexicoCityTimeElement = mexicoCityElement.querySelector(".time");
let mexicoCityTime = moment().tz("America/Mexico_City");

mexicoCityDateElement.innerHTML = mexicoCityTime.format("MMMM Do YYYY");
mexicoCityTimeElement.innerHTML = mexicoCityTime.format("h:mm:ss [<small>]A[</small>]");
}

// Madrid
let madridElement = document.querySelector("#madrid");
if (madridElement) {
let madridDateElement = madridElement.querySelector(".date");
let madridTimeElement = madridElement.querySelector(".time");
let madridTime = moment().tz("Europe/Madrid");

madridDateElement.innerHTML = madridTime.format("MMMM Do YYYY");
madridTimeElement.innerHTML = madridTime.format("h:mm:ss [<small>]A[</small>]");
}

// Lagos
let lagosElement = document.querySelector("#lagos");
if (lagosElement) {
let lagosDateElement = lagosElement.querySelector(".date");
let lagosTimeElement = lagosElement.querySelector(".time");
let lagosTime = moment().tz("Africa/Lagos");

lagosDateElement.innerHTML = lagosTime.format("MMMM Do YYYY");
lagosTimeElement.innerHTML = lagosTime.format("h:mm:ss [<small>]A[</small>]");
}

// Asia/Shanghai
let shanghaiElement = document.querySelector("#shanghai");
if (shanghaiElement) {
    let shanghaiDateElement = shanghaiElement.querySelector(".date");
    let shanghaiTimeElement = shanghaiElement.querySelector(".time");
    let shanghaiTime = moment().tz("Asia/Shanghai");

    shanghaiDateElement.innerHTML = shanghaiTime.format("MMMM Do YYYY");
    shanghaiTimeElement.innerHTML = shanghaiTime.format("h:mm:ss [<small>]A[</small>]");
}
}


function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    // Bottom line removes the _ like in America/Los_Angeles and removes the [1] to only display the city
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    // Grabs the value from Select options and gets the time zone for that value. It diplays in h2.
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = 
                `<div class="city">
                    <div>
                        <h2>${cityName}</h2>
                        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
                    </div>
                    <div class="time">${cityTime.format("h:mm:ss ")}<small>${cityTime.format("A")}</small></div>
                </div>
                <a href="/">All Cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);