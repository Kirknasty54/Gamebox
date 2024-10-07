package com.GamBox.Project.service;

import com.GamBox.Project.domain.UserInfo;
import com.GamBox.Project.repository.GameInfoRepository;
import com.GamBox.Project.repository.LikedGameInfoRepository;
import com.GamBox.Project.repository.UserInfoRepository;
import com.GamBox.Project.service.UserService;
import com.GamBox.Project.domain.LikedGamesInfo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

  public ResponseEntity likeGame(Long gameId, Long uId) {
    Optional<UserInfo> optionalUser = userService.singleUser(uId);
    if (!optionalUser.isPresent()) {
      return null;
    }
    Optional<GameInfo> optionalGame = gameInfoRepository.findBygameId(gameId);
    if (optionalGame.isPresent()) {
      GameInfo game = optionalGame.get();

    }
  }

}
