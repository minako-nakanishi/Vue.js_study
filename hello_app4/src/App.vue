<!-- Vue.jsのコンポーネントを定義しているファイル -->
<template>
  <HelloWorld title="Hello"/> <!-- HelloWorldコンポーネントの配置 -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue' // HelloWorld.vueの読み込み

export default { //コンポーネントの設定内容をまとめてエクスポート
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
