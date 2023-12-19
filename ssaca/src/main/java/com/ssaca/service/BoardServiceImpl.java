package com.ssaca.service;

import com.ssaca.dao.BoardDao;
import com.ssaca.dto.Board;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardServiceImpl implements BoardService {

    @Autowired
    BoardDao dao;

    @Override
    public List<Board> selectAll() {
        return dao.selectAll();
    }

    @Override
    public Board selectOne(int id) {
        return dao.selectOne(id);
    }

    @Override
    public int insertBoard(Board board) {
        return dao.insertBoard(board);
    }

    @Override
    public void updateBoard(Board board) {
        dao.updateBoard(board);
    }

    @Override
    public void deleteBoard(int id) {
        dao.deleteBoard(id);
    }

    @Override
    public void updateViewCnt(int id) {
        dao.updateViewCnt(id);
    }
}
