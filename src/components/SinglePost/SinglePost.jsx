import React from "react";
import Resources from "../../constants/images";
import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlepost">
      <div className="singlePostWrapper">
        <img src={Resources.post.postImg4} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePosition fas fa-edit"></i>
            <i className="singlePosition fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Tác giả: <b>Ben</b>
          </span>
          <span className="singlePostDate">1 tiếng trước</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nisi
          vero praesentium, natus vitae facere rem maiores hic fugiat incidunt
          illum labore molestiae exercitationem recusandae ab rerum minus
          perspiciatis dolore?Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Facilis nisi vero praesentium, natus vitae facere
          rem maiores hic fugiat incidunt illum labore molestiae exercitationem
          recusandae ab rerum minus perspiciatis dolore?Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Facilis nisi vero praesentium,
          natus vitae facere rem maiores hic fugiat incidunt illum labore
          molestiae exercitationem recusandae ab rerum minus perspiciatis
          dolore?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Facilis nisi vero praesentium, natus vitae facere rem maiores hic
          fugiat incidunt illum labore molestiae exercitationem recusandae ab
          rerum minus perspiciatis dolore?
        </p>
      </div>
    </div>
  );
}
