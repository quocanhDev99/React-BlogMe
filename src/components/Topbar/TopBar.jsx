import React from "react";
import "./TopBar.css";
import Resources from "../../constants/images";
import { Link } from "react-router-dom";

export default function TopBar() {
  const user = false;
  return (
    <div>
      <div className="Top">
        <div className="topLeft">
          <i className="topIcon fab fa-facebook"></i>
          <i className="topIcon fab fa-instagram-square"></i>
          <i className="topIcon fab fa-youtube"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link to="/" className="link">
                Trang Chủ
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/" className="link">
                Về chúng tôi
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/" className="link">
                Liên hệ
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/content" className="link">
                Bài viết
              </Link>
            </li>
            <li className="topListItem">{user && "ĐĂNG XUẤT"}</li>
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <img
              className="topImg"
              src={Resources.common.profileImg}
              alt="profile pictures"
            />
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link to="/login" className="link">
                  ĐĂNG NHẬP
                </Link>
              </li>
              <li className="topListItem">
                <Link to="/register" className="link">
                  ĐĂNG KÍ
                </Link>
              </li>
            </ul>
          )}
          <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
    </div>
  );
}
