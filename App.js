//window.addEventListener('load', () => {
let temperaturaValor = document.getElementById("temperatura-valor");
let temperaturadescripcion = document.getElementById("temperatura-descripcion");
let lat;
let lon;
let vientoVelocidad = document.getElementById("viento-velocidad");
let ubicacion = document.getElementById("ubicacion");
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((posicion) => {
    lat = posicion.coords.latitude;
    lon = posicion.coords.longitude;

    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&&lang=es&units=metric&appid=68e058a125057ab9646f38c8e5f07a09`;
    // const url =`http://api.openweathermap.org/data/2.5/weather?q=Madrid&lang=es&units=metric&appid=68e058a125057ab9646f38c8e5f07a09`
    console.log(url);

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let temp = Math.round(data.main.temp);
        temperaturaValor.textContent = `${temp}˚C `; //textcontent es para asignar texto hacia alguna etiqueta
        let desc = data.weather[0].description;
        let temperaturadescripcion = document.getElementById(
          "temperatura-descripcion"
        );
        desc = data.weather[0].description;
        temperaturadescripcion.textContent = desc.toUpperCase();
        ubicacion.textContent = data.name;
        vientoVelocidad.textContent = `${data.wind.speed}m/s`;

        let iconCode = data.weather[0].icon;
        const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`;
        console.log(urlIcon);

        console.log(data.weather[0].main);

        switch (data.weather[0].main) {
          case "Clear":
            iconoAnimado.src = "amcharts_weather_icons_1.0.0/animated/day.svg";
            console.log("Limpio");
            break;

          case "Clouds":
            iconoAnimado.src =
              "amcharts_weather_icons_1.0.0/animated/cloudy-day-1.svg";
            console.log("Nubes");
            break;

          case "Drizzle":
            iconoAnimado.src =
              "amcharts_weather_icons_1.0.0/animated/rainy-2.svg";
            console.log("LLOVIZNA");
            break;

          case "Rain":
            iconoAnimado.src =
              "amcharts_weather_icons_1.0.0/animated/rainy-7.svg";
            console.log("LLUVIA");
            break;

          case "Snow":
            iconoAnimado.src =
              "amcharts_weather_icons_1.0.0/animated/snowy-6.svg";
            console.log("NIEVE");
            break;

          case "Atmosphere":
            iconoAnimado.src =
              "amcharts_weather_icons_1.0.0/animated/weather.svg";
            console.log("Atmosfera");
            break;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

//})
