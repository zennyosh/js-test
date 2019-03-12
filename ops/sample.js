$(function(){
  console.log("Hello World!");
});

/**
 * https://github.com/fvdm/nodejs-epo-ops/blob/develop/epo-ops.js
 *
 */
var token = "";
consumer_key = "mavrkKzZhP0dMNNbXnrAzkCmkywUac2f";
consumer_secret = "2klF2fBMMsDYqdf2";
key = consumer_key + ":" + consumer_secret;
console.log("key = " + key);
base64 = window.btoa(key);
console.log(base64);

$(function(){
  $('#btn').on('click', function() {
    $('#txt').html("認証中");

    if (token) {
      $('#txt').html("認証済");
      console.log(token);
    } else {

    $.ajax({
      url: "https://ops.epo.org/3.2/auth/accesstoken",
      type: "POST",
      headers: {
        "Authorization" : "Basic " + base64,
        "Content-Type" : "application/x-www-form-urlencoded"
      },
      data: "grant_type=client_credentials",
      dataType : 'json',
    }).done(function(data) {
      console.log(data.access_token);
//      console.log(data);
      if (data.access_token) {
        token = data.access_token;
      } else {
        alert('該当するデータが見つかりませんでした');
      }
    }).fail(function(data) {
      console.log(data);
      if (data.status = "401") {
        alert('認証に失敗しました:' + data.status);
      } else {
        alert('通信に失敗しました:' + data.status);
      }
    }).always(function(data) {
      // 完了時
    });

    $('#txt').html("key = " + key + "<br>" + "enc = " + base64);
  }
  });
});


$(function(){
  $('#search').on('click', function() {
//    if (token) {
//      $('#txt').html("認証済");
//      console.log(token);
//    } else {
console.log(token);

    $.ajax({
      url: "https://ops.epo.org/3.2/rest-services/published-data/publication/docdb/abstract",
//      url: "https://ops.epo.org/3.2/rest-services/published-data/publication/docdb/" + $('#number').val() + "/abstract",
//      type: "GET",
//      headers: {
//        "Authorization" : "Bearer " + token
//      },
      type: "POST",
      headers: {
        "Authorization" : "Bearer " + token,
//        "Content-Type" : "application/json"
        "Content-Type" : "text/plane"
      },
      data: "EP1000000",
      dataType : 'json',
    }).done(function(data) {
//      console.log(data.access_token);
      console.log(data);
      if (data.access_token) {
        token = data.access_token;
      } else {
        alert('該当するデータが見つかりませんでしたよ');
      }
    }).fail(function(data) {
      console.log(data);
      if (data.status = "401") {
        alert('認証に失敗しましたよ:' + data.status);
      } else {
        alert('通信に失敗しましたよ:' + data.status);
      }
    }).always(function(data) {
      // 完了時
    });

//    $('#txt').html("key = " + key + "<br>" + "enc = " + base64);
//  }
  });
});


$(function(){
  $('#txt').css('color', '#0000FF');
});
