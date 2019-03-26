/** ローカルスコープにフィルター登録 */

// Vueをインスタンス化
var localfilter = new Vue({
    el: '#appfilter',
    data:{
        price: 3000
    },

    // filtersオプションで定義
    filters:{
        number_format: function(val){
            return val.toLocaleString();
        }
    }
});