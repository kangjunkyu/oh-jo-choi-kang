import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HeaderView.css";

const HeaderView = () => {
  // 로그인 유저 정보
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("isLogin") === "true") {
      setNickname(sessionStorage.getItem("nickname"));
    }
  });

  // 로그아웃
  const doLogout = () => {
    sessionStorage.setItem("isLogin", false);
    sessionStorage.removeItem("nickname");
    window.location.href = "/";
  };

  return (
    <header>
      <div className="HeaderView">
        <Link className="Logo" to={"/"}>
          SSACA
        </Link>
        <div className="Menu">
          {nickname !== "" ? (
            <>
              <h3 className="Greeting">{nickname}님, 환영합니다.</h3>
              <h3 className="Logout" onClick={doLogout}>
                Logout
              </h3>
              <Link to={"/mypage"}>MyPage</Link>
            </>
          ) : (
            <>
              <Link to={"/login"}>signIn</Link>
              <Link to={"/regist"}>signUp</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
export default HeaderView;
