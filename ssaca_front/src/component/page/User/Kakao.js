import React, { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Kakao = () => {
  const REST_API_KEY = "30a2cc6b30207a6103d6d48f7605305e";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao";

  useEffect(() => {
    getCode();
  }, []);

  async function getCode() {
    try {
      const code = new URL(window.location.href).searchParams.get("code");
      if (code) {
        await getAccessToken(code);
      } else {
        console.log("try-else");
      }
    } catch (error) {
      alert(error);
    }
  }

  async function getAccessToken(AUTHORIZATION_CODE) {
    try {
      const response = await axios({
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        url: "https://kauth.kakao.com/oauth/token",
        data: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${AUTHORIZATION_CODE}`,
      });

      console.log(response.data);
      await getKakaoUserInfo(response.data.access_token);
    } catch (error) {
      console.error(error);
    }
  }

  async function getKakaoUserInfo(ACCESS_TOKEN) {
    try {
      const response = await axios({
        method: "GET",
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        url: "https://kapi.kakao.com/v2/user/me",
      });

      console.log(response.data);

      sessionStorage.setItem("isLogin", true);
      sessionStorage.setItem("id", response.data.id);
      sessionStorage.setItem(
        "nickname",
        response.data.kakao_account.profile.nickname
      );
      Swal.fire({
        icon: "success",
        title: "로그인 되었습니다.",
        showCancelButton: false,
        confirmButtonText: "닫기",
      }).then(() => {
        window.location.href = "/";
      });
    } catch (error) {
      console.error(error);
    }
  }

  return <></>;
};

export default Kakao;
