package com.ssaca.controller;

import com.ssaca.model.dto.User;
import com.ssaca.model.service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/user")
public class UserRestController {

    @Autowired
    UserService userService;

    // 전체 회원 조회
    @GetMapping("/list")
    public ResponseEntity<?> selectAll() {
        List<User> userList = userService.selectAll();
        if (userList == null || userList.size() == 0)
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<List>(userList, HttpStatus.OK);
    }

    // 회원 조회
    @GetMapping("/{id}")
    public ResponseEntity<?> selectOne(@PathVariable String id) {
        User user = userService.selectOne(id);
        if (user == null)
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    // 회원 검색
    @GetMapping("/list/{word}")
    public ResponseEntity<?> searchUsers(@PathVariable String word) {
        List<User> userList = userService.searchUsers(word);
        if (userList == null || userList.size() == 0)
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<List<User>>(userList, HttpStatus.OK);
    }


    // 회원 가입
    @PostMapping("/")
    public ResponseEntity<?> insertUser(@RequestBody User user) {
        int result = userService.insertUser(user);
        if (result == 0)
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<User>(user, HttpStatus.CREATED);
    }

    // 회원 탈퇴
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable String id) {
        int result = userService.deleteUser(id);
        if (result == 0)
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    // 로그인
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user, HttpSession session) {
        User loginUser = userService.login(user);
        if (loginUser == null)
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);

        session.setAttribute("loginUser", loginUser);
        return new ResponseEntity<User>(loginUser, HttpStatus.OK);
    }

    // 로그아웃
    @PostMapping("/logout")
    public ResponseEntity<Void> logout(HttpSession session) {
        String str = (String) session.getAttribute("loginUser");
        if (str == null) {
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        }
        session.invalidate();
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

}
