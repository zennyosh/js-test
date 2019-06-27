var express = require('express');
var router = express.Router();

var data = [
  {name:'Taro', age:35, mail:'taro@yamada'},
  {name:'Hanako', age:29, mail:'hanako@hoge'},
  {name:'Sachiko', age:41, mail:'sachiko@pe'},
];

/* GET home page. */
router.get('/', (req, res, next) => {
  var n = req.query.id;
  res.json(data[n]);
});

module.exports = router;
