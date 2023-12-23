import React, { useEffect, useRef, useState } from "react";

const BoardUpdate = ({ onEdit, boardDetail }) => {
  const [state, setState] = useState({
    id: "",
    title: "",
    content: "",
    writer: "",
    regDate: "",
    viewCnt: 0,
    price: "",
    img: null, // URL이나 문자열 대신 파일 객체
    orgImg: "",
  });

  useEffect(() => {
    if (boardDetail) {
      setState({
        id: boardDetail.id,
        title: boardDetail.title,
        content: boardDetail.content,
        price: boardDetail.price,
        img: null,
        orgImg: boardDetail.orgImg,
      });
    }
  }, [boardDetail]);

  const titleInput = useRef();
  const contentInput = useRef();
  const priceInput = useRef();

  const handleChangeState = (e) => {
    const { name, value, files } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value, // 파일 입력인 경우 파일을 저장하고, 그렇지 않은 경우 값 저장
    }));
  };

  const handleSubmit = () => {
    onEdit(state);
    alert("수정 성공");
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
        <button onClick={handleSubmit}>게시글 수정하기</button>
      </div>
    </div>
  );
};

export default BoardUpdate;
