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
      <div className="">
        <div>
          <img className="divider" src={dividerImg} alt="Midori Translation" />
          <h2 className="article">私たちの翻訳サービスについて<span className="subtitle">思い立ったらすぐに頼める翻訳</span></h2>
          <hr />
          </div>
          <div className="container">
            <div className="item">
                <div className="thumnail">
                    <img src={thumb} alt="thumb" width="150" height="150"/>
                </div>
                <h3 className="category">100%満足保証</h3>
                <p className="description">お客様にご満足いただけるサービスを心掛けています。翻訳は外注せず最後まで責任を持って行います。臨機応変な対応に努力します。</p>
            </div>
            <div className="item">
                <div className="thumnail">
                    <img src={flower} alt="flower" width="150" height="150"/>
                </div>
                <h3 className="category">翻訳言語</h3>
                <p className="description">日本語・英語間の相互翻訳</p>
            </div>
            
        </div>
        <div className="container">
            <div className="item">
                <div className="thumnail">
                    <img src={balloon} alt="balloon" width="150" height="150"/>
                </div>
                <h3 className="category">翻訳料</h3>
                <p className="description"> １０００円からの低料金。令和２年５月末までさらに２０%オフ。お早目に！</p>
            </div>
            <div className="item">
                <div className="thumnail">
                    <img src={paper} alt="paper" width="150" height="150"/>
                </div>
                <h3 className="category">翻訳資料</h3>
                <p className="description">翻訳の必要な資料をEメールで送ってください。文書をはじめ、写メ、ビデオ（会話）などの形式からの翻訳も可能です。その他ご相談ください。</p>
            </div>
            
        </div>
        <div className="container">
            <div className="item">
                <div className="thumnail">
                    <img src={lemon} alt="lemon" width="150" height="150"/>
                </div>
                <h3 className="category">お支払いは安心の後払い</h3>
                <p className="description">納品後２週間以内に
            <a
                href="https://www.paypal.com/jp/webapps/mpp/home"
                target="_blank"
                rel="noopener noreferrer">
                ペイパル
            </a>
            または銀行振込にてお支払いください。
                </p>
                <p className="description">ペイパルでのお支払い手数料は当社負担。銀行振込によるお支払い手数料はお客様負担です。</p>
                <p className="description">ペイパルとは、世界で2億5000万人以上が利用する「安全」で「かんたん」なオンライン決済サービスです。ペイパルの年会費、登録料は無料です。</p>
            </div>
            <div className="item">
                <div className="thumnail">
                    <img src={calculator} alt="calculator" width="150" height="150"/>
                </div>
                <h3 className="category">お見積り無料</h3>
                <p className="description"> まずは見積り! この時点でお客様の個人情をお聞きすることはありません。お気軽にお問い合わせください。</p>
            </div>
        </div>
        <div className="container last">
                <div className="item">
                <div className="thumnail">
                    <img src={apple} alt="apple" width="150" height="150"/>
                </div>
                <h3 className="category">翻訳例</h3>
                <p className="description">各種文書、ビジネスレター、パンフレット、取り扱い説明書、メニュー、看板、お知らせ、ホームページの翻訳、校正など</p>
            </div>
        </div>
      </div>
    );
  }
}
