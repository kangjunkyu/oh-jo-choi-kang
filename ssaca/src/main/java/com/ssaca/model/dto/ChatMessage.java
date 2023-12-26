package com.ssaca.model.dto;

public class ChatMessage {
    private int id;
    private int roomId;
    private String userId;
    private String message;
    private String regDate;
    private String img;
    private String orgImg;

    public ChatMessage() {
    }

    public ChatMessage(int id, int roomId, String userId, String message, String regDate, String img, String orgImg) {
        this.id = id;
        this.roomId = roomId;
        this.userId = userId;
        this.message = message;
        this.regDate = regDate;
        this.img = img;
        this.orgImg = orgImg;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getRoomId() {
        return roomId;
    }

    public void setRoomId(int roomId) {
        this.roomId = roomId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getRegDate() {
        return regDate;
    }

    public void setRegDate(String regDate) {
        this.regDate = regDate;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getOrgImg() {
        return orgImg;
    }

    public void setOrgImg(String orgImg) {
        this.orgImg = orgImg;
    }

    @Override
    public String toString() {
        return "ChatMessage{" +
                "id=" + id +
                ", roomId=" + roomId +
                ", userId='" + userId + '\'' +
                ", message='" + message + '\'' +
                ", regDate='" + regDate + '\'' +
                ", img='" + img + '\'' +
                ", orgImg='" + orgImg + '\'' +
                '}';
    }
}
