describe('themoStat', function() {
  let thermostat;

  beforeEach(() => {
    thermostat = new thermoStat
  })
  it('starts with a temperature of 20', function() {
    expect(thermostat.currentTemp).toEqual(20)
  })

  it('increases temp temperature with up()',() => {
    thermostat.up()
    expect(thermostat.currentTemp).toEqual(thermoStat.START_TEMPERATURE + 1)
  })
});