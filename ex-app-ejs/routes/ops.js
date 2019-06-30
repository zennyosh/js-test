var express = require('express');
var router = express.Router();

let request = require('request');
let http = require('http');

var token = '';
var msg;

router.get('/', (req, res,next) => {
  var data = {
    title: 'OPS',
    content: msg
  };
  res.render('ops', data);
});

module.exports = router;
