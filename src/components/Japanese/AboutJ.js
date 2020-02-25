import React from "react";
import kayImg from "../../media/kay.jpg";

export default class AboutJ extends React.Component {
  render() {
    return (
      <div>
        <h2>自己紹介</h2>
        <hr />
        <div className="about">
          <img src={kayImg} alt="Kayoko Bossiere" />
          <div className="row japanese">
            <div className="col-12">
              <p>
               　ボシエール香代子
              </p>
              <p> １８年間アメリカで過ごしたのち、近年本拠を日本に移しました。自営の会社 
              <a href="http://www.shiningprince.com/" target="a">
                  シャイニングプリンスジャパン
              </a>
                  にて長年翻訳の仕事をしてきましたが、子供たちが独立し時間に余裕ができましたので、この度社外にも翻訳の場を広げることにしました。あまり大きな仕事や専門的な内容の仕事には無理があろうと思いますが、社会生活一般に必要な翻訳は問題なくこなせる自信があります。
              </p>
              <p> どうぞよろしくお願いいたします。</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
