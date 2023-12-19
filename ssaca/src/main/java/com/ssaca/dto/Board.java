package com.ssaca.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class Board {
    private int id;
    private String title;
    private String content;
    private String writer;
    private String regDate;
    private int viewCnt;
    private int price;
    private String img;
    private String orgImg;
}
