import BoardList from "./BoardList";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [boardData, setBoardData] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState(null);
  const [boardDetailData, setBoardDetailData] = useState(null);

  const getData = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/board");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      setBoardData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

<<<<<<< HEAD
=======
  // const getDetailData = async (selectedBoardId) => {
  //   try {
  //     const res = await fetch(
  //       `http://localhost:8080/api/board/${selectedBoardId}`
  //     );
  //     if (!res.ok) {
  //       throw new Error("Failed to fetch data");
  //     }

  //     const data = await res.json();
  //     console.log(data);
  //     setBoardDetailData(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

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

  // const requestData = { key: "id" };
  // postData(requestData);

>>>>>>> refs/remotes/origin/main
  useEffect(() => {
    getData();
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

  const onRemove = async (selectedBoardId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/board/${selectedBoardId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setBoardData((prevData) =>
        prevData.filter((item) => item.id !== selectedBoardId)
      );
      if (response.ok) {
        console.log("삭제 성공");
      } else {
        console.error("삭제 실패");
      }
    } catch (error) {
      console.error("요청 중 오류 발생", error);
    }
  };

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

  const getBoardDetail = (id) => {
    const selectedBoard = boardData.find((board) => board.id === id);
    return selectedBoard;
  };

  const onBoardItemClick = async (id) => {
    setSelectedBoardId(id);

    try {
      await getData(); // 데이터가 가져와질 때까지 기다림
      const boardDetail = await getBoardDetail(id); // 게시글 세부 정보가 가져와질 때까지 기다림
      setBoardDetailData(boardDetail); // 상태에 게시글 세부 정보 설정
    } catch (error) {
      console.error("데이터를 불러오는 중 오류 발생:", error);
    }
  };

  const loginCheck = () => {
    if (sessionStorage.getItem("id") === null) {
      alert("로그인을 해야 글 작성이 가능합니다.");
    }
  };

  return (
    <div className="App">
<<<<<<< HEAD
      <Link to={sessionStorage.getItem("id") === null ? "/" : "boardCreate"}>
        <div
          className="writeBoard"
          onClick={loginCheck}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "20px",
            height: "100px",
            width: "150px",
            backgroundColor: "gray",
            textAlign: "center",
            fontSize: "30px",
          }}
        >
          글 작성하기
        </div>
=======
      <Link to={"boardCreate"}>
        <button className="writeBoard">글 작성하기</button>
>>>>>>> refs/remotes/origin/main
      </Link>
      <div>
        {/* <Link to={`/boardDetail/${selectedBoardId}`}> */}
        <BoardList
          onItemClick={onBoardItemClick}
          boardList={boardData}
          onEdit={onEdit}
          // onClick={getDetailData}
          boardDetail={(getBoardDetail(selectedBoardId), boardDetailData)}
          onRemove={() => onRemove(selectedBoardId)}
          boardDetailData={boardDetailData}
        />
      </div>
    </div>
  );
};

export default MainPage;
