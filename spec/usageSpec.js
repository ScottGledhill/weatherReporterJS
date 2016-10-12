describe('displaying usage levels', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('when the temperature is below 20 degrees', function() {
    it('it is considered low-usage', function() {
      for (var i = 0; i < 3; i++) {
        thermostat.decreaseTemperature();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });
  });

  describe('when the temperature is between 20 and 50 degrees', function() {
   it('it is considered medium-usage', function() {
     expect(thermostat.energyUsage()).toEqual('medium-usage');
   });
 });

 describe('when the temperature is anything else', function() {
   it('it is considered high-usage', function() {
     for (var i = 0; i < 40; i++) {
       thermostat.increaseTemperature();
     }
     expect(thermostat.energyUsage()).toEqual('high-usage');
   });
 });
});
