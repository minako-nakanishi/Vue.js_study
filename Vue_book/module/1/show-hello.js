
/** Vue.component()の基本構造 */

// コンポーネント
Vue.component('show-hello',{
    // テンプレート部分

    // バッククオートで囲むと改行での記載が可能となる
    template: `
        <div>
            <span>{{name}}</span>：<span>{{price}}円</span>
        </div>`,
    // dataオプション
    data: function(){
        return{
        name: 'スマホケース' ,
        price: 980
       }
    },
    // メソッド
    methods:{
    
    },
    // 算出プロパティ
    computed: {

    },

    // ウォッチャ
    watch:{

    },

    // フィルタ
    filters:{

    },

    // ライフサイクルハック
    created: function(){

    }
});