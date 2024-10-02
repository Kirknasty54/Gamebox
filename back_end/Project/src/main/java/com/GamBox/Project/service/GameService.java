package com.GamBox.Project.service;

import com.GamBox.Project.domain.UserInfo;
import com.GamBox.Project.repository.GameInfoRepository;
import com.GamBox.Project.repository.LikedGameInfoRepository;
import com.GamBox.Project.service.UserService;
import com.GamBox.Project.domain.LikedGamesInfo;
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

  @Autowired
  private UserService userService;

  public List<GameInfo> allGames() {
    return gameInfoRepository.findAll();
  }

  public GameInfo findGame(Long gameId) {
    return gameInfoRepository.findBygameId(gameId).get();
  }

  public void likeGame(Long userId, Long gameId) {
    // Check if the game is already liked
    Optional<LikedGamesInfo> likedGameOpt = likedGameRepository.findByUser_uIdAndGame_gameId(userId, gameId);
    if (!likedGameOpt.isPresent()) {
      // Retrieve user and game entities
      UserInfo user = userService.singleUser(userId)
              .orElseThrow(() -> new IllegalArgumentException("User not found"));
      GameInfo game = findGame(gameId);

      // Create and save the liked game
      LikedGamesInfo likedGame = new LikedGamesInfo(user, game);
      likedGameRepository.save(likedGame);
    } else {
      throw new IllegalArgumentException("Game is already liked by this user.");
    }
  }


  // Method to unlike a game
  public void unlikeGame(Long userId, Long gameId) {
    likedGameRepository.deleteByUserAndGame(userService.singleUser(userId).get(), findGame((gameId)));
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
