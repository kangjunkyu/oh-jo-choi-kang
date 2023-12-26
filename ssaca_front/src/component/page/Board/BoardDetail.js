import ChatList from "../Mypage/ChatList";
import ChatDetail from "../Chat/ChatDetail";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BoardDetail = ({ boardDetail, onEdit, onRemove }) => {
  const [chatData, setChatData] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [chatDetailData, setChatDetailData] = useState(null);

  useEffect(() => {
    getData();
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행
  if (!boardDetail) {
    return <div>게시글이 선택되지 않았습니다.</div>;
  }
  const { id, writer, title, content, price, img } = boardDetail;

  const getData = async () => {
    try {
      const res = await fetch("http://localhost:8080/chat");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      setChatData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getDetailData = async (selectedChatId) => {
    try {
      const res = await fetch(`http://localhost:8080/chat/${selectedChatId}`);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      console.log(data);
      setChatDetailData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const postData = async (requestData) => {
    try {
      const response = await fetch("http://localhost:8080/chat/", {
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

  const getChatDetail = (id) => {
    const selectedChat = chatData.find((chatRoom) => chatRoom.id === id);
    return selectedChat;
  };

  // const onChatClick = async (id) => {
  //   setSelectedChatId(id);

  //   try {
  //     await getData(); // 데이터가 가져와질 때까지 기다림
  //     const chatDetail = await getChatDetail(id); // 게시글 세부 정보가 가져와질 때까지 기다림
  //     setChatDetailData(chatDetail); // 상태에 게시글 세부 정보 설정
  //   } catch (error) {
  //     console.error("데이터를 불러오는 중 오류 발생:", error);
  //   }
  // };

  const handleAddToWishlist = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8080/api/board/insertWishList",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: sessionStorage.getItem("id"),
            boardId: boardDetail.id,
          }),
        }
      );

      if (response.ok) {
        alert("게시글을 찜했습니다.");
      } else {
        alert("게시글 찜하기에 실패했습니다.");
      }
    } catch (error) {
      console.error("요청 중 오류 발생", error);
    }
  };

  const handleChat = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/chat/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: sessionStorage.getItem("id"),
          boardId: boardDetail.id,
        }),
      });

      if (response.ok) {
        const chatData = await response.json();
        const selectedChatId = chatData.id; // 채팅 방의 ID를 가져옴
        setSelectedChatId(selectedChatId);
      } else {
        console.error("채팅 시작에 실패했습니다.");
      }
    } catch (error) {
      console.error("요청 중 오류 발생", error);
    }
  };

  const handleRemove = async (id) => {
    if (window.confirm("정말로 삭제할껴?")) {
      await onRemove(id);
    }
  };

  return (
    <div className="BoardDetail">
      <div className="detailTitle">게시글 상세 내역</div>
      <div className="detailCard">
        <div className="left">
          <img src={img} />
        </div>
        <div className="right">
          <div>상태 : 판매중</div>
          <div>작성자 : {writer}</div>
          <div>title : {title}</div>
          <div>content : {content}</div>
          <div>price : {price}</div>
          <div className="innerButton">
            <button onClick={handleAddToWishlist}>찜하기</button>
            {selectedChatId && <Link to={"/chat"}>채팅하기</Link>}
            {!selectedChatId && <button onClick={handleChat}>채팅하기</button>}
          </div>
        </div>
        <br />
      </div>
      <div className="button">
        <button>수정</button>
        <button onClick={handleRemove}>삭제</button>
      </div>
    </div>
  );
};
export default BoardDetail;
