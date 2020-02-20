import React from "react";
import dividerImg from "../../media/divider.jpg";

export default class SpecificsJ extends React.Component {
  render() {
    return (
      <div className="">
        <div>
          <img className="divider" src={dividerImg} alt="KOB Translation" />
          <h2>私たちの翻訳サービスについて</h2>
          <hr />
          </div>
          <h3>お見積り無料</h3>
        <p>
          お問い合わせ欄よりご連絡ください。料金と所要日数をお知らせします。
        </p>
        
         <h3>翻訳言語</h3>
        <p>
          日本語・英語間の相互翻訳
        </p>
        <h3>翻訳例</h3>
        <p>
          各種文書、ビジネスレター、パンフレット、取り扱い説明書、メニュー、看板、お知らせ、ホームページの翻訳（言語の翻訳のみ）などいろいろ
        </p>
        
        <h3>料金</h3>
        <p>
          1000円からの堅牢価格
        </p>
        <h3>ご注文</h3>
        <p>下記お問い合わせ欄よりご連絡ください。</p>
        <p>
          翻訳の必要な資料は文書をはじめ、写メ、ビデオ（会話）などの形式での受付も可能です。その他、ご相談ください。
        </p>
        <h3>納品</h3>
        <p>
          訳語は文書形式でEメールにて納品いたします。お客様にご満足いただけるまで訂正変更しますのでご安心ください。
        </p>
        <h3>お支払いは安心の後払い</h3>
        <p>
          納品後２週間以内に
          <a
            href="https://www.paypal.com/jp/webapps/mpp/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            ペイパル
          </a>
          または銀行振込にてお支払いください。
        </p>
        <p>
          <a
            href="https://www.paypal.com/jp/webapps/mpp/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            ペイパル
          </a>
          とは、世界で2億5000万人以上が利用する「安全」で「かんたん」なオンライン決済サービスです。ペイパルでのお支払い手数料は当社が負担しますので、お客様は手数料ゼロでお支払いができます。ペイパルの年会費、登録料は無料です。
        </p>
        <p>銀行振込によるお支払い手数料はお客様のご負担になります。</p>
      </div>
    );
  }
}
