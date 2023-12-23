import React from "react";
import { Link } from "react-router-dom";
import "./HeaderView.css";

const HeaderView = () => {
  // 로그인 유저 정보

  // 로그인 유저 정보가 있는지 확인
  const getLoginUser = () => {
    const token = sessionStorage.getItem("accessToken");
    // 토큰을 서버에 전달 -> 유효한 토큰인지 확인

    const isLogin = sessionStorage.getItem("isLogin");
    if (isLogin) {
      const nickname = sessionStorage.getItem("nickname");
    }
  };

  // 로그아웃

  return (
    <header>
      <div className="HeaderView">
        <Link className="Logo" to={"/"}>
          SSACA
        </Link>
        <div className="Menu">
          <Link to={"/login"}>signIn</Link>
          <Link to={"/regist"}>signUp</Link>
        </div>
      </div>
    </header>
  );
};
export default HeaderView;
