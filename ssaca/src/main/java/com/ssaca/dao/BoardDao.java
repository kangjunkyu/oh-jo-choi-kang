package com.ssaca.dao;

import com.ssaca.dto.Board;

import java.util.List;

public interface BoardDao {

    // 전체 조회
    List<Board> selectAll();

    // 상세 조회
    Board selectOne(int id);

    // 게시판 등록
    int insertBoard(Board board);

    // 게시판 수정
    void updateBoard(Board board);

    // 게시판 삭제
    void deleteBoard(int id);

    // 조회수 증가
    void updateViewCnt(int id);

}
