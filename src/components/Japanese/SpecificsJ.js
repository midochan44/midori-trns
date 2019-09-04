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
            翻訳とは一つの言語から別の言語へ単に言葉を置き換えることではなく、読者に本来の意味を正確に伝えることです。翻訳は外注せずにすべて社内で責任を持って行います。
          </p>
        </div>
        <h3>一般翻訳</h3>
        <p>
          各種文書、ビジネスレター、パンフレット、チラシ、説明書、注意書き、メニュー、看板、お知らせなど
        </p>
        <p>
          英語のホームページをお考えですか？日本語のホームページの翻訳をします。
        </p>
        
        <h3>会話や動画の翻訳</h3>
        <p>
           こういう場面ではどう言ったらよいか、動画で何を言っているのか知りたいなどを解決します。
        </p> 　
        <h3>安心保証</h3>
        <p>
          ご満足いただけない場合は納品後２週間以内にお申し出ください。修正させていただきます。
        </p>
        <h3>納品</h3>
        <p>
          電子メールにてお送りします。それ以外の納品方法には別途手数料と送料がかかる場合があります。
        </p>
        <h3>料金・お支払い</h3>
        <h5>料金</h5>
        <p>
          料金は仕事内容により決まります。何の翻訳が必要かお問い合わせ欄よりご連絡ください。
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
