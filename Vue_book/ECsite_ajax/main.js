/** 数値を通貨書式へ変更 */
Vue.filter('number_format', function(val){
    return val.toLocaleString();
})

/** 商品一覧コンポーネント */
var app = new Vue({
    el: '#app', // 商品が掲載されている領域
    data:{
        //count: 0, // 表示中の商品数
        showSaleItem: false, //「セール対象」のチェック状態(true: チェック有り、false:チェック無し)
        showDelvFree: false, //「送料無料」のチェック状態
        sortOrder: 1,
        
        /** 商品リスト */
        products:[],
        /** エラーの有無 */
        isError: false,
        /** メッセージ */
        message: ''
    },

    // ライフサイクルハック
    created: function(){
        // JSONPのURL
        var url = 'products2.js';
        // 非同期で通信でJSONPを読み込む
        $.ajax({
            url: url, // 通信先URL
            type: 'GET', // 使用するHTTPメソッド
            dataType: 'jsonp', // レスポンスのデータタイプ
            jsonp: 'callback', // クエリパラメータの名前
            jsonpCallback: 'products' // コールバック関数の名前
        })
        .done(function(data, textStatus, jqXHR){
            this.products = data;
        }.bind(this))
        .fail(function(jqXHR, textStatus, errorThrown){
            console.log("通信が失敗しました")
            this.isError = true;
            this.message = '商品リストの読み込みに失敗しました。';
        }.bind(this));
    },

    computed:{
        // 絞り込み後の商品を算出するプロパティ
        filteredList: function(){
            var newList = []; // 絞り込み後の商品リストを格納する配列
            for(var i=0; i<this.products.length; i++){
                var isShow = true; // 表示対象か判定するフラグ
                if(this.showSaleItem && !this.products[i].isSale){ // 「セール対象」チェック有りで、セール対象商品ではない場合
                    isShow = false; // 商品を非表示にする
                }
                if(this.showDelvFree && this.products[i].delv > 0){ //「送料無料」チェック有りで、送料有り商品の場合
                    isShow = false;
                }
                if(isShow){ //表示対象の商品だけを新しい配列に追加する.
                    newList.push(this.products[i]);
                }
            }
            if(this.sortOrder == 2){
                newList.sort(function(a,b){
                    return a.price - b.price;
                });
            }
            return newList; //絞り込み商品リストを返す
        },
        // 絞り込み後の商品リストの件数を返す算出プロパティ
        count: function(){
            return this.filteredList.length
        }
    }
});