function enoughAirtime(usage, availableAirtime) {
    const usageArray = usage.split(',');
    let totalCost = 0;
    for (let i = 0; i < usageArray.length; i++) {
      const item = usageArray[i].trim();
      switch (item) {
        case 'call':
          totalCost += 1.88;
          break;
        case 'data':
          totalCost += 12;
          break;
        case 'sms':
          totalCost += 0.75;
          break;
          default:
     
          break;
      }
    }
    const airtimeLeft = availableAirtime - totalCost;
    return airtimeLeft >= 0 ? 'R' + airtimeLeft.toFixed(2) : 'R0.00';
  }
  console.log(enoughAirtime('call,call,call,data,sms,sms,call,data', 50));
  document.addEventListener('alpine:init', () => {
    Alpine.data('airtimeCalculator', () => ({
      usage: '',
      availableAirtime: 50,
      airtimeLeft: '',
      calculateAirtime() {
        this.airtimeLeft = enoughAirtime(this.usage, this.availableAirtime);
      }
    }));
  });