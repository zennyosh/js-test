var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res,next) => {
  var msg = '???';
  if (req.session.message != undefined){
    msg="Last msg: " + req.session.message;
  }
  var data = {
    title: 'Hello',
    content: msg
  };
  res.render('hello', data);
});

router.post('/post', (req, res,next) => {
  var msg = req.body['message'];
  req.session.message = msg;
  var data = {
    title: 'Hello',
    content: "Last msg: " + req.session.message
  };
  res.render('hello', data);
});

module.exports = router;
