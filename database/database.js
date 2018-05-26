const mongoose = require('mongoose');

mongoose.Promise = Promise;

mongoose.connect(process.env.DATABASE);

const temperature = new mongoose.Schema({
  date: {
    type: Date,
    index: true,
    default: Date.now
  },
  temperature: Number
});

const Temperature = mongoose.model('Temperature', temperature);

const getNewestTemperatures = async (numResults) => await Temperature.find().limit(numResults).sort({date: -1});

module.exports.create = Temperature.create.bind(Temperature);
module.exports.getNewestTemperatures = getNewestTemperatures;