package com.ssaca.controller;

import com.ssaca.model.dto.ChatRoom;
import com.ssaca.model.service.ChatRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/chat")
public class ChatRoomRestController {

    @Autowired
    ChatRoomService chatRoomService;

    @GetMapping("/list")
    public ResponseEntity<?> selectAll() {
        List<ChatRoom> list = chatRoomService.selectAll();
        if (list == null || list.size() == 0)
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<List>(list, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> selectOne(@PathVariable int id) {
        ChatRoom chatRoom = chatRoomService.selectOne(id);
        if (chatRoom == null)
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<ChatRoom>(chatRoom, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<?> insertChatRoom(@RequestBody ChatRoom chatRoom) {
        int result = chatRoomService.insertChatRoom(chatRoom);
        if (result == 0)
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<ChatRoom>(chatRoom, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id")
    public ResponseEntity<?> deleteChatRoom(@PathVariable int id) {
        int result = chatRoomService.deleteChatRoom(id);
        if (result == 0)
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }
}
