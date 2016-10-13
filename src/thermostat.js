/*jslint node: true */
'use strict';

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 50;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE = 100;
}

Thermostat.prototype.increaseTemperature = function() {
  if (this.isMaximumTemperature()) {
   return;
 }
 this.temperature += 1;
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.isMinimumTemperature()) {
   return;
 }
 this.temperature -= 1;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function() {
  return this.temperature === this.MAXIMUM_TEMPERATURE;
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'high-usage';
  }
  if (this.temperature < this.DEFAULT_TEMPERATURE) {
    return 'low-usage';
  }
    return 'medium-usage';
};
