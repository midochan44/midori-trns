import React from "react";
import headerImg from "../media/headerE.png";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={headerImg} alt="KOB Translation" />
      </div>
    );
  }
}
