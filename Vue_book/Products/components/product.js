/** 商品コンポーネント */
// 商品一覧でのみ使用するため、ローカルスコープに登録
var product = {
  template: `
  <div class="item">
    <figure class="image">
      <template v-if="product.isSale">
        <div class="status">SALE</div>
      </template>
      <img v-bind:src="product.image" alt="">
      <figurecaption v-html="product.name"></figurecaption>
    </figure>
    <div class="detail">
      <div class="price"><span>{{product.price | number_format}}</span>円(税込)</div>
      <template v-if="product.delv == 0">
        <div class="shipping-fee none">送料無料</div>
      </template>
      <template v-else>
        <div class="shipping-fee"> +送料{{product.delv | number_format}} 円</div>
      </template>
    </div>
  </div>`,

  props:['product']

};
