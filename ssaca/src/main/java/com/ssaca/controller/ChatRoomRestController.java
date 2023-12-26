package com.ssaca.controller;

import com.ssaca.model.dto.ChatRoom;
import com.ssaca.model.service.ChatRoomService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/chat")
@Tag(name = "채팅방 컨트롤러")
public class ChatRoomRestController {

    @Autowired
    ChatRoomService chatRoomService;

    @GetMapping("/list")
    @Operation(summary = "전체 조회")
    public ResponseEntity<?> selectAll() {
        List<ChatRoom> list = chatRoomService.selectAll();
        if (list == null || list.size() == 0)
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<List>(list, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @Operation(summary = "조회")
    public ResponseEntity<?> selectOne(@PathVariable int id) {
        ChatRoom chatRoom = chatRoomService.selectOne(id);
        if (chatRoom == null)
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<ChatRoom>(chatRoom, HttpStatus.OK);
    }

    @PostMapping("/search")
    @Operation(summary = "채팅방 존재여부 조회")
    public ResponseEntity<?> idSearch(@RequestBody ChatRoom chatRoom) {
        int id = chatRoomService.idSearch(chatRoom.getUserId(), chatRoom.getBoardId());
        if (id == 0)
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<Integer>(id, HttpStatus.OK);
    }

    @PostMapping("/")
    @Operation(summary = "채팅방 생성")
    public ResponseEntity<?> insertChatRoom(@RequestBody ChatRoom chatRoom) {
        int result = chatRoomService.insertChatRoom(chatRoom);
        if (result == 0)
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<ChatRoom>(chatRoom, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "채팅방 삭제")
    public ResponseEntity<?> deleteChatRoom(@PathVariable int id) {
        int result = chatRoomService.deleteChatRoom(id);
        if (result == 0)
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }
}
