
/** Vue.component()の基本構造 */

// コンポーネント
Vue.component('show-hello',{
    // テンプレート部分
    template: '<p>{{message}}</p>',
    // dataオプション
    data: function(){
        return{
        message: 'Hello, Vue!!!!!!'
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