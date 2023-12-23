package com.ssaca.controller;

import com.ssaca.model.dto.User;
import com.ssaca.model.service.UserService;
import com.ssaca.util.JWTUtil;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/user")
@Tag(name = "유저 컨트롤러")
public class UserRestController {

    @Autowired
    UserService userService;

    @Autowired
    JWTUtil jwtUtil;

    // 전체 회원 조회
    @GetMapping("/list")
    @Operation(summary = "전체 회원 조회")
    public ResponseEntity<?> selectAll() {
        List<User> userList = userService.selectAll();
        if (userList == null || userList.size() == 0)
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<List>(userList, HttpStatus.OK);
    }

    // 회원 조회
    @GetMapping("/{id}")
    @Operation(summary = "회원 조회")
    public ResponseEntity<?> selectOne(@PathVariable String id) {
        User user = userService.selectOne(id);
        if (user == null)
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    // 회원 검색
    @GetMapping("/list/{word}")
    @Operation(summary = "회원 조회(닉네임)")
    public ResponseEntity<?> searchUsers(@PathVariable String word) {
        List<User> userList = userService.searchUsers(word);
        if (userList == null || userList.size() == 0)
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<List<User>>(userList, HttpStatus.OK);
    }


    // 회원 가입
    @PostMapping("/")
    @Operation(summary = "회원가입")
    public ResponseEntity<?> insertUser(@RequestBody User user) {
        int result = userService.insertUser(user);
        if (result == 0)
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<User>(user, HttpStatus.CREATED);
    }

    // 회원 탈퇴
    @DeleteMapping("/{id}")
    @Operation(summary = "회원 탈퇴")
    public ResponseEntity<?> deleteUser(@PathVariable String id) {
        int result = userService.deleteUser(id);
        if (result == 0)
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    // 로그인
    @PostMapping("/login")
    @Operation(summary = "로그인")
    public ResponseEntity<?> login(@RequestBody User user) throws UnsupportedEncodingException {

        Map<String, Object> result = new HashMap<>();

        HttpStatus status = null;

        User loginUser = userService.selectOne(user.getId());
        if(loginUser != null && loginUser.getPassword().equals(user.getPassword())){
            System.out.println("success"); //
            result.put("access-token", jwtUtil.createToken("id", user.getId()));
            result.put("message", "success");
            status = HttpStatus.ACCEPTED;
        }else{
            System.out.println("fail"); //
            result.put("message", "fail");
            status = HttpStatus.NO_CONTENT;
        }

        return new ResponseEntity<>(result, status);
    }

    // 로그아웃
    @PostMapping("/logout")
    @Operation(summary = "로그아웃")
    public ResponseEntity<Void> logout(HttpSession session) {
        String str = (String) session.getAttribute("loginUser");
        if (str == null) {
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        }
        session.invalidate();
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

}
