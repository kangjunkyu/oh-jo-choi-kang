import "./Regist.css";
import { useState } from "react";

const Regist = () => {
  const [state, setState] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  const doRegist = (e) => {
    e.preventDefault();

    console.log("id : ", state.id);
    console.log("password : ", state.password);
    console.log("nickname : ", state.nickname);

    // 보내기
  };

  return (
    <div className="Regist">
      <h2>SSACA</h2>
      <form onSubmit={doRegist}>
        <h4>회원가입</h4>
        <input
          type="text"
          placeholder="아이디"
          value={state.id}
          onChange={(e) => {
            setState({
              ...state,
              id: e.target.value,
            });
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
        <input placeholder="비밀번호 확인" />
        <input
          type="text"
          placeholder="닉네임"
          value={state.nickname}
          onChange={(e) => {
            setState({
              ...state,
              nickname: e.target.value,
            });
          }}
        />
        <button className="button-regist" type="submit">
          회원가입
        </button>
      </form>
    </div>
  );
};
export default Regist;
