import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import Resources from "../../constants/images";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">
            Cập nhật thông tin tài khoản
          </span>
          <span className="settingDeleteTitle">Xóa thông tin tài khoản</span>
        </div>
        <form className="settingForm">
          <label>Ảnh đại diện</label>
          <div className="settingProfilePicture">
            <img src={Resources.post.postImg5} alt="" />
            <label htmlFor="fileInput">
              <i className="settingPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Tài khoản</label>
          <input type="text" placeholder="Quốc Anh" />
          <label>Email</label>
          <input type="email" placeholder="quocanh@gmail.com" />
          <label>Mật khẩu</label>
          <input type="password" />
          <button type="submit" className="settingSubmit">
            Cập nhật đi nào!
          </button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}
