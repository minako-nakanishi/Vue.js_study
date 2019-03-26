
var resize = new Vue({
    el: '#resize',
    data:{
        width: window.innerWidth,
        height: window.innerHeight
    },

    create: function(){
        // イベントハンドラを登録
        addEventListener('resize',this.resizeHandler);
    },

    beforeDestroy: function(){
        // イベントハンドラを解除
        removeEventListener('resize',this.resizeHandler);
    },

    method: {
        // イベントハンドラ
        // $event→ イベントオブジェクトを受け取る
        // resizeイベントの発生元はwindowオブジェクトなので、targetにはwindowオブジェクトが代入される
        resizeHandler: function($event){
            // 現在のウィンドウサイズでプロパティを更新
            this.width = $event.target.innerWidth;
            this.height = $event.target.innerHeight;
        }
    }
});