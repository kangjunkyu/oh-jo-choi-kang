package com.ssaca.model.dto;

public class ChatRoom {
    private int id;
    private String sellerId;
    private String userId;

    public ChatRoom() {
    }

    public ChatRoom(int id, String sellerId, String userId) {
        this.id = id;
        this.sellerId = sellerId;
        this.userId = userId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSellerId() {
        return sellerId;
    }

    public void setSellerId(String sellerId) {
        this.sellerId = sellerId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "ChatRoom{" +
                "id=" + id +
                ", sellerId='" + sellerId + '\'' +
                ", userId='" + userId + '\'' +
                '}';
    }
}
