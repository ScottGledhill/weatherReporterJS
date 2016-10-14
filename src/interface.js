$(document).ready(function() {
  thermostat = new Thermostat();
  updateTemperature();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
    $('#wind-speed').text(data.wind.speed);
    $('#country').text(data.sys.country);
    $('#city').text(data.name);
    $('#weather').text(data.weather[0].description);
  });
});

$('#temp-up').on('click', function() {
  thermostat.increaseTemperature();
  updateTemperature();
});

$('#temp-down').click(function() {
  thermostat.decreaseTemperature();
  updateTemperature();
});

$('#temp-reset').click(function() {
  thermostat.resetTemperature();
  updateTemperature();
});

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.energyUsage());
}

$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  displayWeather(city);
});

function displayWeather(city) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
  var units = '&units=metric';
  $.get(url + token + units, function(data) {
    $('#current-temperature').text(data.main.temp);
    $('#wind-speed').text(data.wind.speed);
    $('#country').text(data.sys.country);
    $('#city').text(data.name);
    $('#weather').text(data.weather[0].description);
    var weather = data.weather[0].description;
    selectWeatherDisplay(weather);
  });
}

function selectWeatherDisplay(weather) {
  if (weather.includes("cloud") === true ) {
    $("body").removeClass("Sky");
    $("body").addClass('Cloudy');
  }
  if (weather.includes("sky") === true ) {
    $("body").removeClass("Cloudy");
    $("body").addClass('Sky');
  }
}
