
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
});

var select_dou = new Vue({
    el: '#select_dou',
    data:{
        hyouka: '',

        options:[
            {code: 'ans1', label:'エクセレント'},
            {code: 'ans2', label:'まあまあ'},
            {code: 'ans3', label:'どちらかというと良くない'},
            {code: 'ans4', label:'だめぽ'}
        ]
    }
})