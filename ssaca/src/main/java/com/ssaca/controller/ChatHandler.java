//package com.ssaca.controller;// ChatHandler.java
//
//import com.ssaca.model.dto.ChatMessage;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.messaging.handler.annotation.MessageMapping;
//import org.springframework.messaging.handler.annotation.SendTo;
//import org.springframework.stereotype.Controller;
//
//@Controller
//public class ChatHandler {
//
//    @Autowired
//    private ChatService chatService;
//
//    @MessageMapping("/sendMessage")
//    @SendTo("/topic/chat")
//    public ChatMessage sendMessage(ChatMessage chatMessage) {
//        // 채팅 내용을 DB에 저장
//        chatService.saveChatMessage(chatMessage);
//        return chatMessage;
//    }
//}
