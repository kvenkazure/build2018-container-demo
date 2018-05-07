var express = require('express');
var router = express.Router();

/* Default GET JSON for site */
router.get('/', function(req, res, next) {
  var response = new jsonResponse("Default endpoint", 200, []);
  res.json(response).status(response.status);
});

module.exports = router;
