function updateTime() {

// Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement) {
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");
}

// Paris
let parisElement = document.querySelector("#paris");
if (parisElement) {
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}
//Tokyo

//Sydney
}
function updateCity(event) {
    let cityTimeZone = event.target.value;
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
                </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);