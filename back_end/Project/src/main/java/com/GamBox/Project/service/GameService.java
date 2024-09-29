package com.GamBox.Project.service;

import com.GamBox.Project.repository.GameInfoRepository;
import com.GamBox.Project.repository.LikedGameInfoRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

import com.GamBox.Project.domain.GameInfo;
import java.util.Optional;

@Service
@AllArgsConstructor
public class GameService {
  @Autowired
  private GameInfoRepository gameInfoRepository;

  @Autowired
  private LikedGameInfoRepository likedGameRepository;

  public List<GameInfo> allGames() {
    return gameInfoRepository.findAll();
  }

  public List<GameInfo> getLikedGames(Long userId) {
    // This method should interact with the repository to fetch liked games for the
    // user
    // For example, assuming you have a LikedGameRepository that links users and
    // games:
    return null;
    // return likedGameRepository.findByUser_uId(userId); // Replace with actual
    // method
  }
}

/*
 * import com.GamBox.Project.domain.UserInfo;
 * import com.GamBox.Project.repository.UserInfoRepository;
 * import lombok.AllArgsConstructor;
 * import org.springframework.beans.factory.annotation.Autowired;
 * import org.springframework.stereotype.Service;
 * 
 * import java.util.List;
 * import java.util.Optional;
 * 
 * @Service
 * 
 * @AllArgsConstructor
 * public class UserService {
 * 
 * @Autowired
 * private UserInfoRepository userInfoRepository;
 * 
 * public UserInfo create(UserInfo user) {
 * return userInfoRepository.save(user);
 * }
 * 
 * public List<UserInfo> allUsers() {
 * return userInfoRepository.findAll();
 * }
 * 
 * public Optional<UserInfo> singleUser(Long uId) {
 * return userInfoRepository.findById(uId);
 * }
 * 
 * public Optional<UserInfo> auth(String userEmail, String password) {
 * return userInfoRepository.findByEmailAndPassword(userEmail, password);
 * }
 * 
 * public UserInfo save(UserInfo userInfo) {
 * return userInfoRepository.save(userInfo);
 * }
 * 
 * public Optional<UserInfo> check(String username) {
 * return userInfoRepository.findByUserName(username);
 * }
 * }
 */
