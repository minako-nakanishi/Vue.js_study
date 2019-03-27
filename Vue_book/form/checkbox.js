
var tantai = new Vue({
    el: '#tantai',
    data:{
        answer: "はい"
    }
});

var fukusu = new Vue({
    el: '#fukusu',
    data:{
        answer2: [] //配列を用意
    },

    computed:{
        selection: function(){
           return this.answer2.join();
        }
    }
})