package com.ssaca.model.dao;

import com.ssaca.model.dto.ChatMessage;

import java.util.List;

public interface ChatMessageDao {

    // 전체 메세지
    List<ChatMessage> selectAll();

    // 메세지 상세보기
    ChatMessage selectOne(int id);

    // 메세지 보내기
    int insertMessage(ChatMessage chatMessage);

    // 메세지 삭제
    int deleteMessage(int id);
}
