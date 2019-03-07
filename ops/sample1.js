console.log("Hello World!");

/**
 * https://github.com/fvdm/nodejs-epo-ops/blob/develop/epo-ops.js
 *
 * Base64 encode a string
 *
 * @param {String} str
 * @return {void}
 */
function base64_encode (str) {
	  return new Buffer.from (str) .toString ('base64');
}

consumer_key = "mavrkKzZhP0dMNNbXnrAzkCmkywUac2f";
consumer_secret = "2klF2fBMMsDYqdf2";

key = consumer_key + ":" + consumer_secret;
console.log(key);
//base64 = base64_encode (key);
base64 = Buffer.from (key) .toString ('base64');

console.log(base64);

