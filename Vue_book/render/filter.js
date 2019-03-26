/**  グローバルスコープにフィルター登録 */
//マスタッシュでテンプレートにバインドしたデータがテキストに出力する前に,何らかの加工を加える事ができる
// filterの第一引数は「フィルター名」、第二引数は関数オブジェクト.
// new Vue()を実行するより前に定義する.
Vue.filter('number_format', function(val){
    return val.toLocaleString();
});

/** Vueのインスタンス化 */
var appfilter = new Vue({
    el: '#appfilter',
    data:{
        price: 1000
    }
})