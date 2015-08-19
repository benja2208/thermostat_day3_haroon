var Thermostat = function() {
  
  this.targetTemperature = 20;
  this.maxTempOn = 25;
  this.maxTempOff = 32;
  this.minTemp = 10;
  this.powerSave = true;
  this.increment = 1;
  this.defaultTemperature = 20;

};


Thermostat.prototype.temperature = function() {
  return this.targetTemperature;
};

Thermostat.prototype.up = function() {
  if (this.powerSave === true && this.targetTemperature === this.maxTempOn) {
    this.targetTemperature = this.maxTempOn
  } else if (this.powerSave === false && this.targetTemperature === this.maxTempOff) {
    this.targetTemperature = this.maxTempOff
  } else {
    this.targetTemperature++;
  }
};

Thermostat.prototype.down = function() {
  if (this.targetTemperature > this.minTemp) {
    this.targetTemperature--;
  };
};

Thermostat.prototype.powerSave = function() {
  return this.powerSave;
};

Thermostat.prototype.powerSaveOff = function() {
  this.powerSave = false;
};

Thermostat.prototype.powerSaveOn = function() {
  this.powerSave = true;
};

Thermostat.prototype.reset = function() {
  this.targetTemperature = this.defaultTemperature;
};

Thermostat.prototype.displayColour = function() {
  if (this.targetTemperature < 18) {
    return 'Green'
  } else if (this.targetTemperature > 17 && this.targetTemperature < 25) {
    return 'Yellow';
  } else {
    return 'Red';
  }
};


