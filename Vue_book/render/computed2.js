
var app = new Vue({
    el: '#computed2',
    data: {
        show: true
    },

    methods:{
        // 現在時刻を算出するメソッド
        now1: function(){
            return (new Date()).toLocaleString();
        }
    },

    computed: {
        // 現在時刻を算出するメソッド
        now2: function(){
            return (new Date()).toLocaleString();
        }
    }
});