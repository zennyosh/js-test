console.log("Hello World!");

/**
 * https://github.com/fvdm/nodejs-epo-ops/blob/develop/epo-ops.js
 *
 */

$(function(){
  consumer_key = "mavrkKzZhP0dMNNbXnrAzkCmkywUac2f";
  consumer_secret = "2klF2fBMMsDYqdf2";

  key = consumer_key + ":" + consumer_secret;
  console.log("key = " + key);

  base64 = window.btoa(key);
//base64 = Buffer.from (key) .toString ('base64');

  console.log(base64);
});

$(function(){
  $('#txt').html("key = " + key + "<br>" + "enc = " + base64);
  $('#txt').css('color', '#0000FF');
});
