package com.ssaca.controller;

import com.ssaca.model.dto.Board;
import com.ssaca.model.service.BoardService;
import com.ssaca.model.dto.wishList;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class BoardRestController {

    @Autowired
    BoardService boardService;

    @GetMapping("/board")
    @Tag(name = "게시글 전체 조회")
    public ResponseEntity<?> getBoardList() {
        List<Board> result = boardService.selectAll();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/board/{id}")
    @Tag(name = "게시글 상세 조회")
    public ResponseEntity<?> getBoard(@PathVariable int id) {
        Board result = boardService.selectOne(id);
        if (result == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    // 게시글 등록
    @PostMapping("/board")
    @Tag(name = "게시글 등록")
    public ResponseEntity<?> createBoard(@RequestBody Board board) {
        int result = boardService.insertBoard(board);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @DeleteMapping("/board/{id}")
    @Tag(name = "게시글 삭제")
    public ResponseEntity<?> deleteBoard(@PathVariable int id) {
        boardService.deleteBoard(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/board")
    @Tag(name = "게시글 수정")
    public ResponseEntity<?> updateBoard(@RequestBody Board board) {
        boardService.updateBoard(board);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/board/{id}")
    @Tag(name = "조회수 증가")
    public ResponseEntity<?> updateViewCnt(@PathVariable int id) {
        boardService.updateViewCnt(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/board/like")
    @Tag(name = "찜하기")
    public ResponseEntity<?> insertWishList(@RequestBody wishList wishList) {
        boardService.insertWishList(wishList);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/board/dislike")
    @Tag(name = "찜하기 해제")
    public ResponseEntity<?> deleteWishList(@RequestBody wishList wishList) {
        boardService.deleteWishList(wishList);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 찜한 게시물 전체 조회
    @GetMapping("/board/like")
    @Tag(name = "찜한 게시글 전체 조회")
    public ResponseEntity<?> getWishList(String userId){
        List<Board> result = boardService.selectAllWishList(userId);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }


}
