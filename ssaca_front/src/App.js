import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./component/page/Main/MainPage";
import HeaderView from "./component/ui/HeaderView";
import Login from "./component/page/User/Login";
import Regist from "./component/page/User/Regist";
import Mypage from "./component/page/Mypage/Mypage";
import Kakao from "./component/page/User/Kakao";
import Chat from "./component/page/Chat/ChatDetail";
import ChatTest from "./component/page/Chat/ChatTest";
import BoardDetail from "./component/page/Board/BoardDetail";
import BoardUpdate from "./component/page/Board/BoardUpdate";
import BoardCreate from "./component/page/Board/BoardCreate";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderView />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regist" element={<Regist />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="oauth/kakao" element={<Kakao />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/chatTest" element={<ChatTest />} />

          <Route path="/boardCreate" element={<BoardCreate />} />
          <Route path="/boardDetail/:idParam" element={<BoardDetail />} />
          <Route path="/boardUpdate/:idParam" element={<BoardUpdate />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
