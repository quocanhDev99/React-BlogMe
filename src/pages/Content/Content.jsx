import React from "react";
import Resources from "../../constants/images";
import "./content.css";

export default function Content() {
  return (
    <div className="content">
      <img src={Resources.post.postImg2} alt="" className="contentImg" />
      <form className="contentForm">
        <div className="contentFormGroup">
          <label htmlFor="fileInput">
            <i class="contentIcon fas fa-plus-square"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Tiêu đề"
            className="contentInput"
            autoFocus={true}
          />
        </div>
        <div className="contentFormGroup">
          <textarea
            placeholder="Hãy viết lên câu chuyện của bạn..."
            type="text"
            className="contentInput contentTxt"
          ></textarea>
        </div>
        <button className="contentSubmit">Đăng đi nào!</button>
      </form>
    </div>
  );
}
