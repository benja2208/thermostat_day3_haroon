var Thermostat = function() {};
var targetTemperature = 20;
var maxTempOn = 25
var maxTempOff = 32
var minTemp = 10
var powerSave = true;
var increment = 1;
var defaultTemperature = 20;


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

Thermostat.prototype.reset = function() {
  targetTemperature = defaultTemperature;
};

Thermostat.prototype.displayColour = function() {
  if (targetTemperature < 18) {
    return 'Green'
  } else if (targetTemperature > 17 && targetTemperature < 25) {
    return 'Yellow';
  } else {
    return 'Red';
  }
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
