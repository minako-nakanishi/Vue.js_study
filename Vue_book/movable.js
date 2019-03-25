// 「動くモノ」クラスの定義
var Movable = function(x,y){
    // xとyの座標
    this.pos = { // Movableクラスのposオブジェクト
        x: x,
        y: y
    };

    this.move = function(a,b){
        this.pos.x += a; // 動いた後のxの場所
        this.pos.y += b; //動いた後のyの場所 
    };
}

// Movableのインスタンスを生成(最初の座標値を指定)
var ball = new Movable(10,50);

console.log(ball.pos.x); //10
console.log(ball.pos.y); //50

ball.move(5,3);
console.log(ball.pos.x); //15
console.log(ball.pos.y); //53