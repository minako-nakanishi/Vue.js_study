var app = new Vue({
  el: '#app',
  data:{
    price: 1000
  },
  methods:{
    // (5) 子から呼び出されるメソッド
    priceDown: function(discount){
    if(discount == undefined)discount = 100;
      // 値下げが指定されていない場合は100円とする
      this.price -= discount;
    }
  }

});
