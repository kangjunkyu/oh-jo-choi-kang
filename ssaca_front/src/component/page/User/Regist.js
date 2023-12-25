import "./Regist.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

const Regist = () => {
  const API = "http://localhost:8080/user";

  const [state, setState] = useState({
    id: "",
    password: "",
    pwCorrect: "",
    nickname: "",
    isExist: false,
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
      Swal.fire({
        icon: "success",
        title: "가입 성공",
        text: "SSACA에 오신 것을 환영합니다!",
        showCancelButton: false,
        confirmButtonText: "닫기",
      }).then(() => {
        window.location.href = "/";
      });
    } catch (error) {
      console.log("Regist - Error : ", error);
    }
  }

  // 아이디 중복 확인
  useEffect(() => {
    getStatus();
  }, [state.id]);

  const getStatus = async () => {
    setState({
      ...state,
      isExist: await getId(),
    });
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
      console.log("getId - Error : ", error);
      return false;
    }
  };

  return (
    <div className="Regist">
      <h2>SSACA</h2>
      <form onSubmit={doRegist}>
        <h4>회원가입</h4>

        <input
          className={
            state.id < 1 ? "" : state.isExist ? "InCorrect" : "Correct"
          }
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
        <span>
          {state.id < 1
            ? ""
            : state.isExist
            ? "이미 존재하는 아이디입니다."
            : ""}
        </span>

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

        <span>
          {state.password < 1
            ? ""
            : state.password.length > 3
            ? ""
            : "비밀번호를 4글자 이상 입력해주세요."}
        </span>

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

        <span>
          {state.pwCorrect < 1
            ? ""
            : state.password === state.pwCorrect
            ? ""
            : "비밀번호가 다릅니다."}
        </span>

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
        <span>
          {state.nickname < 1
            ? ""
            : state.nickname.length > 2
            ? ""
            : "닉네임을 3글자 이상 입력해주세요."}
        </span>
        <button
          className={
            !state.isExist &&
            state.password.length > 3 &&
            state.password === state.pwCorrect &&
            state.nickname.length > 2
              ? "button-regist"
              : "button-regist-disable"
          }
          type="submit"
          disable={
            !state.isExist &&
            state.password.length > 3 &&
            state.password === state.pwCorrect &&
            state.nickname.length > 2
              ? ""
              : "disable"
          }
        >
          회원가입
        </button>
      </form>
    </div>
  );
};
export default Regist;
