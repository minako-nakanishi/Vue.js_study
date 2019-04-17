/** プロジェクトをWebアプリケーションとして起動した際、
最初に実行されるスクリプト */
import Vue from 'vue' // Vueモジュールの読み込み
import App from './App.vue' // App.vueの読み込み

Vue.config.productionTip = false // Vue起動時に表示されるチップ情報をON/OFFへ変換可能

new Vue({
  render: h => h(App), //App.jsの内容をレンダリングで出力
}).$mount('#app')
