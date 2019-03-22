
var user = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello, Vue.js!'
    },
    methods: { //メソッドはmethods内に記述
        reverseMessage: function(){ //メソッドはメソッド名をkey, 関数をvalueとして記述
            this.message = this.message.split('').reverse().join('')
        }
    }
})