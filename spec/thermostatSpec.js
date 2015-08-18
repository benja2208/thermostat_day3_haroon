describe('Thermostat', function() {

  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
    targetTemperature = 20;
    powerSave = true;
    defaultTemperature = 20;
  });

  describe('temperature', function() {
    it('starts with 20', function() {
      expect(thermostat.temperature()).toEqual(defaultTemperature);
    });

    it('can be increased by 1 with up button', function() {
      thermostat.up();
      expect(thermostat.temperature()).toEqual(21);
    });

    it('can be decreased by 1 with down button', function() {
      thermostat.down();
      expect(thermostat.temperature()).toEqual(19);
    });

    it('cannot go below 10 degrees', function () {
      thermostat.targetTemperature = 10;
      thermostat.down();
      expect(thermostat.temperature()).toEqual(10);
    });
  });

  describe('powerSave', function() {
    it('defaults to "ON"', function() {
      expect(thermostat.powerSave).toBe(true);
    });

    it('can be turned "OFF"', function() {
      thermostat.powerSaveOff();
      expect(thermostat.powerSave).toBe(false);
    });

    it('can be turned "ON"', function() {
      thermostat.powerSaveOn();
      expect(thermostat.powerSave).toBe(true);
    });

    it('has a maxmimum temperature of 25 when "ON"', function () {
      thermostat.powerSaveOn();
      thermostat.targetTemperature = 25;
      thermostat.up();
      expect(thermostat.temperature()).toEqual(25); //ask about raise errors
    });

    it('has a maxmimum temperature of 32 when "OFF"', function () {
      thermostat.powerSaveOff();
      thermostat.targetTemperature = 32;
      thermostat.up();
      expect(thermostat.temperature()).toEqual(32); //ask about raise errors
    });

  });

  describe('reset', function () {
    it('changes the temperature to 20 degrees', function () {
      thermostat.targetTemperature = 15;
      thermostat.reset();
      expect(thermostat.temperature()).toEqual(20);
    });
  });

  describe('color display', function() {
    it('shows green if temperature is < 18', function () {
      thermostat.targetTemperature = 17
      expect(thermostat.displayColour()).toEqual('Green');
    });

    it('shows yellow if temperature is >17 and < 25', function () {
      thermostat.targetTemperature = 20
      expect(thermostat.displayColour()).toEqual('Yellow');
    });

    it('shows red if temperature is > 24', function () {
      thermostat.targetTemperature = 25
      expect(thermostat.displayColour()).toEqual('Red');
    });

  });
});







