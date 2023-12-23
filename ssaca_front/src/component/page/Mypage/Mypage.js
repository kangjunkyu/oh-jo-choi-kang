import React, { useEffect, useState } from "react";
import MyBoardList from "./MyBoardList";
import WishList from "./WishList";
import axios from "axios";

const Mypage = () => {
  const [boardData, setBoardData] = useState([]);
  const userId = sessionStorage.getItem("id");

  const [wishData, setWishData] = useState([]);

  const getData = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/api/board/user/${userId}`);
      setBoardData(result.data);
    } catch (error) {
      console.error("데이터를 불러오는 중 오류", error);
    }
  };

  useEffect(() => {
    getData();
  }, [userId]); // userId를 useEffect의 의존성으로 추가


  const getWishList = async () => {
    try {
      const result = await axios.get("http://localhost:8080/api/board/wishList", {
        params: {
          userId: userId,
        },
      });
      setWishData(result.data);
    } catch (error) {
      console.error("데이터를 불러오는 중 에러", error)
    }
  };

  useEffect(() => {
    getWishList();
  }, [userId]);

  return (
    <div>

      <div>
        <MyBoardList myBoardList={boardData} />
      </div>
      <div>
        <WishList myWishList={wishData} />
      </div>
    </div>
  );
};

export default Mypage;
