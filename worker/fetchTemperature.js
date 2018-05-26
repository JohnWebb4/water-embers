const database = require('../database/database.js');

module.exports = () => {
  database.create({
    date: new Date(),
    temperature: Math.random() * 10 + 90
  }, (err, temperature) => {
    if (err) {
      console.error('Cannot write to database', err, temperature);
    }
  });
};
