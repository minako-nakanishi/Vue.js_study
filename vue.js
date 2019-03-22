/** 文言の出力 */ 
var app = new Vue({
    el: '#app', //divタグのid
    data: {
        message: 'Hello, Vue!' //HTMLの{{message}}に入れるも文言をvalueに指定
    }
});

/** title属性へのバインディング */
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleDateString() //マウスオーバー時の日付を表示
    }
});

/** v-ifで指定した値をtrue/falseで表示/非表示にする */
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
        // seen: false
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [ //配列の中にfor文で出力したいものを記載
            {text: 'Learn JavaScript'},
            {text: 'Learn Vue'},
            {text: 'Build something awesome'}
         ]
    }
})



