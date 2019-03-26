
var app = new Vue({
    el: '#app',
    data:{
        point: {x:0, y:0} //初期値を設定
    },

    created: function(){
        // イベントハンドラを登録
        addEventListener('mousemove', this.mousemoveHandler);
    },

    beforeDestroy: function(){
        // イベントを解除
        removeEventListener('mousemove', this.mousemoveHandler);
    },

    methods: {
        mousemoveHandler: function($event){
            this.point.x = $event.clientX;
            this.point.y = $event.clientY;
        }
    }
})