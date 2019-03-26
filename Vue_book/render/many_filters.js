/** 複数のフィルターを実装する */
var filters = new Vue({
    el: '#appfilter',
    data:{
        price: 5000
    },

    filters:{
        // 金額を3桁カンマに編集するフィルター
        number_format: function(val){
            return val.toLocaleString(); // 指定されたフォーマットへ変更
        },
        // 金額の後ろに単位をつけるフィルター
        unit: function(val){
            return val + '円';
        }

    }
})