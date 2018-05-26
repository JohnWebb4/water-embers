const mongoose = require('mongoose');

mongoose.Promise = Promise;

mongoose.connect(process.env.DATABASE, {uri_decode_auth: true});

const temperature = new mongoose.Schema({
  date: {
    type: Date,
    index: true,
    default: Date.now
  },
  temperature: Number
});

const Temperature = new mongoose.model('Temperature', temperature);

module.exports.create = Temperature.create.bind(Temperature);