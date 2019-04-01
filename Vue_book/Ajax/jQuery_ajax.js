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
        updateScreen(data);
    })
    .fail(function(data, textStatus, jqXHR){
        //通信失敗時の処理を記載
        console.log("通信が失敗しました");

    });
}

// 商品一覧の描画
function updateScreen(products){
    // 商品リストの子ノードを全て削除する
    $('#result').empty();
    var list = '';
    for(var i=0; i<products.length; i++){
        list += '<div>';
        list += "商品ID：" + products[i].id;
        list += "商品名：" + products[i].name;
        list += "料金" + products[i].price;
        list += "画像：" + products[i].image;
        list += "送料：" + products[i].delv;
        list += "セール対象：" + products[i].isSale;
        list += '</div>';
    }
    $('#result').append(list);
}