import React, { useState, useRef } from "react";

const DiaryEditor = ({ onCreate }) => {
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });
  const authorInput = useRef();
  const contentInput = useRef();

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }

    onCreate(state.author, state.content, state.emotion);
    alert("저장 성공");
    setState({
      author: "",
      content: "",
      emotion: "",
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          value={state.author}
          name="author"
          ref={authorInput}
          //   onChange={(e) => {
          //     setState({
          //       ...state,
          //       author: e.target.value,
          //     });
          //   }}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          value={state.content}
          name="content"
          ref={contentInput}
          //   onChange={(e) => {
          //     setState({
          //       ...state,
          //       content: e.target.value,
          //     });
          //   }}
          onChange={handleChangeState}
        ></textarea>
      </div>
      <div>
        오늘의 감정 점수 :
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};
export default DiaryEditor;
