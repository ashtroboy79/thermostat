class thermoStat {
  
  constructor(Temperature = thermoStat.START_TEMPERATURE) {
    this.currentTemp = Temperature
  }

  up() {
    this.currentTemp++
  }

  down() {
    this.currentTemp--
  }
  
  static START_TEMPERATURE = 20;
  static MINIMUM_TEMPERATURE = 10;
}
