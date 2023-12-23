import { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const API = "/";

  const [state, setState] = useState({
    id: "",
    password: "",
  });

  const doLogin = (e) => {
    e.preventDefault();

    console.log("id : ", state.id);
    console.log("password : ", state.password);

    axios
      .post(`${API}/login`, {
        id: state.id,
        password: state.password,
        nickname: state.nickname,
      })
      .then((response) => {
        if (response.headers["message"] === "success") {
          console.log("login-success");
          sessionStorage.setItem(
            "accessToken",
            response.headers["access-token"]
          );
          sessionStorage.setItem("nickname", state.nickname);
          sessionStorage.setItem("isLogin", true);
        } else {
          console.log("login-fail");
        }
      })
      .catch(() => {
        console.log("login-catch");
      });
  };

  return (
    <div className="Login">
      <h2>SSACA</h2>
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
        <button className="button-kakao">카카오로 시작하기</button>
      </form>
    </div>
  );
};
export default Login;
