package com.ssaca.controller;

import com.ssaca.model.dto.Board;
import com.ssaca.model.service.BoardService;
import com.ssaca.model.dto.wishList;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api")
@Tag(name = "게시글 컨트롤러")
@CrossOrigin("*")
public class BoardRestController {

    @Autowired
    BoardService boardService;

    @Autowired
    ResourceLoader resourceLoader;
    public ResponseEntity<?> exceptionHandling(Exception e) {
        e.printStackTrace();
        return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping("/board")
    @Operation(summary = "게시글 전체 조회")
    public ResponseEntity<?> getBoardList() {
        List<Board> result = boardService.selectAll();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/board/user/{userId}")
    @Operation(summary = "작성한 게시글 조회")
    public ResponseEntity<?> getUserBoard(@PathVariable String userId) {
        List<Board> result = boardService.selectUser(userId);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/board/{id}")
    @Operation(summary = "게시글 상세 조회")
    public ResponseEntity<?> getBoard(@PathVariable int id) {
        Board result = boardService.selectOne(id);
        if (result == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    // 게시글 등록
    @PostMapping("/board")
    @Operation(summary = "게시글 등록")
    public ResponseEntity<?> createBoard(@ModelAttribute Board board, @RequestParam(required = false) MultipartFile file) throws IOException, IllegalStateException{
        try {
            if (file != null && file.getSize() > 0) {
                Resource res = resourceLoader.getResource("classpath:/static/upload");
                board.setImg(System.currentTimeMillis() + "_" + file.getOriginalFilename());
                board.setOrgImg(file.getOriginalFilename());
                file.transferTo(new File(res.getFile().getCanonicalFile() + "/" + board.getImg()));
            }
            int result = boardService.insertBoard(board);
            if(result == 0){
                return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
            }else{
                return new ResponseEntity<Board>(board, HttpStatus.OK);
            }
        }
        catch (Exception e){
            return exceptionHandling(e);
        }

//        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @DeleteMapping("/board/{id}")
    @Operation(summary = "게시글 삭제")
    public ResponseEntity<?> deleteBoard(@PathVariable int id) {
        boardService.deleteBoard(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/board")
    @Operation(summary = "게시글 수정")
    public ResponseEntity<?> updateBoard(@RequestBody Board board) {
        boardService.updateBoard(board);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/board/{id}")
    @Operation(summary = "게시글 조회수 증가")
    public ResponseEntity<?> updateViewCnt(@PathVariable int id) {
        boardService.updateViewCnt(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/board/insertWishList")
    @Operation(summary = "찜하기")
    public ResponseEntity<?> insertWishList(@RequestBody wishList wishList) {
        boardService.insertWishList(wishList);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/board/deleteWishList")
    @Operation(summary = "찜 삭제")
    public ResponseEntity<?> deleteWishList(@RequestBody wishList wishList) {
        boardService.deleteWishList(wishList);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 찜한 게시물 전체 조회
    @GetMapping("/board/wishList")
    @Operation(summary = "찜한 게시물 전체 조회")
    public ResponseEntity<?> getWishList(String userId) {
        List<Board> result = boardService.selectAllWishList(userId);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("board/wishList/{id}")
    @Operation(summary = "찜한 게시글 선택 조회")
    public ResponseEntity<?> getWishSelectList(@PathVariable int id){
        wishList result = boardService.selectOneWishList(id);
        if(result == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

}
