
var app = new Vue({
    el: '#computed',
    data:{
        year: new Date().getFullYear()
    },

    computed:{
        // 今年がうるう年かどうかを判定する算出プロパティ
        isUrudoshi: function(){
            // 「4で割り切れて100で割り切れない」または「400で割り切れる」場合
            if((this.year%4 == 0) && (this.year%100 != 0) || (this.year&400 == 0)){
                return true; //うるう年
            }else{
                return false;
            }
        }
    }
})