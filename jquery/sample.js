$(function(){
  console.log('read jQuery File!');
});

var aX = 0, aY = 0, aZ = 0;                   // 加速度の値を入れる変数を3個用意

// 加速度センサの値が変化したら実行される devicemotion イベント
window.addEventListener("devicemotion", (dat) => {
  aX = dat.accelerationIncludingGravity.x;    // x軸の重力加速度（Android と iOSでは正負が逆）
  aY = dat.accelerationIncludingGravity.y;    // y軸の重力加速度（Android と iOSでは正負が逆）
  aZ = dat.accelerationIncludingGravity.z;    // z軸の重力加速度（Android と iOSでは正負が逆）
});

// 指定時間ごとに繰り返し実行される setInterval(実行する内容, 間隔[ms]) タイマーを設定
var timer = window.setInterval(() => {
  displayData();      // displayData 関数を実行
}, 33);               // 33msごとに（1秒間に約30回）

// データを表示する displayData 関数
function displayData() {
  var newText = "x: " + aX + "<br>"         // x軸の値
              + "y: " + aY + "<br>"         // y軸の値
              + "z: " + aZ;                 // z軸の値
  $('#txt').html(newText);
}

$(function(){
  $('#js-target').css('color', '#ff0000');
  $('#txt').css('color', '#0000FF');
});
