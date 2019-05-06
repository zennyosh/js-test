//
// https://kkblab.com/make/javascript/acc.html
//

var aX = 0, aY = 0, aZ = 0;                     // 加速度の値を入れる変数を3個用意
var context;

function begin() {
  var canvas = document.getElementById('canvas'); // canvas要素を取得
  context = canvas.getContext('2d');          // 絵を描く部品を取得
}

// 加速度センサの値が変化したら実行される devicemotion イベント
window.addEventListener("devicemotion", (dat) => {
  aX = dat.accelerationIncludingGravity.x;    // x軸の重力加速度（Android と iOSでは正負が逆）
  aY = dat.accelerationIncludingGravity.y;    // y軸の重力加速度（Android と iOSでは正負が逆）
  aZ = dat.accelerationIncludingGravity.z;    // z軸の重力加速度（Android と iOSでは正負が逆）

  if (aX==null) aX = 0;
  if (aY==null) aY = 0;
  if (aZ==null) aZ = 0;
});

// 指定時間ごとに繰り返し実行される setInterval(実行する内容, 間隔[ms]) タイマーを設定
var timer = window.setInterval(() => {
  displayData();      // displayData 関数を実行
  drawBall();         // drawBall 関数を実行
}, 33);               // 33msごとに（1秒間に約30回）

// データを表示する displayData 関数
function displayData() {
  var txt = document.getElementById("txt");   // データを表示するdiv要素の取得
  txt.innerHTML = "x: " + aX + "<br>"         // x軸の値
                + "y: " + aY + "<br>"         // y軸の値
                + "z: " + aZ;                 // z軸の値
}

// canvasにボール（円）を描く drawBall 関数
function drawBall() {
  var centerX = canvas.width  / 2;            // canvasの中心のX座標
  var centerY = canvas.height / 2;            // canvasの中心のY座標
  var ballRad = 50;                           // ボールの半径
  var ballColor = "rgb(0, 0, 255)";           // ボールの色
  var g  = 9.80665;                           // 1Gの時の重力加速度[m/s^2]
  var d  = centerX / g;                       // 1m/s^2 あたりでボールが動く量
  var os = navigator.platform;                // OS名の取得
  if(os === "iPhone" || os === "iPad" || os === "iPod") {     // iOSなら
      aX *= -1;                               // 加速度の正負を反転させる
      aY *= -1;                               // a *= b は a = a * b の意味
      aZ *= -1;
  }
  context.clearRect(0, 0, canvas.width, canvas.height);   // canvasの内容を消す clearRect(x, y, w, h)
//context.fillRect(150,60, 20, 20);
//context.fillRect(centerX - d * aX, centerY + d * aY, 20, 20);
//console.log(centerX - d * aX, centerX - d * aY);
  context.beginPath();                        // 描画開始
  context.arc(centerX - d * aX,               // 円を描く arc(x, y, 半径, 開始角度, 終了角度)
              centerY + d * aY,               // 加速度xとyに、1m/s^2あたりで動く量dをかける
              ballRad - 3 * aZ,               // ボールの半径（zに掛けた係数3はテキトー）
              0, 2 * Math.PI);                // 角度の単位はラジアン（2π = 360度）で指定
  context.fillStyle = ballColor;              // 塗りつぶす色の設定
  context.fill();                             // 塗る
}
