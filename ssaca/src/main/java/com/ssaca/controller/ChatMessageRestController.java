package com.ssaca.controller;

import com.ssaca.model.dto.ChatMessage;
import com.ssaca.model.dto.ChatRoom;
import com.ssaca.model.service.ChatMessageService;
import com.ssaca.model.service.ChatRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/message")
public class ChatMessageRestController {

    @Autowired
    ChatMessageService chatMessageService;

    @GetMapping("/list")
    public ResponseEntity<?> selectAll() {
        List<ChatMessage> list = chatMessageService.selectAll();
        if (list == null || list.size() == 0)
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<List>(list, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> selectOne(@PathVariable int id) {
        ChatMessage chatMessage = chatMessageService.selectOne(id);
        if (chatMessage == null)
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<ChatMessage>(chatMessage, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<?> insertChatRoom(@RequestBody ChatMessage chatMessage) {
        int result = chatMessageService.insertMessage(chatMessage);
        if (result == 0)
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<ChatMessage>(chatMessage, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteChatRoom(@PathVariable int id) {
        int result = chatMessageService.deleteMessage(id);
        if (result == 0)
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }
}
