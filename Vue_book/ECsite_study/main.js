/** コンポーネントのルートノード(全体を選択) */
var nodeApp = document.querySelector('#app'); //idがappの内部のHTML要素を全て取得.

/** チェックボックスのイベントハンドラを登録 */
var nodeCheckbox = nodeApp.querySelectorAll('input[type="checkbox"]'); //チェックボックスの要素を全て取得
/* changeイベントでonCheckChangeメソッドを発火する動作をつける. */
nodeCheckbox[0].addEventListener('change', onCheckChanged, false); 
nodeCheckbox[1].addEventListener('change', onCheckChanged, false);

/** セレクトボックスのイベントハンドラを登録 */
var nodeSelect = nodeApp.querySelector('.sorting');
nodeSelect.addEventListener('change',onOrderChange, false);

// 初期表示の商品ノードリスト
var nodeItemsOrg = nodeApp.querySelectorAll('.item');

/** チェック状態イベントハンドラ */
function onCheckChanged(event){
    var nodeItems = nodeApp.querySelectorAll('.item'); //各商品の要素取得
    var nodeCount = nodeApp.querySelector('.count'); //表示件数のノード
    var count = nodeItems.length; //商品の表示件数

    /** 全ての商品ノードを一旦表示する */
    for(var i=0; i<nodeItems.length; i++){
        showNode(nodeItems[i])
    }

    /** セール対象のチェックが付いている場合 */
    if(nodeCheckbox[0].checked){
        /** 一旦、全ての商品ノードを回す */
        for(var i=0; i<nodeItems.length; i++){
            if(!isSaleItem(nodeItems[i])){
                hideNode(nodeItems[i]); //商品を非表示にする
                count--; //件数のカウントを減らす
            }
        }
    }

    /** 送料無料のチェックが付いている場合 */
    if(nodeCheckbox[1].checked){
        /** 一旦、全ての商品ノードを回す */
        for(var i=0; i<nodeItems.length; i++){
            if(!isDelvFreeItem(nodeItems[i])){
                hideNode(nodeItems[i]); //商品を非表示にする
                count--; //件数のカウントを減らす
            }
        }
    }
    // 件数を更新
nodeCount.textContent = count + '件';
}


/** 送料無料か否かを判定 */
function isDelvFreeItem(nodeItem){
    var node = nodeItem.querySelector('.shipping-fee'); //送料無料タグを取得
    return (node && node.textContent == '送料無料')
}

/** セール商品かどうかを判定する関数 */
function isSaleItem(nodeItem){
    var node = nodeItem.querySelector('.status'); //セール商品の場合
    return (node && node.textContent == 'SALE');
}

function hideNode(node){
    node.setAttribute('style','display:none;')
}

/** ノードを表示する */
function showNode(node){
    node.removeAttribute('style');
}

/** 並び順変更のイベントハンドラ */
function onOrderChange(event){
    var nodeList = nodeApp.querySelector('.list'); //商品一覧ノードを取得
    var nodeItems = nodeList.querySelectorAll('.item'); // 商品一覧から各商品ノードを個別に取得

    // 各商品ノードを配列に詰める
    var products = []; //空の配列を作成
    for(var i=0; i<nodeItems.length; i++){
        products.push(nodeItems[i]);
    }

    // DOMから全ての商品ノードを削除する
    while(nodeList.firstChild){
        nodeList.removeChild(nodeList.firstChild);
    }

    // 「標準」が選択されている場合
    if(event.target.value == '1'){
        // 初期表示のノードを復元
        for(var i=0; i<products.length; i++){
            nodeList.appendChild(nodeItemsOrg[i]);
        }
    // 「価格が安い」が選択されている場合    
    }else if(event.target.value == '2'){
        // 商品配列を並び替える
        products.sort(function(a,b){
            //商品ノードからカンマを除去した値段を読み取る.
            var prevPrice = parseInt(a.querySelector('.price span').textContent.replace(',','')); 
            var currentPrice = parseInt(b.querySelector('.price span').textContent.replace(',',''));
            return prevPrice - currentPrice;
        });
          // 並び替え後の商品ノードをDOMに追加する
        for(var i = 0; i<products.length; i++){
            nodeList.appendChild(products[i]);
        }
    }
}