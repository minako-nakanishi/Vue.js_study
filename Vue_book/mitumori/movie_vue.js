
var app = new Vue({
    el: '#app',
    data:{
        // 消費税率
        taxRate: 0.08,
        // 制作したいムービー
        movieType: '余興ムービー',
        // 基本料金(税抜き)
        basePrice: 30000,
        // 割増料金
        addPrice1: 5000,  // 納期が1ヶ月未満の場合
        addPrice2: 10000, // 納期が3週間未満の場合
        addPrice3: 15000, // 納期が2週間未満の場合
        addPrice4: 20000, // 納期が1週間未満の場合
        addPrice5: 40000, // 納期が3日後の場合
        addPrice6: 45000, // 納期が2日後の場合
        addPrice7: 50000, // 納期が翌日の場合
        // オプション料金
        optPrice: 0,
        // 合計金額(税抜き)
        totalPrice: 0,
        // 挙式日
        wedding_date: '',
        // DVD仕上がり予定日(日付)
        delivery_date: '',
        // オプション「BGM手配」
        opt1_use: false,      // true: 利用する、false: 利用しない
        opt1_price: 5000,     // 料金(税抜き)
        // オプション「撮影」
        opt2_use: false,      // true: 利用する、false: 利用しない
        opt2_price: 5000,     // 料金(税抜き)
        // オプション「DVD盤面印刷」
        opt3_use: false,      // true: 利用する、false: 利用しない
        opt3_price: 5000,     // 料金(税抜き)
        // オプション「写真スキャニング」
        opt4_use: false,      // true: 利用する、false: 利用しない
        opt4_price: 500,      // 料金(税抜き)
    },

    methods:{
        // 税抜き金額を税込金額へ変換するメソッド
        incTax: function(untaxed){
            return Math.floor(untaxed * (1 + this.taxRate));
        },
        getDateDiff: function getDateDiff(dateString1, dateString2){
            // 日付を表す文字列から日付オブジェクトを生成
            var date1 = new Date(dateString1);
            var date2 = new Date(dateString2);
        
            // 2つの日付の差分(ミリ秒)を計算
            var msdiff = date1.getTime() - date2.getTime();
        
            // 求めた差分をミリ秒に変換
            return Math.ceil(msdiff/(1000 * 60 * 60 * 24));
        }
    },

    computed:{
        // オプション「BGM手配」の税込金額を返す算出プロパティ
        taxedOpt1: function(){
            return this.incTax(this.opt1_price);
        },
        // オプション「撮影」の税込金額を返す算出プロパティ
         taxedOpt2: function(){
            return this.incTax(this.opt2_price);
        },
        // オプション「DVD盤面印刷」の税込金額を返す算出プロパティ
        taxedOpt3: function(){
            return this.incTax(this.opt3_price);
        },
        // オプション「写真スキャニング」の税込金額を返す算出プロパティ
        taxedOpt4: function(){
            return this.incTax(this.opt4_price);
        },
        // 基本料金(税込)を返すプロパティ
        taxedBasePrice: function(){
            // TODO: 基本料金を計算して返す
        },
        // オプション料金(税込)を返すプロパティ
        taxedOptPrice: function(){
            // TODO: オプション料金を計算して返す
        },
        // 合計金額(税込)を返す.
        taxedTotal: function(){
            // 基本料金(税込)とオプション料金(税込)の合計を返す
            return (this.taxedBasePrice + this.taxedOptPrice);
        }
    }
})