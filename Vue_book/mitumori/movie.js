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
app.querySelector('#delivery_date').addEventListener('change', onInputChanged, false);
