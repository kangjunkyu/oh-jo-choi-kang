import BoardCreate from "../Board/BoardCreate";
import BoardUpdate from "../Board/BoardUpdate";
import BoardList from "./BoardList";
import BoardDetail from "../Board/BoardDetail";
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

  useEffect(() => {
    getData();
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

  const onCreate = (title, content, price, img) => {
    const create_data = new Date().getTime();
    const newItem = {
      title,
      content,
      price,
      img,
      create_data,
    };
    // console.log(newItem);

    setBoardData((prevData) => [newItem, ...prevData]);
  };

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

  return (
    <div className="App">
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
        {/* </Link> */}
      </div>
      {/* <div>
        <BoardList
          onItemClick={onBoardItemClick}
          boardList={boardData}
          onRemove={onRemove}
          onEdit={onEdit}
          onClick={getDetailData}
        />
        <Link to={`/boardDetail/${selectedBoardId}`}>
          {selectedBoardId && (
            <BoardDetail
              boardDetail={(getBoardDetail(selectedBoardId), boardDetailData)}
              onRemove={() => onRemove(selectedBoardId)}
              onEdit={onEdit}
              boardDetailData={boardDetailData}
            />
          )}
        </Link>
      </div> */}
      <BoardCreate onCreate={onCreate} postData={postData} />
      {/* <BoardUpdate
        onEdit={onEdit}
        // getDetailData={getDetailData}
        boardDetail={boardDetailData}
      /> */}
    </div>
  );
};

export default MainPage;
