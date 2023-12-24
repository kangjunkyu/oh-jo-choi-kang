import React, { useState } from "react";

const BoardDetail = ({ boardDetail, onEdit, onRemove }) => {
  if (!boardDetail) {
    return <div>게시글이 선택되지 않았습니다.</div>;
  }
  const { id, title, content, price, img } = boardDetail;

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
        console.log("게시글을 찜했습니다.");
      } else {
        console.error("게시글 찜하기에 실패했습니다.");
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
          <div>title : {title}</div>
          <div>content : {content}</div>
          <div>price : {price}</div>
          <div className="innerButton">
            <button onClick={handleAddToWishlist}>찜하기</button>
            <button>채팅하기</button>
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
