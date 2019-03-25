//元の書式
var ball = {pos:{x:10,y:50}};

// 改行とインデントを使用して見やすく記述
// ボールオブジェクト
var ball = {
    pos:{
       x: 10,
       y: 50
    },

    // ボールを動かす関数
    move: function(a,b){
        this.pos.x += a;
        this.pos.y += b;
    }
}

console.log(ball.pos.x);
console.log(ball.pos.y);

ball.move(5,3);

console.log(ball.pos.x);
console.log(ball.pos.y);