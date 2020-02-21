import React from "react";
import kayImg from "../../media/kay.jpg";

export default class AboutJ extends React.Component {
  render() {
    return (
      <div>
        <h2>連絡先</h2>
        <hr />
        <div className="about">
          <img src={kayImg} alt="Kayoko Bossiere" />
          <div className="row japanese">
            <div className="col-12">
              <h4>みどり翻訳サービス</h4>
              <p>
                代表　ボシエール香代子
              </p>
              <p> E-mail: midoritrns@gmail.com</p>

              <p>TEL: 042-439-6159 </p>

              <p>FAX: 042-439-4903 </p>

              <p>住所：自宅のため必要に応じてお伝えしています。ご了承願います。</p>
            </div>
        
          
          </div>
        </div>
      </div>
    );
  }
}
