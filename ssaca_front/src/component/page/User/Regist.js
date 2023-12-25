import "./Regist.css";
import axios from "axios";
import { useState } from "react";

const Regist = () => {
  const API = "http://localhost:8080/user";

  const [state, setState] = useState({
    id: "",
    password: "",
    pwCorrect: "",
    nickname: "",
  });

  // 회원가입
  async function doRegist(e) {
    e.preventDefault();

    try {
      const response = await axios.post(`${API}/`, {
        id: state.id,
        password: state.password,
        nickname: state.nickname,
      });
      console.log(response);
      window.location.href = "/";
    } catch (error) {
      console.log("Regist - Error : ", error);
    }
  }

  // 아이디 중복 확인
  const getStatus = async () => {
    const isExist = await getId();
    console.log("isExist: ", isExist);
    return isExist ? "InCorrect" : "Correct";
  };

  const getId = async () => {
    try {
      const response = await axios.get(`${API}/${state.id}`);
      console.log(state.id);
      return response.status === 200 ? true : false;
    } catch (error) {
      console.log("getId Error: ", error);
      return false;
    }
  };

  return (
    <div className="Regist">
      <h2>SSACA</h2>
      <form onSubmit={doRegist}>
        <h4>회원가입</h4>

        <input
          className={state.id < 1 ? "" : getStatus()}
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
          className={
            state.password < 1
              ? ""
              : state.password.length > 3
              ? "Correct"
              : "InCorrect"
          }
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

        <input
          className={
            state.pwCorrect < 1
              ? ""
              : state.password === state.pwCorrect
              ? "Correct"
              : "InCorrect"
          }
          type="password"
          placeholder="비밀번호 확인"
          value={state.pwCorrect}
          onChange={(e) => {
            setState({
              ...state,
              pwCorrect: e.target.value,
            });
          }}
        />

        <input
          className={
            state.nickname < 1
              ? ""
              : state.nickname.length > 2
              ? "Correct"
              : "InCorrect"
          }
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
