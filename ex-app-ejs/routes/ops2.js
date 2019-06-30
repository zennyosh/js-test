var express = require('express');
var router = express.Router();

let request = require('request');
let http = require('http');

var token = '';
var msg;

router.get('/', (req, res,next) => {
  var n = req.query.id;
  var base64 = '';
  console.log("n=" + n);

  if (n == 0) {
    console.log("Auth");
//    consumer_key = "my-key";
//    consumer_secret = "my-secret-key";
    const consumer_key = "FduWGKkGiDP7pfEzCcNuu6ivY4VywAQR";
    const consumer_secret = "YUHO4oUxsS26o0KQ";

    key = consumer_key + ":" + consumer_secret;
    console.log("key = " + key);

    base64 = Buffer.from (key) .toString ('base64');

    console.log(base64);
    var options = {
            url: 'https://ops.epo.org/3.2/auth/accesstoken',
            method: 'POST',
            headers: {
                    "Authorization" : "Basic " + base64,
                    "Content-Type" : "application/x-www-form-urlencoded"
            },
            json: true,
            body: "grant_type=client_credentials"
    }

    request(options, function (error, response, body) {
            console.log(body);
            token = body.access_token;
            console.log(token);
    })

  }

  console.log(token);

  if (token != '' ) {
    var options = {
      url: "https://ops.epo.org/3.2/rest-services/published-data/publication/epodoc/JP201810468" + n + "/abstract",
      method: 'GET',
      headers: {
              "Authorization" : "Bearer " + token
      },
          //      url: "https://ops.epo.org/3.2/rest-services/published-data/publication/epodoc/EP1000000/description",
          //      url: "https://ops.epo.org/3.2/rest-services/published-data/publication/epodoc/" + docnumber + "/fulltext",
      json: true
    }

    request(options, function (error, response, body) {
          console.log(body);
          gg = body['ops:world-patent-data']['exchange-documents']['exchange-document'][0];
//          msg = gg.abstract;
          console.log(gg);

    });
    res.json(msg);
  }
});

module.exports = router;
