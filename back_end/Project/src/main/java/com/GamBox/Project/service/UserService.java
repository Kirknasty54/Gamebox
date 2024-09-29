package com.GamBox.Project.service;

<<<<<<< HEAD
import com.GamBox.Project.domain.UserInfo;
import com.GamBox.Project.repository.UserInfoRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

=======
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import com.GamBox.Project.domain.UserInfo;
import com.GamBox.Project.repository.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
>>>>>>> 4e339c4e8ee168f8dfd73db3cf1355259b88bbed
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {
<<<<<<< HEAD
=======

>>>>>>> 4e339c4e8ee168f8dfd73db3cf1355259b88bbed
  @Autowired
  private UserInfoRepository userInfoRepository;

  public UserInfo create(UserInfo user) {
    return userInfoRepository.save(user);
  }

  public List<UserInfo> allUsers() {
    return userInfoRepository.findAll();
  }

<<<<<<< HEAD
  public Optional<UserInfo> singleUser(Long uId) {
    return userInfoRepository.findById(uId);
=======
  public Optional<UserInfo> singleUser(Long id) {
    return userInfoRepository.findById(id);
>>>>>>> 4e339c4e8ee168f8dfd73db3cf1355259b88bbed
  }

  public Optional<UserInfo> auth(String username, String password) {
    return userInfoRepository.findByUserNameAndPassword(username, password);
  }

  public UserInfo save(UserInfo userInfo) {
    return userInfoRepository.save(userInfo);
  }

  public Optional<UserInfo> check(String username) {
    return userInfoRepository.findByUserName(username);
  }
}
