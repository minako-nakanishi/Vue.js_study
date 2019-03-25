// 結びつけたいHTML要素をelのvalueに指定
var ball = new Vue({
    el: '#ball', //CSSセレクタで指定
    // el: document.querySelector('#ball'); // 関数で指定

    // コンポーネントが保持するデータを定義
    data:{
        pos:{x: 0, y: 0}, //座標
        radius: 20 //半径
    },

    methods:{
        move: function(a,b){
            this.pos.x += a;
            this.pos.y += b;
        }
    }

});

ball.move(10,100)
ball.radius = 140;