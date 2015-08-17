var Thermostat = function() {};
var targetTemperature = 20
var increment = 1

Thermostat.prototype.temperature = function() {
  return targetTemperature;
};

Thermostat.prototype.up = function() {
  targetTemperature = targetTemperature + increment;
};

Thermostat.prototype.down = function() {
  if (targetTemperature > 10) {
    targetTemperature = targetTemperature - increment;
  };
};
