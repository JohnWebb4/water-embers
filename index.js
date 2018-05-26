const express = require('express');
const temperatureRouter = require('./server/temperatureRouter.js');

var app = express();

app.set('port', process.env.PORT || 8000);

app.use(express.static('client/dist/'));

app.get('/', (req, res) => { res.sendFile(__dirname + '/client/index.html'); });

app.use('/temperature', temperatureRouter);

app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`);
});