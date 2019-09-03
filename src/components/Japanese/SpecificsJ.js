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
            翻訳とは一つの言語から別の言語へ単に言葉を置き換えることではなく、読者に本来の意味を正確に伝えることです。私たちは訳語の微妙な部分にまで気を配り、問題解決手段としての翻訳サービスを提供します。
          </p>
        </div>
        <h3>一般翻訳</h3>
        <p>
          各種文書、レター、パンフレット、チラシ、説明書、注意書き、メニュー、看板、案内書など
        </p>
        <p>
          英語のホームページをお考えですか？日本語のホームページの翻訳をします。
        </p>
        
        <h3>英会話やビジネス英語</h3>
        <p>
         　英語あるいは日本語でどう表現したらいいかわからない時などに。</p>
        <p>
           英語のビジネスレターの作成
        </p> 　
        <h3>安心保証</h3>
        <p>
          納品後、ご満足いただけない場合は２週間以内にお申し出ください。修正させていただきます。
        </p>
        <h3>納品</h3>
        <p>
          通常電子メールにて送付します。紙に印刷し、郵送または宅配便による送付には別途手数料と送料がかかる場合があります。
        </p>
        <h3>料金・お支払い</h3>
        <h5>料金</h5>
        <p>
          料金は仕事の内容により変わります。何の翻訳が必要かお問い合わせ欄よりお知らせください。お見積もりを出させていただきます。
        </p>
        <h5>お支払い</h5>
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
