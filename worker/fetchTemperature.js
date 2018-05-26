const dataTemperature = require('../database/temperatureHelper.js');

module.exports = () => {
  dataTemperature.create({
    date: new Date(),
    temperature: Math.random() * 10 + 90
  }, (err, temperature) => {
    if (err) {
      console.error('Cannot write to database', err, temperature);
    }
  });
};
