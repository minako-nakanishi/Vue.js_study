// --------------------------
// 変数宣言
// --------------------------

// コンポーネントのノードルート（全体を囲っているdivタグ）
var app = document.querySelector('#app');
// 消費税率
var tax = 0.08;

// --------------------------
// イベントハンドラの割り当て
// --------------------------

// ページの読み込み完了イベント
window.addEventListener('load', onPageLoad, false);
// 入力内容変更イベント(DVD仕上がり予定日)
// app.querySelector('#delivery_date').addEventListener('change', onInputChanged, false);
// // 入力内容変更イベント(BGM手配)
// app.querySelector('#opt1').addEventListener('change',onInputChanged, false);
// // 入力内容変更イベント(撮影)
// app.querySelector('#opt2').addEventListener('change',onInputChanged, false);
// // 入力内容変更イベント(DVD盤面印刷)
// app.querySelector('#opt3').addEventListener('change',onInputChanged, false);
// // 入力内容変更イベント(写真スキャニング)
// app.querySelector('#opt4').addEventListener('input',onInputChanged, false);


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
    //updateForm();
}

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

function updateForm(){
    /* 金額を再計算 */
    
    /** 表示を更新 */

}