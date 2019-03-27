
var app = new Vue({
    el: '#app',
    data:{
        // 初期値は現在の年に指定
        year: (new Date()).getFullYear()
    }
});

var app2 = new Vue({
    el: '#app2',
    data:{
        year2: (new Date()).getFullYear()
    },

    // 全角でも、入力した時点でDOMに反映される
    methods:{
        yearInputHandler: function($event){
            this.year2 = $event.target.value;
        }
    }
})