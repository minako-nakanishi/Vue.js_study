/** 読み込みボタンの要素を取得 */
var btnload = document.querySelector('#load');
/** 読み込みボタンにクリックイベントを付加する */
btnload.addEventListener('click',function(){
    console.log("ボタンが押されました");

    /** XMLHttpRequestのインスタンスを生成する */
    var xmlHttpRequest = new XMLHttpRequest();

    // xmlHttpRequest.open('GET','products.json')

    /** 通信状況を監視 */
    xmlHttpRequest.onreadystatechange = function(){
        // 通信が完了しているか確認(readyState == 4)
        if(this.readyState == 4 /** && this.status == 200 */){
            console.log(this.readyState, this.response);
            var products = this.response; //レスポンス(jsonの結果)を変数へ格納

            var result = document.querySelector('#result');
            result.textContent = ""; //<div id="result"></div>の子ノードを削除
            
            for(var i=0; i<products.length; i++){
                var text = "商品ID：" + products[i].id;
                text+= "商品名：" + products[i].name;
                text+= "料金" + products[i].price;
                text+= "画像パス" + products[i].image;
                text+= "送料" + products[i].delv;
                text+= "セール対象" + products[i].isSale;
                var div = document.createElement('div'); //divタグを作成
                div.textContent = text; //新規作成したdivタグへjsonの結果を挿入する
                result.appendChild(div)
            }
        }
    }
    xmlHttpRequest.responseType = 'json';
    xmlHttpRequest.open('GET','products.json');
    xmlHttpRequest.send();

})