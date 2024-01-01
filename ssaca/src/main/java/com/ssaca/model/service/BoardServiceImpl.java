package com.ssaca.model.service;

import com.ssaca.model.dao.BoardDao;
import com.ssaca.model.dto.Board;
import com.ssaca.model.dto.wishList;
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
    public List<Board> selectUser(String userId) {
        return dao.selectUser(userId);
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

    @Override
    public int insertWishList(wishList wishList) {
        return dao.insertWishList(wishList);
    }

    @Override
    public void deleteWishList(wishList wishList) {
        dao.deleteWishList(wishList);
    }

    @Override
    public List<Board> selectAllWishList(String userId) {
        return dao.selectAllWishList(userId);
    }

    @Override
    public wishList selectOneWishList(int id) {return dao.selectOneWishList(id);}
}
