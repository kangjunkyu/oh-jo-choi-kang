import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./Login.css";

const Login = () => {
  const API = "http://localhost:8080/user";

  const [state, setState] = useState({
    id: "",
    password: "",
  });

  // 카카오 로그인
  const REST_API_KEY = "30a2cc6b30207a6103d6d48f7605305e";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao";
  const KaKaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  async function doKakaoLogin(e) {
    e.preventDefault();
    try {
      window.location.href = KaKaoURL;
    } catch (error) {
      alert("doKakaoLogin - Error");
    }
  }

  // 로그인
  async function doLogin(e) {
    e.preventDefault();

    try {
      const response = await axios.post(`${API}/login`, {
        id: state.id,
        password: state.password,
        nickname: state.nickname,
      });

      if (response.data["message"] === "success") {
        console.log("login-success"); // 실행 순서: 1
        sessionStorage.setItem("accessToken", response.data["access-token"]);

        const nickname = await getNickname();

        sessionStorage.setItem("nickname", nickname);
        sessionStorage.setItem("isLogin", true);
        sessionStorage.setItem("id", state.id);

        console.log("login-success-end"); // 실행 순서: 4
        window.location.href = "/";
      } else {
        console.log("login-fail"); //
        Swal.fire({
          icon: "error",
          title: "로그인 실패",
          html: `
          <h4>아이디 또는 비밀번호를 다시 확인해주세요.</h4>
          <br/><hr/><br/>
            처음이신가요?<br>
            <b><a href="/regist" style="color:green">여기</a></b>
            를 눌러 회원가입
          `,
          showCancelButton: false,
          confirmButtonText: "돌아가기",
        });
      }
    } catch (error) {
      console.log("Login - Error : ", error); //
    }
  }

  // 유저 닉네임 얻어오기
  async function getNickname() {
    console.log("getNickname"); // 실행 순서: 2
    try {
      const response = await axios.get(`${API}/${state.id}`);
      console.log("getNickname - then"); // 실행 순서: 3
      console.log(response.data["nickname"]);
      return response.data["nickname"];
    } catch (error) {
      console.log("getNickname Error: ", error);
    }
  }

  return (
    <div className="Login">
      <h2>SSACA</h2>
      <div className="LoginForm">
        <form onSubmit={doLogin}>
          <h4>싸카에 오신 것을 환영합니다.</h4>
          <input
            type="text"
            id="id"
            placeholder="아이디"
            value={state.id}
            onChange={(e) => {
              setState({ ...state, id: e.target.value });
            }}
          />

          <input
            type="password"
            placeholder="비밀번호"
            value={state.password}
            onChange={(e) => {
              setState({
                ...state,
                password: e.target.value,
              });
            }}
          />
          <button className="button-login" type="submit">
            로그인
          </button>
        </form>
        <button className="button-kakao" onClick={doKakaoLogin}>
          카카오로 시작하기
        </button>
      </div>
    </div>
  );
};
export default Login;
