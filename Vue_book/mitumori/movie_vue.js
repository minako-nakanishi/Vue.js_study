
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

    }
})