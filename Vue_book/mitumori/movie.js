// --------------------------
// 変数宣言
// --------------------------

// コンポーネントのノードルート（全体を囲っているdivタグ）
var app = document.querySelector('#app');
// 消費税率
var taxRate = 0.08;

// --------------------------
// イベントハンドラの割り当て
// --------------------------

// ページの読み込み完了イベント
window.addEventListener('load', onPageLoad, false);
// 入力内容変更イベント(DVD仕上がり予定日)
app.querySelector('#delivery_date').addEventListener('change', onInputChanged, false);
// // 入力内容変更イベント(BGM手配)
app.querySelector('#opt1').addEventListener('change',onInputChanged, false);
// // 入力内容変更イベント(撮影)
app.querySelector('#opt2').addEventListener('change',onInputChanged, false);
// // 入力内容変更イベント(DVD盤面印刷)
app.querySelector('#opt3').addEventListener('change',onInputChanged, false);
// // 入力内容変更イベント(写真スキャニング)
app.querySelector('#opt4').addEventListener('input',onInputChanged, false);


// --------------------------
// イベントハンドラの定義
// --------------------------

// ページの読み込みが完了した時に呼び出されるイベントハンドラ
function onPageLoad(event){
    /**  挙式日に2ヵ月後の日付を設定. */
    var wedding_date = app.querySelector('#wedding_date'); //挙式日
    var dt = new Date(); //本日の日付
    dt.setMonth(dt.getMonth() + 2); //二ヵ月後の月
    wedding_date.value = formatDate(dt); //成型した挙式日を設定
    
    /**  DVD仕上がり予定日に、挙式日の1週間前の日付を設定. */
    var dvd_date = app.querySelector('#delivery_date');
    dt.setDate(dt.getDate()-7); //挙式日の一週間前を取得
    dvd_complete = formatDate(dt);
    dvd_date.value = dvd_complete;

    /* DVD仕上がり予定日に、翌日以降しか入力できないようにする. */
    dvd_date.setAttribute('min', tommorow());

    // フォームの表示を更新する.
    updateForm();
}

// 入力内容を変更した時に呼び出されるイベントハンドラ
function onInputChanged(event){
    // フォームの表示を更新する.
    updateForm();
}

// --------------------------
// 関数
// --------------------------


// 日付フォーマット成型用関数
function formatDate(dt){
    var year = dt.getFullYear(); //現在の年
    var month = ('00' + (dt.getMonth()+1)).slice(-2); //現在の月
    var date = ('00' + (dt.getDate())).slice(-2); //現在の日にち
    return year + '-' + month + '-' + date;
}

// 明日の日付を取得
function tommorow(){
    var today = new Date();
    today.setDate(today.getDate()+1);
    return formatDate(today);
}

// 税抜き金額を税込金額に変更する関数
function incTax(untaxed){
    return Math.floor(untaxed * (1 + taxRate));
}

// 数値を通貨書式「#,###,###」に変換する関数
function number_format(val){
    return val.toLocaleString();
}

// 再計算した基本料金を返す
function taxedBasePrice(){
    // 割増料金
    var addPrice = 0;
    // フォームコントロールを取得(DVD仕上がり予定日)
    var delivery_date = app.querySelector('#delivery_date');
    // 納期までの残り日数を計算
    var dateDiff = getDateDiff(delivery_date, (new Date()).toLocaleDateString());

    // 割増料金を求める
    if(21<=dateDiff && dateDiff <30){
        addPrice = 5000;
    }else if(14<=dateDiff && dateDiff<21){
        addPrice = 10000;
    }else if(7<=dateDiff && dateDiff<14){
        addPrice = 15000;
    }else if(3<dateDiff && dateDiff < 7){
        addPrice = 20000;
    }else if(dateDiff == 3){
        addPrice = 40000;
    }else if(dateDiff == 2){
        addPrice = 45000;
    }else if(dateDiff == 1){
        addPrice = 50000;
    }else{
        addPrice = 0;
    }
    return incTax(30000 + addPrice);

}

// 再計算したオプション料金(税込)を返す
function taxedOptPrice(){
    // オプション料金
    var optPrice = 0;
    // フォームコントロールを取得
    var opt1 = app.querySelector('#opt1'); // BGM手配
    var opt2 = app.querySelector('#opt2'); // 撮影
    var opt3 = app.querySelector('#opt3'); // DVD盤面印刷
    var opt4 = app.querySelector('#opt4'); // 写真のスキャニング

    // BGM手配
    if(opt1.checked){optPrice += 5000}
    // 撮影
    if(opt2.checked){optPrice += 5000}
    // DVD盤面印刷
    if(opt3.checked){optPrice += 5000}
    // 写真スキャニング
    if(opt4.value == ''){optPrice = 0}
    optPrice += opt4.value * 500;

    return incTax(optPrice);
}

function updateForm(){
    // フォームコントロールを取得
    var sum_base = app.querySelector('#sum_base'); //基本料金(税込)
    var sum_opt = app.querySelector('#sum_opt'); //オプション料金(税込)
    var sum_total = app.querySelector('#sum_total'); //合計金額(税込)

    /* 金額を再計算 */
    var basePrice = taxedBasePrice(); //基本料金(税込)
    var optPrice = taxedOptPrice(); //オプション料金(税込)
    var totalPrice = basePrice + optPrice; //合計金額(税込)

    /** 表示を更新 */
    sum_base.value = number_format(basePrice); //基本料金(税込)
    sum_opt.value = number_format(optPrice); //オプション料金(税込)
    sum_total.value = number_format(totalPrice); //合計金額(税込)
}

// 日付の差を求める関数
function getDateDiff(dateString1, dateString2){
    // 日付を表す文字列から日付オブジェクトを生成
    var date1 = new Date(dateString1);
    var date2 = new Date(dateString2);

    // 2つの日付の差分(ミリ秒)を計算
    var msdiff = date1.getTime() - date2.getTime();

    // 求めた差分をミリ秒に変換
    return Math.ceil(msdiff/(1000 * 60 * 60 * 24));
}

