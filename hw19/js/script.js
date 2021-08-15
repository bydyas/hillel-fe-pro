window.addEventListener('DOMContentLoaded', () => {

  class Clock {
    constructor(template) {
      this.template = template;
    }

    getTime() {
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;

      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;

      let output = this.template.time
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

      document.querySelector('#time').textContent = output;
    }

    getDate() {
      let date = new Date();

      let day = date.getDay();
      switch (day) {
        case 0:
          day = 'SAT';
          break;
        case 1:
          day = 'MON';
          break;
        case 2:
          day = 'TUE';
          break;
        case 3:
          day = 'WED';
          break;
        case 4:
          day = 'THU';
          break;
        case 5:
          day = 'FRI';
          break;
        case 6:
          day = 'SUN';
          break;
      }

      let month = date.getMonth() + 1;
      if (month < 10) month = '0' + month;

      let year = date.getFullYear();
      if (year < 10) year = '0' + year;

      let output = this.template.date
        .replace('d', day)
        .replace('m', month)
        .replace('y', year);

      document.querySelector('#date').textContent = output;
    }

    stop() {
      clearInterval(this.timeTimer);
      clearInterval(this.dateTimer);
    }

    start() {
      this.getTime();
      this.getDate();

      this.timeTimer = setInterval(() => this.getTime(), 1000);
      this.dateTimer = setInterval(() => this.getDate(), 1000 * 60 * 60 * 24);
    }
  }


  let clock = new Clock({ time: 'h:m:s', date: 'd/m/y' });
  clock.start();

});