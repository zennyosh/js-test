//
// sample code (Node.js)
//

console.log("Hello World!");

consumer_key = "mavrkKzZhP0dMNNbXnrAzkCmkywUac2f";
consumer_secret = "2klF2fBMMsDYqdf2";

key = consumer_key + ":" + consumer_secret;
console.log("key = " + key);

base64 = Buffer.from (key) .toString ('base64');

console.log(base64);
