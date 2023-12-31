import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BoardUpdate = ({}) => {
  const { idParam } = useParams();
  const navigate = useNavigate();
  const [BoardDetailData, setBoardDetailData] = useState(null);
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

  const getBoardDetailData = async (idParam) => {
    try {
      const res = await fetch(`http://localhost:8080/api/board/${idParam}`);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      console.log(data);
      setBoardDetailData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getBoardDetailData(idParam);
    console.log("boardDetailData : ", BoardDetailData);
    console.log("idParams:", idParam);
  }, [idParam]);

  useEffect(() => {
    if (BoardDetailData) {
      setState({
        id: BoardDetailData.id,
        title: BoardDetailData.title,
        content: BoardDetailData.content,
        price: BoardDetailData.price,
        img: null,
        orgImg: BoardDetailData.orgImg,
      });
    }
  }, [BoardDetailData]);

  const onEdit = async (updatedData) => {
    try {
      const response = await fetch("http://localhost:8080/api/board", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      console.log(response);
      if (response.ok) {
        // const newData = await response.json();

        // console.log(newData);
        console.log("요청성공");
      } else {
        console.error("Error 서버 응답 실패");
      }
    } catch (error) {
      console.error("요청 중 오류 발생", error);
    }
  };

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

    navigate("/");
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
