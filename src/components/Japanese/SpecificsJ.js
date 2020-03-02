import React from "react";
import dividerImg from "../../media/divider.jpg";

export default class SpecificsJ extends React.Component {
  render() {
    return (
      <div className="">
        <div>
          <img className="divider" src={dividerImg} alt="Midori Translation" />
          <h2 class="article">私たちの翻訳サービスについて<span class="subtitle">思い立ったらすぐに頼める翻訳</span></h2>
          <hr />
          </div>
        <h3>翻訳言語</h3>
        <p>
          日本語・英語間の相互翻訳
        </p>
        <h3>翻訳例</h3>
        <p>
          各種文書、ビジネスレター、パンフレット、取り扱い説明書、メニュー、看板、お知らせ、ホームページの翻訳、校正など
        </p>
        <h3> 翻訳資料 </h3>
        <p> 
            翻訳の必要な資料は文書をはじめ、写メ、ビデオ（会話）などの形式での受付も可能です。その他、ご相談ください。
        </p>
        <h3>100%満足保証</h3>
        <p>
          訳語は文書形式でEメールにて納品いたします。お客様にご満足いただけるまで訂正変更します。
        </p>
        <h3>お支払いは安心の後払い</h3>
        <p>
          納品後２週間以内に
          <a
            href="https://www.paypal.com/jp/webapps/mpp/home"
            target="_blank"
            rel="noopener noreferrer"
          >
