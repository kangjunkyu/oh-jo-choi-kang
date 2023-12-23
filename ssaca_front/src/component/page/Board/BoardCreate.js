import React, { useState, useRef } from "react";

const BoardCreate = ({ onCreate, postData }) => {
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
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [priceInput, setPriceInput] = useState();
  const [imgInput, setImgInput] = useState("");

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
  const writer1 = "oh";
  const handleSubmit2 = async (e) => {
    e.preventDefault();

    const newData = {
      title: titleInput,
      writer: writer1,
      content: contentInput,
      price: parseInt(priceInput),

      img: imgInput,
    };
    // onCreate(state.title, state.content, state.price, state.img);
    // alert("저장 성공");
    // setState({
    //   title: "",
    //   content: "",
    //   price: "",
    //   img: "",
    // });
    console.log(newData);
    console.log(localStorage);
    const response = await postData(newData);
    console.log(response);
  };

  return (
    <div>
      <form onSubmit={handleSubmit2}>
        <div className="BoardCreate">
          <div className="title">게시글 등록</div>
          <div>
            <input
              placeholder="title"
              // value={state.title}
              value={titleInput}
              name="title"
              // onChange={handleChangeState}
              onChange={(e) => setTitleInput(e.target.value)}
            />
          </div>
          <div>
            <textarea
              placeholder="content"
              // value={state.content}
              value={contentInput}
              // ref={contentInput}
              name="content"
              // onChange={handleChangeState}
              onChange={(e) => setContentInput(e.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="price"
              // value={state.price}
              value={priceInput}
              // ref={priceInput}
              name="price"
              // onChange={handleChangeState}
              onChange={(e) => setPriceInput(e.target.value)}
            />
          </div>
          <div>
            <input
              type="file"
              name="file"
              // onChange={handleChangeState}>
              onChange={(e) => setImgInput(e.target.value)}
            ></input>
          </div>
          <div>
            <button onClick={handleSubmit2}>게시글 저장하기</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BoardCreate;
// id, title, content, writer, regDate, viewCnt, price, img, orgImg
