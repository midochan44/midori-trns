import React from "react";
import dividerImg from "../../media/divider.jpg";
import thumb from "../../media/f_f_business_80_s512_f_business_80_1bg.png";
import flower from "../../media/f_f_object_90_s512_f_object_90_0bg.png";
import balloon from "../../media/f_f_event_40_s512_f_event_40_0bg.png";
import lemon from "../../media/f_f_health_53_s512_f_health_53_1bg.png";
import calculator from "../../media/f_f_object_160_s512_f_object_160_2bg.png";
import apple from "../../media/f_f_health_1_s512_f_health_1_0bg.png";
import paper from "../../media/f_f_business_91_s512_f_business_91_2bg.png";

export default class SpecificsJ extends React.Component {
  render() {
    return (
      &lt;div className=""&gt;
        &lt;div&gt;
          &lt;img className="divider" src={dividerImg} alt="Midori Translation" /&gt;
          &lt;h2 className="article"&gt;私たちの翻訳サービスについて&lt;span className="subtitle"&gt;思い立ったらすぐに頼める翻訳&lt;/span&gt;&lt;/h2&gt;
          &lt;hr /&gt;
          &lt;/div&gt;
          &lt;div className="container"&gt;
            &lt;div className="item"&gt;
                &lt;div className="thumnail"&gt;
                    &lt;img src={thumb} alt="thumb" width="150" height="150"/&gt;
                &lt;/div&gt;
                &lt;h3 className="category"&gt;100%満足保証&lt;/h3&gt;
                &lt;p className="description"&gt;お客様にご満足いただけるサービスを心掛けています。翻訳は外注せず最後まで責任を持って行います。臨機応変な対応に努力します。&lt;/p&gt;
            &lt;/div&gt;
            &lt;div className="item"&gt;
                &lt;div className="thumnail"&gt;
                    &lt;img src={flower} alt="flower" width="150" height="150"/&gt;
                &lt;/div&gt;
                &lt;h3 className="category"&gt;翻訳言語&lt;/h3&gt;
                &lt;p className="description"&gt;日本語・英語間の相互翻訳&lt;/p&gt;
            &lt;/div&gt;
            
        &lt;/div&gt;
        &lt;div className="container"&gt;
            &lt;div className="item"&gt;
                &lt;div className="thumnail"&gt;
                    &lt;img src={balloon} alt="balloon" width="150" height="150"/&gt;
                &lt;/div&gt;
                &lt;h3 className="category"&gt;翻訳料&lt;/h3&gt;
                &lt;p className="description"&gt; １０００円からの低料金。令和２年５月末までさらに２０%オフ。お早目に！&lt;/p&gt;
            &lt;/div&gt;
            &lt;div className="item"&gt;
                &lt;div className="thumnail"&gt;
                    &lt;img src={paper} alt="paper" width="150" height="150"/&gt;
                &lt;/div&gt;
                &lt;h3 className="category"&gt;翻訳資料&lt;/h3&gt;
                &lt;p className="description"&gt;翻訳の必要な資料をEメールで送ってください。文書をはじめ、写メ、ビデオ（会話）などの形式からの翻訳も可能です。その他ご相談ください。&lt;/p&gt;
            &lt;/div&gt;
            
        &lt;/div&gt;
        &lt;div className="container"&gt;
            &lt;div className="item"&gt;
                &lt;div className="thumnail"&gt;
                    &lt;img src={lemon} alt="lemon" width="150" height="150"/&gt;
                &lt;/div&gt;
                &lt;h3 className="category"&gt;お支払いは安心の後払い&lt;/h3&gt;
                &lt;p className="description"&gt;納品後２週間以内に
            &lt;a
                href="https://www.paypal.com/jp/webapps/mpp/home"
                target="_blank"
                rel="noopener noreferrer"&gt;
                ペイパル
            &lt;/a&gt;
            または銀行振込にてお支払いください。
                &lt;/p&gt;
                &lt;p className="description"&gt;ペイパルでのお支払い手数料は当社負担。銀行振込によるお支払い手数料はお客様負担です。&lt;/p&gt;
                &lt;p className="description"&gt;ペイパルとは、世界で2億5000万人以上が利用する「安全」で「かんたん」なオンライン決済サービスです。ペイパルの年会費、登録料は無料です。&lt;/p&gt;
            &lt;/div&gt;
            &lt;div className="item"&gt;
                &lt;div className="thumnail"&gt;
                    &lt;img src={calculator} alt="calculator" width="150" height="150"/&gt;
                &lt;/div&gt;
                &lt;h3 className="category"&gt;お見積り無料&lt;/h3&gt;
                &lt;p className="description"&gt; まずは見積り! この時点でお客様の個人情をお聞きすることはありません。お気軽にお問い合わせください。&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div className="container last"&gt;
                &lt;div className="item"&gt;
                &lt;div className="thumnail"&gt;
                    &lt;img src={apple} alt="apple" width="150" height="150"/&gt;
                &lt;/div&gt;
                &lt;h3 className="category"&gt;翻訳例&lt;/h3&gt;
                &lt;p className="description"&gt;各種文書、ビジネスレター、パンフレット、取り扱い説明書、メニュー、看板、お知らせ、ホームページの翻訳、校正など&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    );
  }
}

