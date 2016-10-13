$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
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
  thermostat.reset();
  updateTemperature();
});

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.energyUsage());
}
