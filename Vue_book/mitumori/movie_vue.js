var app = new Vue({
    el: '#app',
    data: {
        // 消費税率
        taxRate: 0.08,
        // 制作したいムービー
        movieType: '余興ムービー',
        // 基本料金(税抜き)
        basePrice: 30000,
        // 割増料金
        addPrice1: 5000, // 納期が1ヶ月未満の場合
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
        opt1_use: false, // true: 利用する、false: 利用しない
        opt1_price: 5000, // 料金(税抜き)
        // オプション「撮影」
        opt2_use: false, // true: 利用する、false: 利用しない
        opt2_price: 5000, // 料金(税抜き)
        // オプション「DVD盤面印刷」
        opt3_use: false, // true: 利用する、false: 利用しない
        opt3_price: 5000, // 料金(税抜き)
        // オプション「写真スキャニング」
        opt4_use: false, // true: 利用する、false: 利用しない
        opt4_price: 500, // 料金(税抜き)
    },

    methods: {
        // 税抜き金額を税込金額へ変換するメソッド
        incTax: function(untaxed) {
            return Math.floor(untaxed * (1 + this.taxRate));
        },
        getDateDiff: function getDateDiff(dateString1, dateString2) {
            // 日付を表す文字列から日付オブジェクトを生成
            var date1 = new Date(dateString1);
            var date2 = new Date(dateString2);

            // 2つの日付の差分(ミリ秒)を計算
            var msdiff = date1.getTime() - date2.getTime();

            // 求めた差分をミリ秒に変換
            return Math.ceil(msdiff / (1000 * 60 * 60 * 24));
        }
    },

    computed: {
        // オプション「BGM手配」の税込金額を返す算出プロパティ
        taxedOpt1: function() {
            return this.incTax(this.opt1_price);
        },
        // オプション「撮影」の税込金額を返す算出プロパティ
        taxedOpt2: function() {
            return this.incTax(this.opt2_price);
        },
        // オプション「DVD盤面印刷」の税込金額を返す算出プロパティ
        taxedOpt3: function() {
            return this.incTax(this.opt3_price);
        },
        // オプション「写真スキャニング」の税込金額を返す算出プロパティ
        taxedOpt4: function() {
            return this.incTax(this.opt4_price);
        },
        // 基本料金(税込)を返すプロパティ
        taxedBasePrice: function() {
            // 割増料金
            var addPrice = 0;
            // 納期までの残り日数を計算
            var dateDiff = this.getDateDiff(this.delivery_date, (new Date()).toLocaleString());
            // 割増金額を求める
            if (21 <= dateDiff < 30) {
                addPrice = this.addPrice1 // 納期が1ヶ月未満の場合
            } else if (14 <= dateDiff < 21) {
                addPrice = this.addPrice2 // 納期が3週間未満の場合
            } else if (7 <= dateDiff < 14) {
                addPrice = this.addPrice3 // 納期が2週間未満の場合
            } else if (3 <= dateDiff < 7) {
                addPrice = this.addPrice4 // 納期が1週間未満の場合
            } else if (dateDiff == 3) {
                addPrice = this.addPrice5 // 納期が3日後の場合
            } else if (dateDiff == 2) {
                addPrice = this.addPrice6 // 納期が2日後の場合
            } else if (dateDiff == 1) {
                addPrice = this.addPrice7 // 納期が翌日の場合
            } else {
                addPrice = 0
            }
            // 基本料金と割増料金の税込の料金を計算
            return this.incTax(this.basePrice + addPrice);
        },
        // オプション料金(税込)を返すプロパティ
        taxedOptPrice: function() {
            // TODO: オプション料金を計算して返す
        },
        // 合計金額(税込)を返す.
        taxedTotal: function() {
            // 基本料金(税込)とオプション料金(税込)の合計を返す
            return (this.taxedBasePrice + this.taxedOptPrice);
        }
    }
})