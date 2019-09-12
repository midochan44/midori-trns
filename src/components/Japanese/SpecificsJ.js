import React from "react";
import dividerImg from "../../media/divider.jpg";

export default class SpecificsJ extends React.Component {
  render() {
    return (
      <div className="">
        <div>
          <img className="divider" src={dividerImg} alt="KOB Translation" />
          <h2>形にとらわれない翻訳サービス</h2>
          <hr />
          <p>
            英語に関する問題は様々です。私たちはそのような多様なご要望にお応えできるサービスを心がけています。
          </p>
        </div>
        <h3>サービス一覧</h3>
        <p>
          文書の翻訳（ビジネスレター、パンフレット、説明書、注意書き、メニュー、看板、お知らせなど）
        </p>
        <p>
          ホームページの翻訳（言語の翻訳のみ）
        </p>
        
        <p>英語のマニュアル作り（外国人旅行者のための接客マニュアルなどの作成）</p>
       
        <h3>納品</h3>
        <p>
          電子メールにてお送りします。それ以外の納品方法には別途手数料と送料がかかる場合があります。
        </p>
        <h3>料金・お支払い</h3>
        <h5>料金</h5>
        <p>
          料金は仕事内容により決まります。何の翻訳が必要かお問い合わせ欄よりご連絡ください。
        </p>
        <h5>お支払いは安心の後払い</h5>
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
