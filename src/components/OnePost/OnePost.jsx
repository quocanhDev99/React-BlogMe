import React from "react";
import Resources from "../../constants/images";
import "./onepost.css";

export default function OnePost() {
  return (
    <div className="onepost">
      <img className="postImg" src={Resources.post.postImg3} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Đời sống</span>
          <span className="postCat">Sản phẩm</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 tiếng trước</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget
        nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit.
        Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed
        adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et.
        Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit.
        Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh
        praesent. In hac habitasse platea dictumst quisque sagittis purus.
        Pulvinar elementum integer enim neque volutpat ac.
      </p>
    </div>
  );
}
