describe('Thermostat', function() {

  var thermostat;
  
  beforeEach(function () {
    thermostat = new Thermostat();
    targetTemperature = 20;
  });

  describe('temperature', function() {
    it('starts with 20', function() {
      expect(thermostat.temperature()).toEqual(20);
    });
  
    it('can be increased by 1 with up button', function() {
      thermostat.up();
      expect(thermostat.temperature()).toEqual(21);
    });

    it('can be decreased by 1 with down button', function() {
      thermostat.down();
      expect(thermostat.temperature()).toEqual(19);
    });

  });
});