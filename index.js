const express = require('express');
const CronJob = require('cron').CronJob;
const bodyParser = require('body-parser');

const temperatureRouter = require('./server/temperatureRouter.js');
const fetchTemperatureWorker = require('./worker/fetchTemperature.js');

var app = express();

app.set('port', process.env.PORT || 8000);
app.set('fetch_interval', process.env.FETCH_INTERVAL || 10);

app.use(bodyParser.json());

app.use(express.static('client/dist/'));

app.get('/', (req, res) => { res.sendFile(__dirname + '/client/index.html'); });

app.use('/temperature', temperatureRouter);

// Create worker to update temperature
new CronJob(`*/${app.get('fetch_interval')} * * * * *`, () => {
  fetchTemperatureWorker();
}, null, true, 'America/Phoenix');

app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`);
});