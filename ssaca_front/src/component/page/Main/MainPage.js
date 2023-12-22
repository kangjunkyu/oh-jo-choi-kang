import BoardList from "./BoardList";
import React, { useEffect, useState, useRef } from "react";

const boardData = [
  {
    id: 1,
    title: "아이패드 팔아요",
    content: "아이패드 팔아요",
    writer: "강준규",
    regDate: new Date().getTime(),
    viewCnt: 10,
    price: 560000,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    orgImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  },
  {
    id: 1,
    title: "아이패드 팔아요",
    content: "아이패드 팔아요",
    writer: "강준규2",
    regDate: new Date().getTime(),
    viewCnt: 10,
    price: 560000,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    orgImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  },
  {
    id: 1,
    title: "아이패드 팔아요",
    content: "아이패드 팔아요",
    writer: "강준규3",
    regDate: new Date().getTime(),
    viewCnt: 10,
    price: 560000,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    orgImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  },
  {
    id: 1,
    title: "아이패드 팔아요",
    content: "아이패드 팔아요",
    writer: "강준규4",
    regDate: new Date().getTime(),
    viewCnt: 10,
    price: 560000,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    orgImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  },
  {
    id: 1,
    title: "아이패드 팔아요",
    content: "아이패드 팔아요",
    writer: "강준규5",
    regDate: new Date().getTime(),
    viewCnt: 10,
    price: 560000,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    orgImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  },
];

// const getData = async () => {
//   const res = await fetch("http://localhost:8080/api/board").then((res) =>
//     res.json()
//   );
//   console.log(res);
// };

// useEffect(() => {
//   getData();
// }, []);

const MainPage = () => {
  return (
    <div className="App">
      <BoardList boardList={boardData} />
    </div>
  );
};

export default MainPage;
