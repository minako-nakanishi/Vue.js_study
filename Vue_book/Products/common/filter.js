/** フィルターのスクリプト */
// 数値を通貨書式「#,###,###」へ変更するフィルター
Vue.filter('number_format', function(val){
  return val.toLocaleString();
});
