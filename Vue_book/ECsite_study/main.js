/** コンポーネントのルートノード(全体を選択) */
var nodeApp = document.querySelector('#app'); //idがappの内部のHTML要素を全て取得.

/** チェックボックスのイベントハンドラを登録 */
var nodeCheckbox = nodeApp.querySelectorAll('input[type="checkbox"]'); //チェックボックスの要素を全て取得
/* changeイベントでonCheckChangeメソッドを発火する動作をつける. */
nodeCheckbox[0].addEventListener('change', onCheckChanged, false); 
nodeCheckbox[1].addEventListener('change', onCheckChanged, false);

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