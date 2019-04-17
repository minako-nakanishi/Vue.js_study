<template>
  <div class="hello">
    <h1>{{title}}</h1>
    <p>{{message}}</p>
    <hr />
    <div>
      <textarea v-model="fomula" cols="40" rows="5"></textarea>
    </div>
    <div>
      <button v-on:click="doAction">Calc</button>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'Calc',
    props:{
      title: String //後に更新などの操作をすることは無いのでpropsへ格納
    },
    data: function(){ //messageとfomulaは常に値が変更されるためdataへ格納
      return {
        message: 'Enter expression: ',
        fomula: '0'
      };
    },
    methods:{
      doAction: function(){
        var arr = this.fomula.trim().split('¥n'); //余分な空白を削除後,改行で分割し配列へ格納
        var last = arr.pop(); //arrの最後の行を取り出し変数へ格納
        var fn = '';
        for(var n in arr){ //配列arrをforで回す.
          if(arr[n].trim() != ''){
            fn += 'var' + arr[n] + ';'; //arrの要素が空ではない場合、変数fnへ格納.
          }
        }
        fn += 'return' + last + ';'; //ループを抜けた後に最後の行を追加

        var exp = 'function f(){' + fn + '} f();'; //fnを関数で定義し実行するスクリプト
        var ans = eval(exp); //上記関数をスクリプトで実行
        this.message = 'answer:' + ans; //計算結果をmessageへ格納
        var re = arr.join(';').trim(); //配列arrを;で繋げて、空白を削除する.
        if(re != ''){re += ';'}; //reが空ではない場合、;で繋げる.
        re += last; //最後の行を追加
        this.$emit('result-event',re,ans); //result-eventを呼び出して親ノードへ渡す.
      }
    }
  }
</script>
