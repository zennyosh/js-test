var express = require('express');
var router = express.Router();

var http = require('https');
var parseString = require('xml2js').parseString;

router.get('/', (req, res,next) => {
  var opt = {
    host: 'news.yahoo.co.jp',
    port: 443,
    path: '/pickup/rss.xml'
  };
  http.get(opt, (res2) => {
    var body = '';
    res2.on('data', (data) => {
      body += data;
//      console.log('body=' + body);
    });
    res2.on('end', () => {
      parseString(body.trim(), (err, result) => {
        var data = {
          title: 'Hello!',
          content: result.rss.channel[0].item,
        };
        res.render('rss', data);
      });
    })
  });
});

module.exports = router;
