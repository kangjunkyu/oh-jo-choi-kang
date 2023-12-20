package com.ssaca.model.service;

import com.ssaca.model.dao.ChatRoomDao;
import com.ssaca.model.dto.ChatRoom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatRoomServiceImpl implements ChatRoomService{

    @Autowired
    ChatRoomDao chatRoomDao;

    @Override
    public List<ChatRoom> selectAll() {
        return chatRoomDao.selectAll();
    }

    @Override
    public ChatRoom selectOne(int id) {
        return chatRoomDao.selectOne(id);
    }

    @Override
    public int insertChatRoom(ChatRoom chatRoom) {
        return chatRoomDao.insertChatRoom(chatRoom);
    }

    @Override
    public int deleteChatRoom(int id) {
        return chatRoomDao.deleteChatRoom(id);
    }
}
