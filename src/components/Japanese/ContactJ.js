import React from "react";

export default class ContactJ extends React.Component {
  state = {
    subject: "",
    contents: ""
  };

  handleSubject = e => {
    this.setState({ subject: e.target.value });
  };

  handleContents = e => {
    this.setState({ contents: e.target.value });
  };

  render() {
    return (
      <div className="contactForm">
        <h2>お問い合わせ</h2>
        <hr />
        <p>
          送信ボタンをクリックすると自動にメールが開きます。
        </p>
        <input
          className="subject"
          type="email"
          value={this.state.subject}
          onChange={this.handleSubject}
          maxLength="50"
          placeholder="用件名..."
        />

        <textarea
          className="contents"
          value={this.state.contents}
          onChange={this.handleContents}
          rows="7"
          maxLength="1000"
          placeholder="内容..."
        />
        <button type="button" class="btn btn-primary">
          <a
            href={`mailto:midoritrns@gmail.com?subject=${this.state.subject}&body=${this.state.contents}`}
          >
            送信
          </a>
        </button>
      </div>
    );
  }
}
