package com.ssaca.controller;

import com.ssaca.model.dto.ChatMessage;
import com.ssaca.model.service.ChatMessageService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/message")
@Tag(name = "채팅 메시지 컨트롤러")
public class ChatMessageRestController {

    @Autowired
    ChatMessageService chatMessageService;
    SimpMessageSendingOperations simpMessageSendingOperations;

    @MessageMapping("/{roomId}") //여기로 전송되면 메서드 호출 -> WebSocketConfig prefixes 에서 적용한건 앞에 생략
    @SendToUser("/queue")
    public ChatMessage insertMessage(@RequestBody ChatMessage message, @DestinationVariable int roomId) {
        //채팅 저장
        int result = chatMessageService.insertMessage(message);
        simpMessageSendingOperations.convertAndSend(
                "/sub/receive/" + message.getUserId() + "/product" + message.getRoomId(), message);
        return message;
        //구독하고 있는 장소로 메시지 전송 (목적지)  -> WebSocketConfig Broker 에서 적용한건 앞에 붙어줘야됨
        // sendTo : 브라우저에서 요청
        // simpMessagingTemplate : 어떤 환경에서도 사용가능한 API
    }
    @GetMapping("/list")
    @Operation(summary = "전체 조회")
    public ResponseEntity<?> selectAll() {
        List<ChatMessage> list = chatMessageService.selectAll();
        if (list == null || list.size() == 0)
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<List>(list, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @Operation(summary = "조회")
    public ResponseEntity<?> selectOne(@PathVariable int id) {
        ChatMessage chatMessage = chatMessageService.selectOne(id);
        if (chatMessage == null)
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<ChatMessage>(chatMessage, HttpStatus.OK);
    }

//    @PostMapping("/")
//    public ResponseEntity<?> createChat(@RequestBody ChatMessage chatMessage) {
//        int result = chatMessageService.insertMessage(chatMessage);
//        if (result == 0)
//            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
//        return new ResponseEntity<ChatMessage>(chatMessage, HttpStatus.CREATED);
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<?> deleteChat(@PathVariable int id) {
//        int result = chatMessageService.deleteMessage(id);
//        if (result == 0)
//            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
//        return new ResponseEntity<Void>(HttpStatus.OK);
//    }
}
