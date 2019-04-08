
/** Vue.component()の基本構造 */

// コンポーネント
Vue.component('show-hello',{
    // テンプレート部分
    template: '<div><span>{{name}}</span>：<span>{{price}}円</span></div>', // 全体を単一のタグで閉じる
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