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
public class UserService {
  private final UserInfoRepository userInfoRepository;
  private final GameInfoRepository gameInfoRepository;
  private final LikedGameInfoRepository likedGameInfoRepository;

  public UserService(UserInfoRepository userInfoRepository, GameInfoRepository gameInfoRepository,
      LikedGameInfoRepository likedGameInfoRepository) {
    this.userInfoRepository = userInfoRepository;
    this.gameInfoRepository = gameInfoRepository;
    this.likedGameInfoRepository = likedGameInfoRepository;
  }

  // public void likeGame(UserInfo user, Long gameId) {
  // LikedGamesInfo likedGame = new LikedGamesInfo();
  // likedGame.setUser(user);
  // likedGame.setGame(gameInfoRepository.findBygameId(gameId).get());
  // likedGameInfoRepository.save(likedGame);
  // }

  // public List<LikedGamesInfo> getLikedGames(Long userId) {
  // return likedGameInfoRepository.findByUser_uId(userId);
  // }

  public UserInfo create(UserInfo user) {
    return userInfoRepository.save(user);
  }

  public Optional<UserInfo> singleUser(Long uId) {
    return userInfoRepository.findByuId(uId);
  }

  public List<UserInfo> allUsers() {
    return userInfoRepository.findAll();
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

  // public void likeGame(Long userId, Long gameId) {
  // Optional<LikedGamesInfo> existingLike =
  // likedGameInfoRepository.findByUser_uIdAndGame_gameId(userId, gameId);
  // if (existingLike.isPresent()) {
  // throw new IllegalArgumentException("Game is already liked by this user.");
  // }
  //
  // UserInfo user = userInfoRepository.findById(userId)
  // .orElseThrow(() -> new IllegalArgumentException("User not found"));
  // GameInfo game = gameInfoRepository.findBygameId(gameId)
  // .orElseThrow(() -> new IllegalArgumentException("Game not found"));
  //
  // LikedGamesInfo likedGame = new LikedGamesInfo();
  // likedGame.setUser(user);
  // likedGame.setGame(game);
  // likedGameInfoRepository.save(likedGame);
  // }

  // public void unlikeGame(Long likedGameId) {
  // if (!likedGameInfoRepository.existsById(likedGameId)) {
  // throw new IllegalArgumentException("Liked game not found");
  // }
  // likedGameInfoRepository.deleteById(likedGameId);
  // }
}
