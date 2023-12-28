package com.ssaca.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class SocketV0 {
    private String username;
    private String content;

    public SocketV0(String username, String content) {
        this.username = username;
        this.content = content;
    }
}
