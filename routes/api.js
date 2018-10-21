var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
  const obj = {
    code: 200,
    data: {
      id: req.query.id,
      name: req.query.name
    },
    msg: 'ok'
  }
  res.json(obj)
});

module.exports = router;
