/** プロジェクトをWebアプリケーションとして起動した際に
最初に実行されるスクリプト */

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false // Vue起動時に表示されるチップス情報をON/OFFする機能.

// Vueオブジェクトの作成
new Vue({
  render: h => h(App),
}).$mount('#app')
