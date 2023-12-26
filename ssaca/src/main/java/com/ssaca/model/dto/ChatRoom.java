package com.ssaca.model.dto;

public class ChatRoom {
    private int id;
    private String userId;
    private int boardId;

    public ChatRoom() {
    }

    public ChatRoom(int id, String userId, int boardId) {
        this.id = id;
        this.userId = userId;
        this.boardId = boardId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public int getBoardId() {
        return boardId;
    }

    public void setBoardId(int boardId) {
        this.boardId = boardId;
    }

    @Override
    public String toString() {
        return "ChatRoom{" +
                "id=" + id +
                ", userId='" + userId + '\'' +
                ", boardId='" + boardId + '\'' +
                '}';
    }
}
