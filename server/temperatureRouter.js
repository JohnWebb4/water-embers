var router = require('express').Router();

router.get('/', (req, res) => {
  res.send([{
    date: Date.now(),
    temperature: Math.random() * 20 + 70
  }]);
});

module.exports = router;