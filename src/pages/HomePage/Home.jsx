import React from "react";
import Header from "../../components/Header/Header";
import Posts from "../../components/Post/Posts";
import SideBar from "../../components/SideBar/SideBar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
}
