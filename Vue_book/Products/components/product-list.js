// 商品一覧コンポーネント
Vue.component('product-list',{
  template: `
  <div class="container>
    <product-header
     v-bind:count="filteredList.length"
     v-bind:showSaleItem="showSaleItem"
     v-bind:showDelvFree="showDelvFree"
     v-bind:sortOrder="sortOrder"
     v-on:showSaleItemChanged="showSaleItem=!showSaleItem"
     v-on:showDelvFreeChanged="showDelvFree=!showDelvFree"
     v-on:sortOrderChanged="sortOrderChanged">
    </product-header>

    <div class="list">
      <product
        v-for="product in filteredList"
        v-bind:product="product"
        v-bind:key="product.id">
      </product>
    </div>
  </div>"`,

  components:{
    'product-header': productHeader,
    'product': product
  },
  props: ['products'],

  data: function(){
    return{
      // [セール対象]のチェック状態(true: チェックあり、false: チェックなし)
      showSaleItem: false,
      // [送料無料]のチェック状態(true: チェックあり、false: チェックなし)
      showDelvFree: false,
      // [並び替え]の選択肢
      sortOrder: 1
    }
  },

  methods:{
    // [並び替え]の選択肢が変わった時に呼び出される
    sortOrderChanged: function(order){
      this.sortOrder = order;
    }
  },

  computed:{
    // 絞り込み後の商品リストを返す算出プロパティ
    filteredList: function(){
      // 絞り込みのリストを格納する新しい配列
      var newList = [];
      for(var i=0; i<this.products.length; i++){
        // 表示対象かどうかを判定するフラグ
        var isShow = true;
        // i番目の商品が表示対象かどうか判定する
        if(this.showSaleItem && !this.products[i].isSale){
          isShow = false
        }
        if(this.showDelvFree && this.products[i].delv > 0){
          isShow = false
        }
        // 表示対象の商品だけを新しい配列に入れる
        if(isShow){
          newList.push(this.products[i]);
        }
      }
      // 新しい配列を並び替える
      if(this.sortOrder == 1){
        // 元の順番にpushしているため何もしなくて良い
      }else if(this.sortOrder == 2){
        newList.sort(function(a,b){
          return a.price - b.price;
        });
      }
      return newList;
    }
  }
});
