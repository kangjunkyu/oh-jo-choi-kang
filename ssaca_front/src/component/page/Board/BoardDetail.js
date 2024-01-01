import ChatList from "../Mypage/ChatList";
import ChatDetail from "../Chat/ChatDetail";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BoardUpdate from "./BoardUpdate";

const BoardDetail = ({ onEdit, onRemove }) => {
  const { idParam } = useParams();

  const [chatData, setChatData] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [chatDetailData, setChatDetailData] = useState(null);
  const [boardDetailData, setBoardDetailData] = useState(null);
<<<<<<< HEAD
  const [isWishListed, setIsWishListed] = useState(false);
=======
>>>>>>> refs/remotes/origin/main

  const navigate = useNavigate();

  const goToChat = () => {
    navigate("/chat");
  };

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
    console.log(boardDetailData);
    console.log(idParam);
  }, [idParam]);

  if (!boardDetailData) {
    return <div>게시글이 선택되지 않았습니다.</div>;
  }

  const { id, writer, title, content, price, img } = boardDetailData;

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
            boardId: boardDetailData.id,
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
          boardId: boardDetailData.id,
        }),
      });

      if (response.ok) {
        const chatData = await response.json();
        const selectedChatId = chatData.id;
        setSelectedChatId(selectedChatId);
        goToChat();
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

  const handleToggleWishlist = async () => {
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
            boardId: boardDetailData.id,
          }),
        }
      );

      if (response.ok) {
        // 찜 상태를 토글합니다.
        setIsWishListed(!isWishListed);

        if (isWishListed) {
          alert("찜을 취소했습니다.");
        } else {
          alert("게시글을 찜했습니다.");
        }
      } else {
        alert("찜 상태를 변경하는데 실패했습니다.");
      }
    } catch (error) {
      console.error("찜 상태 변경 중 오류 발생:", error);
    }
  };

  return (
    <div className="BoardDetail">
      <div className="detailTitle">게시글 상세 내역</div>
      <div className="detailCard">
        <div className="left">
          <img src={img} alt="Board" />
        </div>
        <div className="right">
          <div>상태 : 판매중</div>
          <div>작성자 : {writer}</div>
          <div>title : {title}</div>
          <div>content : {content}</div>
          <div>price : {price}</div>
          <div className="innerButton">
            <button onClick={handleToggleWishlist}>
              {isWishListed ? "찜 취소" : "찜하기"}
            </button>
            {selectedChatId && <Link to={"/chat"}>채팅하기</Link>}
            {!selectedChatId && <button onClick={handleChat}>채팅하기</button>}
          </div>
        </div>
      </div>
      <div className="button">
        <Link to={`/boardUpdate/${idParam}`}>
          <button>수정</button>
        </Link>
        <button onClick={() => handleRemove(id)}>삭제</button>
      </div>
    </div>
  );
};

export default BoardDetail;
