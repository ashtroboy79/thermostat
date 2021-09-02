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

  it('decreases temperature with down()', () => {
    thermostat.down()
    expect(thermostat.currentTemp).toEqual(thermoStat.START_TEMPERATURE - 1)
  })

  it('temperature cannot decrease beyond 10', () => {
    minimumTemp = thermoStat.MINIMUM_TEMPERATURE
    for (let i = 0; i < 11; i++) { 
      thermostat.down()
    }
    expect(thermostat.currentTemp).not.toBeLessThan(minimumTemp)
  })
    
});
