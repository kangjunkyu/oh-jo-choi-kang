import React, { useState, useRef, useEffect } from "react";
import { Form } from "react-router-dom";

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

  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [priceInput, setPriceInput] = useState();
  // const [imgInput, setImgInput] = useState("");
  const fileInputRef = useRef();

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = () => {
    const file = fileInputRef.current.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setState((prevState) => ({
        ...prevState,
        img: reader.result,
      }));
    };
    reader.readAsDataURL(file); // 파일을 읽도록 추가
  };

  // const handleFileChange = () => {
  //   const file = fileInputRef.current.files[0];
  //   console.log(file);
  //   setState({
  //     ...state,
  //     img: file,
  //   });
  // };

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    const newData = {
      title: titleInput,
      content: contentInput,
      price: parseInt(priceInput),
      writer: sessionStorage.getItem("id"),

      img: state.img,
    };

    // const writeBoard = async () => {
    //   var frm = new FormData();
    //   frm.append("title", newData.title);
    //   console.log(frm);
    //   frm.append("content", newData.content);
    //   console.log(frm);
    //   frm.append("price", newData.price);
    //   console.log(frm);
    //   frm.append("writer", newData.writer);
    //   console.log(frm);
    //   frm.append("img", newData.img);

    //   console.log(frm);
    //   postData(frm);

    //   const response = await postData(frm);
    //   console.log(response);
    // };
    // await writeBoard();

    var formData = new FormData();
    formData.append("title", newData.title);
    formData.append("content", newData.content);
    formData.append("price", newData.price);
    formData.append("writer", newData.writer);
    formData.append("img", newData.img);

    const response = await postData(formData);

    console.log(newData);
    console.log(response);
  };

  return (
    <div>
      <form onSubmit={handleSubmit2} enctype="multipart/form-data">
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
              multiple={true}
              // onChange={handleChangeState}>
              onChange={handleFileChange}
              ref={fileInputRef}
            ></input>
          </div>
          <div>
            <button type="submit">게시글 저장하기</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BoardCreate;
// id, title, content, writer, regDate, viewCnt, price, img, orgImg
