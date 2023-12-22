import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [state, setState] = useState({
    id: "",
    password: "",
  });

  const doLogin = (e) => {
    e.preventDefault();

    console.log("id : ", state.id);
    console.log("password : ", state.password);

    // 어딘가로 보낼거아냐 근데 그게 어딘지 모르니까..
  };

  return (
    <div className="Login">
      <h1>SSACA</h1>
      <form onSubmit={doLogin}>
        <h4>싸카에 오신 것을 환영합니다.</h4>
        <input
          type="text"
          id="id"
          value={state.id}
          onChange={(e) => {
            setState({ ...state, id: e.target.value });
          }}
        />

        <input
          type="password"
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
