
var watcher = new Vue({
    el:'#watcher',
    data:{
        message: '',
        stock: 10
    },

    methods:{
        onDeleteItem: function(){
            this.stock--;
        }
    },

    watch:{ //HTMLに条件分岐を書かなくて良い.
        // 在庫数(stock)が変化した時に呼び出されるハンドラ
        stock: function(newStock, oldStock){
            if(newStock == 0){this.message = '売り切れ';}
        }
    }
})