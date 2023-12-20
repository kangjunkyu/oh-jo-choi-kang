package com.ssaca.model.service;

import com.ssaca.model.dto.Board;

import java.util.List;

public interface BoardService {
    // 전체 조회
    List<Board> selectAll();

    // 상세 조회
    Board selectOne(int id);

    // 게시글 등록
    int insertBoard(Board board);

    // 게시글 수정
    void updateBoard(Board board);

    // 게시글 삭제
    void deleteBoard(int id);

    // 조회수 증가
    void updateViewCnt(int id);

}
