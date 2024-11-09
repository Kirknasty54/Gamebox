package com.GamBox.Project.service;

import com.GamBox.Project.domain.GameInfo;
import com.GamBox.Project.domain.LikedGamesInfo;
import com.GamBox.Project.domain.UserDetailsInfo;
import com.GamBox.Project.domain.UserInfo;
import com.GamBox.Project.dto.UserRegistrationRequest;
import com.GamBox.Project.repository.UserDetailsInfoRepository;
import com.GamBox.Project.repository.UserInfoRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
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
  private final PasswordEncoder passwordEncoder;
  private final UserDetailsInfoRepository userDetailsInfoRepository;

  public UserService(UserInfoRepository userInfoRepository, GameInfoRepository gameInfoRepository,
                     LikedGameInfoRepository likedGameInfoRepository, PasswordEncoder passwordEncoder, UserDetailsInfoRepository userDetailsInfoRepository) {
    this.userInfoRepository = userInfoRepository;
    this.gameInfoRepository = gameInfoRepository;
    this.likedGameInfoRepository = likedGameInfoRepository;
    this.passwordEncoder = passwordEncoder;
    this.userDetailsInfoRepository = userDetailsInfoRepository;
  }

  public Optional<UserInfo> singleUser(Long uId) {
    return userInfoRepository.findByuId(uId);
  }

  public List<UserInfo> allUsers() {
    return userInfoRepository.findAll();
  }

  public UserInfo register(UserRegistrationRequest userRegistrationRequest) {
    UserInfo userInfo = new UserInfo();
    userInfo.setUserName(userRegistrationRequest.username());
    userInfo.setEmail(userRegistrationRequest.email());
    userInfo.setPassword(passwordEncoder.encode(userRegistrationRequest.password()));
    userInfoRepository.save(userInfo);
    UserDetailsInfo userDetailsInfo = new UserDetailsInfo(userInfo, true, true, true, true);
    userDetailsInfoRepository.save(userDetailsInfo);
    userInfo.setUserDetailsInfo(userDetailsInfo);
    userInfoRepository.updateUserDetailsInfoByUId(userDetailsInfo, userInfo.getUId());
    return userInfo;
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
