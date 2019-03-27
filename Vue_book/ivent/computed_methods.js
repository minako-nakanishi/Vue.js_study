
var app = new Vue({
    el: '#app',
    data:{
        show: true
    },

    methods: {
        nowMethod: function(){
            return (new Date());
        }
    },

    computed:{ //キャッシュがかかっている
        nowConputed: function(){
            return (new Date());
        }
    }
})