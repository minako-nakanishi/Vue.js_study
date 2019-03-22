// todo-item と呼ばれる新しいコンポーネントを定義
Vue.component('todo-item',{
    // todo-item コンポーネントはカスタム属性のような "プロパティ" で受け取る。
    // このプロパティは todo と呼ばれる。
    props:['todo'],
    template: '<li>{{todo.text}}</li></li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            {id: 0, text: 'Vegetables'},
            {id: 1, text: 'Cheese'},
            {id: 2, text: 'Whatever else humans are supposed to eat'}
        ]
    }
})