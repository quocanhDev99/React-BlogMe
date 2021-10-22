import React from "react";
import Resources from "../../constants/images";
import "./sidebar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sideBarTitle">Về chúng tôi</span>
        <img src={Resources.post.postImg1} alt="" className="sideBarImg" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
          tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem
          ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.
          Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi
          eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at
          imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis.
          Egestas integer eget aliquet nibh praesent. In hac habitasse platea
          dictumst quisque sagittis purus. Pulvinar elementum integer enim neque
          volutpat ac.
        </p>
        <div className="sidebarItem">
          <span className="sideBarTitle">Thể loại</span>
          <ul className="sideBarList">
            <li className="sideBarListItem">Đời sống</li>
            <li className="sideBarListItem">Sản Phẩm</li>
            <li className="sideBarListItem">Âm nhạc</li>
            <li className="sideBarListItem">Phong cách</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sideBarTitle">Theo dõi chúng tôi</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
            <i className="sidebarIcon fab fa-youtube"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
