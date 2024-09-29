package com.GamBox.Project.service;

import com.GamBox.Project.domain.GameInfo;
import com.GamBox.Project.domain.LikedGamesInfo;
import com.GamBox.Project.domain.UserInfo;
import com.GamBox.Project.repository.UserInfoRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.GamBox.Project.repository.LikedGameInfoRepository;
import com.GamBox.Project.repository.GameInfoRepository;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {
  @Autowired
  private UserInfoRepository userInfoRepository;
  @Autowired
  private GameInfoRepository gameInfoRepository;

  private final LikedGameInfoRepository likedGameInfoRepository;

  public void likeGame(UserInfo user, Long gameId) {
    LikedGamesInfo likedGame = new LikedGamesInfo();
    likedGame.setUser(user);
    likedGame.setGame(gameInfoRepository.findBygameId(gameId).get());
    likedGameInfoRepository.save(likedGame);
  }

  public void unlikeGame(Long likedGameId) {
    likedGameInfoRepository.deleteById(likedGameId);
  }

  public List<LikedGamesInfo> getLikedGames(Long userId) {
    return likedGameInfoRepository.findByUser_uId(userId);
  }

  public UserInfo create(UserInfo user) {
    return userInfoRepository.save(user);
  }

  public List<UserInfo> allUsers() {
    return userInfoRepository.findAll();
  }

  public Optional<UserInfo> singleUser(Long uId) {
    return userInfoRepository.findById(uId);
  }

  public Optional<UserInfo> auth(String userEmail, String password) {
    return userInfoRepository.findByEmailAndPassword(userEmail, password);
  }

  public UserInfo save(UserInfo userInfo) {
    return userInfoRepository.save(userInfo);
  }

  public Optional<UserInfo> check(String username) {
    return userInfoRepository.findByUserName(username);
  }

}
