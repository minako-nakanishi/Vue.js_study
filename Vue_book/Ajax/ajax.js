/** ボタンのHTML要素を取得 */
var btnload = document.querySelector('#load');

/** 読み込みボタンにクリックイベントを持たせる */
btnload.addEventListener('click', function(){
    console.log("ボタンが押されたよ！")

    // XMLHttpRequestのインスタンスを生成
    var xmlHttpRequest = new XMLHttpRequest();
    /*
     通信状態の変化を監視するイベント
     onreadystatechange→ readyStateの値が更新されたら呼び出される.
    */
    xmlHttpRequest.onreadystatechange = function(){
        /** 受信レスポンスが正常終了した時
            (readyStateが4の場合、プログラム要求処理が完了している)
        */
        if(this.readyState == 4 /* && this.status == 200*/){
            // 受信したデータをコンソールに出力
            console.log(this.readyState, this.response);
            // 受信したJSONを変数に格納
            var products = this.response;
            // 商品ノードを取得する
            var result = document.querySelector('#result');
            // 商品の子ノードを削除する
            result.textContent = '';
            // 商品の子ノードをDOMに挿入する
            for(var i = 0; i<products.length; i++){
                var text = '商品ID：' + products[i].id;
                text+= "商品名：" + products[i].name;
                text+= "料金" + products[i].price;
                text+= "画像：" + products[i].image;
                text+= "送料：" + products[i].delv;
                text+= "セール対象" + products[i].isSale;
                var div = document.createElement('div'); //divタグの作成　
                div.textContent = text; //新しく作成したdivタグのtextContentに商品ノードを代入(挿入)する
                result.appendChild(div); //<div id="result"></div>の子要素に商品ノードを追加

            }
        }
    };

    // レスポンスの形式を指定
    xmlHttpRequest.responseType = 'json';
    // リクエストメソッドと読み込むファイルのパスを指定
    xmlHttpRequest.open('GET', 'products.json');
    // リクエストを送信(非同期通信の開始)
    xmlHttpRequest.send();
})