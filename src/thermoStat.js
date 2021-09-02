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
  }

  down() {
    if (this.currentTemp > this.minimumTemp) {
      this.currentTemp--
    }
  }
  
  static START_TEMPERATURE = 20;
  static MINIMUM_TEMPERATURE = 10;
  static POWER_SAVE_MAX_TEMP = 25;
}
