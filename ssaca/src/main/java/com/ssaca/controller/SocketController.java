package com.ssaca.controller;

import com.ssaca.model.dto.SocketV0;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class SocketController {

    @MessageMapping("/receive")
    @SendTo("/send")
    public SocketV0 SocketHandler(SocketV0 socketV0) {
        String username = socketV0.getUsername();
        String content = socketV0.getContent();

        SocketV0 result = new SocketV0(username, content);

        return result;
    }
}
