$(document).ready(function() {
  thermostat = new Thermostat();
  updateTemperature();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
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
