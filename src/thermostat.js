/*jslint node: true */
'use strict';

function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.increaseTemperature = function() {
  this.temperature += 1;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};
