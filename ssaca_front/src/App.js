<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
=======
import React, { useRef, useEffect, useState } from "react";
>>>>>>> 9f5c2285e19ea88723d0540c7f1eddb98b041ed0
import "./App.css";
import MainPage from "./component/page/Main/MainPage";
import HeaderView from "./component/ui/HeaderView";
import Login from "./component/page/User/Login";
import Regist from "./component/page/User/Regist";

function App() {


  return (
<<<<<<< HEAD
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
=======
    <div className="App">
      <HeaderView />
      <MainPage />
      {/* <FooterView /> */}
    </div>
>>>>>>> 9f5c2285e19ea88723d0540c7f1eddb98b041ed0
  );
}

export default App;
