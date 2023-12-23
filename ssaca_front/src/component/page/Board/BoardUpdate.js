import React, { useEffect, useRef, useState } from "react";

const BoardUpdate = ({ onEdit }) => {
  const [state, setState] = useState({
    id: "",
    title: "",
    content: "",
    writer: "",
    regDate: "",
    viewCnt: 0,
    price: "",
    img: "",
    orgImg: "",
  });

  const idInput = useRef();
  const titleInput = useRef();
  const contentInput = useRef();
  const priceInput = useRef();
  const imgInput = useRef();

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // if (state.title.length < 1) {
    //   titleInput.current.focus();
    //   return;
    // }

    // if (state.content.length < 5) {
    //   contentInput.current.focus();
    //   return;
    // }

    // if (state.price.length <= 0) {
    //   priceInput.current.focus();
    //   return;
    // }

    onEdit(state.title, state.content, state.price);
    alert("저장 성공");
    setState({
      title: "",
      content: "",
      price: "",
      img: "",
    });
  };
  return (
    <div className="BoardCreate">
      <div className="title">게시글 수정</div>
      <div>
        <input
          placeholder="title"
          value={state.title}
          ref={titleInput}
          name="title"
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          placeholder="content"
          value={state.content}
          ref={contentInput}
          name="content"
          onChange={handleChangeState}
        />
      </div>
      <div>
        <input
          placeholder="price"
          value={state.price}
          ref={priceInput}
          name="price"
          onChange={handleChangeState}
        />
      </div>
      <div>
        <input type="file" name="file" onChange={handleChangeState}></input>
      </div>
      <div>
        <button onClick={handleSubmit}>게시글 수정하기</button>
      </div>
    </div>
  );
};
export default BoardUpdate;
