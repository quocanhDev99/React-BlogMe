import React from "react";
import "./Header.css";
import Resources from "../../constants/images";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Blog Me</span>
      </div>
      <img className="headerImg" src={Resources.common.banner2} alt="" />
    </div>
  );
}
