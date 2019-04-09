Vue.component('my-product',{
  // (1) ボタンがクリックされたら子コンポーネントの「clickHandler」を呼び出す
  template: `
  <div>
    <button v-on:click="clickHandler">値下げする</button>　{{price}}円
  </div>`,

  props: ['price'],

  methods:{
    // (2) ボタンのクリックイベントハンドラ
    clickHandler: function(){
      // (3) 子コンポーネントに「child-click」イベントを発生させる
      var discount = 0; //値引き費
      if(this.price - 50 < 500){ //表示値段が550円以下の場合はここを通る
        discount = this.price - 500;
      }else{  // 表示値段が550円より大きい場合はここを通る
        discount = 50
      }
      this.$emit('child-click',discount);
    }
  }
});
