<template>
  <div class="hello">
    <h1>{{title}}</h1> <!-- App.vueでタイトルが変更された場合、ここへ反映される(親→子) -->
    <p>{{message}}</p>
    <hr />
    <div>
      <p>Number: {{num}}</p>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'HelloWorld',  //コンポーネント名
    // HelloWorldタグの属性
    props:{
      title: String,
      num:{
        type: Number,
        default: 100,
        validator: function(value){
          return value == parseInt(value) && value >= 0 && value <= 100;
        },
      },
    },
    // messageとinputは表示が変わるため、dataへ移設
    data: function(){
      return {
        message: 'バリデーションチェック'
      };
    }
  }
</script>

<style>
  div{
    margin: 0px;
    padding: 0px;
    text-align: left;
  }
  h1{
    font-size: 72pt;
    font-weight: bold;
    text-align: right;
    letter-spacing: -8px;
    color: #f0f0f0;
    margin: 0px;
  }
  p{
    margin: 0px;
    color: #666;
    font-size: 16pt;
  }
</style>
