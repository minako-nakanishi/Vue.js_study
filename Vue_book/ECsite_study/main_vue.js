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
        products:[
            {id: 1,name: 'Michael<br>スマホケース', price: 1580, image: 'images/01.jpg', delv: 0, isSale: true},
            {id: 2,name: 'Raphael<br>スマホケース', price: 1580, image: 'images/02.jpg', delv: 0, isSale: true},
            {id: 3,name: 'Gabriel<br>スマホケース', price: 1580, image: 'images/03.jpg', delv: 240, isSale: true},
            {id: 4,name: 'Uriel<br>スマホケース', price: 980, image: 'images/04.jpg', delv: 0, isSale: true},
            {id: 5,name: 'Ariel<br>スマホケース', price: 980, image: 'images/05.jpg', delv: 0, isSale: false},
            {id: 6,name: 'Azrael<br>スマホケース', price: 1580, image: 'images/06.jpg', delv: 0, isSale: false}
        ]
    },

    watch:{
        // セール対象チェックボックスの状態を監視するウォッチャ
        showSaleItem: function(newVal, oldVal){
            console.log('showSaleItemウォッチャが呼び出されました');
        },
        // 送料無料のチェック状態を確認するウォッチャ
        showDelvFree: function(newVal,oldVal){
            console.log('showDelvFreeウォッチャが呼び出されました');
        }
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