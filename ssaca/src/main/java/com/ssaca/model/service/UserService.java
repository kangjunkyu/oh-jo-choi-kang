package com.ssaca.model.service;

import com.ssaca.model.dto.User;

import java.util.List;

public interface UserService {

    // 전체 회원 조회
    List<User> selectAll();

    // 회원 조회
    User selectOne(String id);

    // 회원 검색
    List<User> searchUsers(String word);

    // 회원 가입
    int insertUser(User user);

    // 회원 탈퇴
    int deleteUser(String id);

    // 로그인
    User login(User user);
}
