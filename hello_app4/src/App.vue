<!-- Vue.jsのコンポーネントを定義しているファイル -->
<template>
  <div id="app">
    <!-- v-bind:titleのあたいはdataのmessage(HELLO)にバインドされている -->
    <HelloWorld v-bind:title="message" v-on:result-event="appAction"/> <!-- HelloWorldコンポーネントの配置 -->
    <hr />
    <p>{{result}}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue' // HelloWorld.vueの読み込み

export default { //コンポーネントの設定内容をまとめてエクスポート
  name: 'app',
  components: {
    HelloWorld
  },
  data: function(){
    return {
      message: 'HELLO',
      result: 'no-event'
    };
  },
  methods:{
    // doAction: function(){
    //   var input = prompt("new title:");
    //   this.message = input
    // }
    appAction: function(message){
      this.result = '(*** you send: "' + message + '".***)';
    }
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
