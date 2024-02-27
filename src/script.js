       function updateTime() {
        // Madrid
        let madridElement = document.querySelector("#madrid");
        if (madridElement) {
          let madridDateElement = madridElement.querySelector(".date");
          let madridTimeElement = madridElement.querySelector(".time");
          let spaninTimezone = moment().tz("Europe/Madrid");
          madridDateElement.innerHTML = spaninTimezone.format("dddd, Do MMMM");
          madridTimeElement.innerHTML = spaninTimezone.format("h:mm ss A");
        }
      
        // Japan
        let tokyoElement = document.querySelector("#tokyo");
        if (tokyoElement) {
          let tokyoTimeElement = tokyoElement.querySelector(".time");
          let tokyoDateElement = tokyoElement.querySelector(".date");
          let tokyoTimezone = moment().tz("Asia/Tokyo");
          tokyoTimeElement.innerHTML = tokyoTimezone.format("h:mm ss A");
          tokyoDateElement.innerHTML = tokyoTimezone.format("dddd, Do MMMM");
        }
      }
  
  
  function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm ss ")} <small>${cityTime.format(
      "A"
    )}</small></div>
    </div>
    <a href="/">All cities</a>
    `;
  }
  
  updateTime();
  setInterval(updateTime, 1000);
  
  let citiesSelectElement = document.querySelector("#city");
  citiesSelectElement.addEventListener("change", updateCity);