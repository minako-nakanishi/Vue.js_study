
Vue.component('my-product',{
    template: `
    <div>
        <span>{{name}}</span>：<span>{{price}}円</span>
    </div>`,
    props:['name', 'price'] // nameとpriceという名前のデータを受け取る
});