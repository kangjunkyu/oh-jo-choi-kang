import React, { useState, useRef, useEffect } from "react";
import { Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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

  const postData = async (requestData) => {
    try {
      const response = await fetch("http://localhost:8080/api/board", {
        method: "POST",
        headers: {},
        body: requestData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (err) {
      console.error("Error during POST request:", err);
    }
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

    var formData = new FormData();
    formData.append("title", newData.title);
    formData.append("content", newData.content);
    formData.append("price", newData.price);
    formData.append("writer", newData.writer);
    formData.append("img", newData.img);

    const response = await postData(formData);

    alert("수정 성공");
    navigate("/");
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
