
var select = new Vue({
    el: '#select',
    data:{
        answer: ''
    }
});

var select_some = new Vue({
    el: '#select_some',
    data:{
        category: [] //選択したものを配列に入れる
    },

    computed:{
        selectedCategory: function(){
            return this.category.length>=1? this.category.join() : '';
        }
    }
})