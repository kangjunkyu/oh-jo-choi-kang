import BoardList from "./BoardList";
import React, { useEffect, useState, useRef } from "react";

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
