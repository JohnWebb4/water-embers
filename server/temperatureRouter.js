const database = require('../database/database.js');

var router = require('express').Router();

router.get('/', (req, res) => {
  var searchCriteria = parseSearch(req.query.search || '');
  var numResults = Number(req.query.numResults) || 1;

  database.search(searchCriteria, numResults)
    .then((temperatures) => {
      res.send(temperatures);
    });
});

const parseSearch = (searchString) => {
  var search = {};

  return search;
};

module.exports = router;