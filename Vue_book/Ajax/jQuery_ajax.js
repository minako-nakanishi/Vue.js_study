// 読み込みボタンのクリックイベントハンドラを定義
$('#load').on('click', clickHandler); //イベントの付加はonメソッドを使用

function clickHandler(event){ //clickHandler関数を定義
    // 非同期通信でJSONを読み込む
    $.ajax({
        url: 'products.json', // 通信先URL
        type: 'GET', // 使用するHTTPメソッド(デフォルトはGETなので省略可能)
        dataType: 'json' //レスポンスのデータタイプ
    })
    .done(function(data, textStatus, jqXHR){
        // 通信成功時の処理を記載
        console.log("通信が成功しました");
    })
    .fail(function(data, textStatus, jqXHR){
        //通信失敗時の処理を記載
        console.log("通信が失敗しました");

    })
}