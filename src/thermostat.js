var Thermostat = function() {};
var targetTemperature = 20;
var maxTempOn = 25
var maxTempOff = 32
var minTemp = 10
var powerSave = true;
var increment = 1;

Thermostat.prototype.temperature = function() {
  return targetTemperature;
};

Thermostat.prototype.up = function() {
  if (powerSave === true && targetTemperature === maxTempOn) {
    targetTemperature = maxTempOn
  } else if (powerSave === false && targetTemperature === maxTempOff) {
    targetTemperature = maxTempOff
  } else {
    targetTemperature++;
  }
};

Thermostat.prototype.down = function() {
  if (targetTemperature > minTemp) {
    targetTemperature--;
  };
};

Thermostat.prototype.powerSave = function() {
  return powerSave;
};

Thermostat.prototype.powerSaveOff = function() {
  powerSave = false;
};

Thermostat.prototype.powerSaveOn = function() {
  powerSave = true;
};

// function Thermostat2() {
//   var targetTemperature = 20;
//   var powerSave = true;
//   return targetTemperature;
// }
//
// Thermostat2.prototype.temperature = function() {
//   return this.targetTemperature;
// };
