import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Đăng kí</span>
      <form className="registerForm">
        <label>Họ tên</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Nhập vào họ tên..."
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Nhập vào tài khoản email..."
        />
        <label>Mật khẩu</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Nhập vào mật khẩu..."
        />
        <button className="registerButton">Đăng kí nè!</button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/login" className="link">
          Đăng nhập nè!
        </Link>
      </button>
    </div>
  );
}
