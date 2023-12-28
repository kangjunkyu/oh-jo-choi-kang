import { Stomp } from "@stomp/stompjs";
import { useState } from "react";
import SockJS from "sockjs-client";
import { frame } from "websocket";

const ChatTest = () => {
  const [recieveList, setRecieveList] = useState([]);

  const stompClient = null;

  const connect = () => {
    const serverURL = "http://localhost:8080";
    const socket = new SockJS(serverURL);
    stompClient = Stomp.over(socket);
    stompClient.connect(
      {},
      (frame) => {
        stompClient.subscribe("/send", (res) => {
          console.log("소켓연결성공", frame);
          setRecieveList((prevList) => [...prevList, JSON.parse(res.body)]);
          console.log(recieveList);
        });
      },
      (error) => {
        console.log("연결실패", error);
      }
    );
  };

  return <></>;
};
export default ChatTest;
