class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
			this.currentTime += 1;
			if (printTimeCallback) {
        printTimeCallback();
      }
		}, 1000);

  }

  getMinutes() {
    // ... your code goes here
    const minutes = this.currentTime / 60;
    
    return Math.floor(minutes);
  }

  getSeconds() {
    // ... your code goes here
    const seconds = this.currentTime % 60;

    return seconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let number = `${value}`;
    
		if (number.length < 2) {
      number = "0" + number;
    }
		return number;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here

  }
}
