const database = require('../database/database.js');

var router = require('express').Router();

router.get('/', (req, res) => {
  var numResults = req.query.numResults || 1;

  database.getNewestTemperatures(numResults)
    .then((temperatures) => {
      res.send(temperatures);
    });
});

module.exports = router;