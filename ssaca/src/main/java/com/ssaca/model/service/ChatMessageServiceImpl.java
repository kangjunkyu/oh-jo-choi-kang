package com.ssaca.model.service;

import com.ssaca.model.dao.ChatMessageDao;
import com.ssaca.model.dto.ChatMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatMessageServiceImpl implements ChatMessageService{

    @Autowired
    ChatMessageDao chatMessageDao;

    @Override
    public List<ChatMessage> selectAll() {
        return chatMessageDao.selectAll();
    }

    @Override
    public ChatMessage selectOne(int id) {
        return chatMessageDao.selectOne(id);
    }

    @Override
    public int insertMessage(ChatMessage chatMessage) {
        return chatMessageDao.insertMessage(chatMessage);
    }

    @Override
    public int deleteMessage(int id) {
        return chatMessageDao.deleteMessage(id);
    }
}
