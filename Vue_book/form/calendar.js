var app = new Vue({
    el: '#calendar',
    data:{
        arrival_date: null, //到着希望日時
        min_date: null //選択可能な最短日時
    },

    // コンポーネントのインスタンスが生成された直後の挙動
    created: function(){
        this.arrival_date = this.formatDate(new Date());
        this.min_date = this.arrival_date; //今日以前の日付は選択できないようにした.
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