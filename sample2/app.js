function begin() {
	// 背景のCnavasを取得
	backgamen = document.getElementById('back');
	cb = backgamen.getContext('2d');

	// 塗りを設定
	cb.fillStyle = '#CCCCCC';

	// 線の設定
	cb.strokeStyle = '#333333';
	cb.lineWidth = 3;

	// 四角を塗る
	cb.fillRect(0,0,20,20);

	// 四角の枠線を描く
	cb.strokeRect(0,0,20,20);

	// 左壁
	x = 0;
	y = 0;

	for (i=0; i < 12; i++) {
		cb.fillRect(x,y,20,20);
		cb.strokeRect(x,y,20,20);
		y += 20;
	}

	// 右壁
	x = 220;
	y = 0;

	for (i=0; i < 12; i++) {
		cb.fillRect(x,y,20,20);
		cb.strokeRect(x,y,20,20);
		y += 20;
	}
}

function start() {
	gamegamen = document.getElementById('game');
	cg = gamegamen.getContext('2d');

	cg.clearRect(0,0,239,239);

	ix = 4;
	iy = 0;

	draw(cg, ix, iy);
}

function draw(c, bx, by) {
	c.fillStyle = '#CC00CC';
	c.strokeStyle = '#333333';
	c.lineWidth = 3;

	c.fillRect(bx*20, by*20, 20, 20);
	c.strokeRect(bx*20, by*20, 20, 20);
}

function erase(c, bx, by) {
	c.globalCompositeOperation = 'destination-out';
//	draw(c, bx, by);
	c.lineWidth = 4;
	c.fillRect(bx*20, by*20, 20, 20);
	c.strokeRect(bx*20, by*20, 20, 20);
	c.globalCompositeOperation = 'source-over';
}


function move(e) {
	gamegamen = document.getElementById('game');
	cg = gamegamen.getContext('2d');

	// 今のブロックを消す
	erase(cg, ix, iy)

	if (e.keyCode == 37) {
		// 左に移動
		ix--;
	}
	if (e.keyCode == 38) {
		// 上に移動
		iy--;
	}
	if (e.keyCode == 39) {
		// 右に移動
		ix++;
	}
	if (e.keyCode == 40) {
		// 下に移動
		iy++;
	}
	draw(cg, ix, iy);
}
