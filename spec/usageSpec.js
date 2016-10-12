describe('displaying usage levels', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('when the temperature is below 18 degrees', function() {
    it('it is considered low-usage', function() {
      for (var i = 0; i < 3; i++) {
        thermostat.decreaseTemperature();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });
  });

  describe('when the temperature is between 18 and 25 degrees', function() {
   it('it is considered medium-usage', function() {
     expect(thermostat.energyUsage()).toEqual('medium-usage');
   });
 });
});
