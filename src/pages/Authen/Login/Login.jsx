import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="Login">
      <span className="loginTitle">Đăng nhập</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Nhập vào tài khoản email..."
        />
        <label>Mật khẩu</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Nhập vào mật khẩu..."
        />
        <button className="loginButton">Đăng nhập nè!</button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register" className="link">
          Đăng kí nè!
        </Link>
      </button>
    </div>
  );
}
