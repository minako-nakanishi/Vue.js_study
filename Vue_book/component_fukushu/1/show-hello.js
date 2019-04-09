// コンポーネントの定義にはVue.component()を使用
// show-helloがコンポーネント名
// HTMLのshow-helloタグ内に以下のtemplateが入る
// グローバルスコープにコンポーネントを登録したこととなる
Vue.component('show-hello',{
  template: '<p>Hello Vue!</p>'
})
