import React, { useEffect, useState } from "react";
import MyBoardList from "./MyBoardList";
import WishList from "./WishList";
import axios from "axios";
import BoardDetail from "../Board/BoardDetail";

const Mypage = () => {
  const [myBoardData, setMyBoardData] = useState([]);
  const [mySelectedBoardId, setMySelectedBoardId] = useState(null);
  const [myBoardDetailData, setMyBoardDetailData] = useState(null);

  const [wishData, setWishData] = useState([]);
  const [wishSelectedBoardId, setWishSelectedBoardId] = useState(null);
  const [wishBoardDetailData, setWishBoardDetailData] = useState(null);

  const userId = sessionStorage.getItem("id");

  const getMyBoardData = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/api/board/user/${userId}`);
      setMyBoardData(result.data);
    } catch (error) {
      console.error("MyBoard 데이터를 불러오는 중 오류", error);
    }
  };

  useEffect(() => {
    getMyBoardData();
  }, [userId]);

  const getWishList = async () => {
    try {
      const result = await axios.get("http://localhost:8080/api/board/wishList", {
        params: {
          userId: userId,
        },
      });
      setWishData(result.data);
    } catch (error) {
      console.error("WishList 데이터를 불러오는 중 에러", error);
    }
  };

  useEffect(() => {
    getWishList();
  }, [userId]);

  const getBoardDetail = (boardList, selectedId, setDetailData) => {
    const selectedBoard = boardList.find((board) => board.id === selectedId);
    setDetailData(selectedBoard);
  };

  const onMyBoardItemClick = async (id) => {
    setMySelectedBoardId(id);

    try {
      await getMyBoardData();
      getBoardDetail(myBoardData, id, setMyBoardDetailData);
    } catch (error) {
      console.error("MyBoard 오류", error);
    }
  };

  const onWishItemClick = async (id) => {
    setWishSelectedBoardId(id);

    try {
      await getWishList();
      getBoardDetail(wishData, id, setWishBoardDetailData);
    } catch (error) {
      console.error("WishList 오류", error);
    }
  };

  return (
    <div>
      <div>
        <MyBoardList
          onItemClick={onMyBoardItemClick}
          myBoardList={myBoardData}
        />
        {mySelectedBoardId && (
          <BoardDetail
            boardDetail={myBoardDetailData}
          />
        )}
      </div>
      <div>
        <WishList
          onItemClick={onWishItemClick}
          myWishList={wishData}
        />
        {wishSelectedBoardId && (
          <BoardDetail
            boardDetail={wishBoardDetailData}
          />
        )}
      </div>
    </div>
  );
};

export default Mypage;
