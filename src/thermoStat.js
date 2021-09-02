class thermoStat {
  
  constructor(Temperature = thermoStat.START_TEMPERATURE) {
    this.currentTemp = Temperature
    this.minimumTemp = thermoStat.MINIMUM_TEMPERATURE
    this.powersave = true
  }

  up() {
    if (this.powersave && this.currentTemp < thermoStat.POWER_SAVE_MAX_TEMP) {
      this.currentTemp++
    }
    else if (!this.powersave && this.currentTemp < thermoStat.MAX_TEMP) {
      this.currentTemp++
    }

  }

  down() {
    if (this.currentTemp > this.minimumTemp) {
      this.currentTemp--
    }
  }
  
  switchPowerSaveOff() { 
    this.powersave = false
  }

  resetTemp() { 
    this.currentTemp = thermoStat.START_TEMPERATURE
  }
  
  static START_TEMPERATURE = 20;
  static MINIMUM_TEMPERATURE = 10;
  static POWER_SAVE_MAX_TEMP = 25;
  static MAX_TEMP = 32;
}
