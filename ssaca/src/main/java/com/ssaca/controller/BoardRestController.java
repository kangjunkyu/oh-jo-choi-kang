package com.ssaca.controller;

import com.ssaca.model.dto.Board;
import com.ssaca.model.service.BoardService;
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

    // 게시글 전체조회
    @GetMapping("/board")
    public ResponseEntity<?> getBoardList(){
        List<Board> result = boardService.selectAll();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    // 게시글 상세조회
    @GetMapping("/board/{id}")
    public ResponseEntity<?> getBoard(@PathVariable int id){
        Board result = boardService.selectOne(id);
        if(result == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    // 게시글 등록
    @PostMapping("/board")
    public ResponseEntity<?> createBoard(@RequestBody Board board){
        int result = boardService.insertBoard(board);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    // 게시글 삭제
    @DeleteMapping("/board/{id}")
    public ResponseEntity<?> deleteBoard(@PathVariable int id){
        boardService.deleteBoard(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/board")
    public ResponseEntity<?> updateBoard(@RequestBody Board board){
        boardService.updateBoard(board);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 조회수 증가
    @PutMapping("/board/{id}")
    public ResponseEntity<?> updateViewCnt(@PathVariable int id){
        boardService.updateViewCnt(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
