const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {uri_decode_auth: true});

var temperature = new mongoose.Schema({

});