var app = new Vue({
    el: '#calendar',
    data:{
        arrival_date: null
    },

    // コンポーネントのインスタンスが生成された直後の挙動
    created: function(){
        this.arrival_date = this.formatDate(new Date());
    },
    // メソッドの作成
    methods: { //日付をYYYY-MM-DDに整形するメソッド
        formatDate: function(dt){
           var y = dt.getFullYear();
           var m = ('00' + (dt.getMonth()+1)).slice(-2);
           var d = ('00' + dt.getDate()).slice(-2);
           var result = y + '-' + m + '-' + d;
           console.log(result)
           return result;
        }
    }
})