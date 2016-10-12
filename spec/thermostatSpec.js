/*jslint node: true */
'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('increases in temperature with the up button', function() {
    thermostat.increaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases in temperature with the down button', function() {
    thermostat.decreaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 10; i++) {
      thermostat.decreaseTemperature();
    }
  expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has a maximum of 100 degrees', function() {
    for (var i = 0; i < 80; i++) {
      thermostat.increaseTemperature();
    }
  expect(thermostat.getCurrentTemperature()).toEqual(100);
  });

  it('can be reset to the default temperature', function() {
  for (var i = 0; i < 6; i++) {
    thermostat.increaseTemperature();
  }
  thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
});
