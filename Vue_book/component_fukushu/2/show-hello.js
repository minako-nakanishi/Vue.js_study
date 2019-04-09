/** コンポーネント部分 */
Vue.component('show-hello',{
  // テンプレート
  template: '<p>{{message}}</p>',
  // dataオプション
  // {プロパティ名：値}形式のオブジェクトを返す関数とする
  data:function(){
    return{
      message: 'Hello, Vue!'
    }
  },
  // メソッド
  methods: {

  },
  // 算出プロパティ
  computed: {

  },
  // ウォッチャ
  watch: {

  },
  // フィルタ
  filter: {

  },
  // ライフサイクルハック
  created: function() {

  }
});
