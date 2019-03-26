
var click = new Vue({
    el: '#click',
    data:{
        stock: 10
    },

    methods: {
        onDeleteItem: function(){
            this.stock--; //一つずつ削除する.
        }
    }
})