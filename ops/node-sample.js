//
// sample code (Node.js)
//

console.log("Hello World!");

consumer_key = "my-key";
consumer_secret = "my-secret-key";

key = consumer_key + ":" + consumer_secret;
console.log("key = " + key);

base64 = Buffer.from (key) .toString ('base64');

console.log(base64);
