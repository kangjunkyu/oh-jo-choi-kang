package com.ssaca.model.service;

import com.ssaca.model.dao.UserDao;
import com.ssaca.model.dto.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserDao userDao;

    @Override
    public List<User> selectAll() {
        return userDao.selectAll();
    }

    @Override
    public User selectOne(String id) {
        return userDao.selectOne(id);
    }

    @Override
    public List<User> searchUsers(String word) {
        return userDao.searchUsers(word);
    }

    @Override
    public int insertUser(User user) {
        return userDao.insertUser(user);
    }

    @Override
    public int deleteUser(String id) {
        return userDao.deleteUser(id);
    }

    @Override
    public User login(User user) {
        User loginUser = userDao.selectOne(user.getId());
        if(loginUser != null && loginUser.getPassword().equals(user.getPassword()))
            return loginUser;
        return null;
    }
}
