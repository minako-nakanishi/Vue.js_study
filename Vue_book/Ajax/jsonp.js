// JSONPのURL
var url = 'products2.js';
// 非同期通信でJSONPを読み込む
$.ajax({
    url: url, //通信先URL
    type: 'GET', //使用するHTTPメソッド
    dataType: 'jsonp', //レスポンスのデータタイプ
    jsonp: 'callback', //クリエイターパラメーターの名前
    jsonpCallback: 'products' //コールバック関数の名前
})
.done(function(data, textStatus, jqXHR){
    console.log(data);
})
.fail(function(){
    console.log("通信に失敗しました");
})