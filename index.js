const express = require('express');

var app = express();

app.set('port', process.env.PORT || 8000);
console.log('Port', app.get('port'));

app.use(express.static('client/dist/'));

app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`);
});