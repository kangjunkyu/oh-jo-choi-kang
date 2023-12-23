import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./component/page/Main/MainPage";
import HeaderView from "./component/ui/HeaderView";
import Login from "./component/page/User/Login";
import Regist from "./component/page/User/Regist";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderView />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regist" element={<Regist />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
