var express = require("express");
var router = express.Router();
var solver = require('../solving/index');
var generateRandom = require('../random/generateRandom');
var validate = require('../validate/validate')

router.get("/random", function(req, res) {
    res.send(generateRandom());
});

router.post("/solver", function(req, res) {
    res.send(solver(req.body.grid)); 
});

router.post("/validate", function(req, res) {
    res.send(validate(req.body.grid)); 
});


module.exports = router;