import React, { useState, useRef } from "react";

const BoardCreate = ({ onCreate }) => {
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

    onCreate(state.title, state.content, state.price);
    alert("저장 성공");
    setState({
      title: "",
      content: "",
      price: "",
      img: "",
    });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/board", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(state),
    })
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((res) => {
        // console.log(res);
      });

    onCreate(state.title, state.content, state.price, state.img);
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
      <div className="title">게시글 등록</div>
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
        <button onClick={handleSubmit2}>게시글 저장하기</button>
      </div>
    </div>
  );
};

export default BoardCreate;
// id, title, content, writer, regDate, viewCnt, price, img, orgImg
