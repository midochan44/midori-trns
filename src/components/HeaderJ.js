import React from "react";
import headerImg from "../media/headerJ.png";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={headerImg} alt=" Translation" />
      </div>
    );
  }
}
