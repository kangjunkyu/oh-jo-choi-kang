package com.ssaca.model.service;

import com.ssaca.model.dto.ChatRoom;

import java.util.List;

public interface ChatRoomService {

    // 전체 채팅방 조회
    List<ChatRoom> selectAll();

    // 채팅방 조회
    ChatRoom selectOne(int id);

    // 채팅방 생성
    int insertChatRoom(ChatRoom chatRoom);

    // 채팅방 삭제
    int deleteChatRoom(int id);
}
