class thermoStat {
  
  constructor(Temperature = thermoStat.START_TEMPERATURE) {
    this.currentTemp = Temperature
  }

  up() {
    this.currentTemp++
  }

  
  static START_TEMPERATURE = 20;
}