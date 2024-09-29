package com.GamBox.Project.controller;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.GamBox.Project.domain.GameInfo;
import com.GamBox.Project.repository.GameInfoRepository;
import com.GamBox.Project.service.GameService;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/v1/games")
public class GameController {
  @Autowired
  private GameService gameService;
  @Autowired
  private GameInfoRepository gameInfoRepository;

  @GetMapping
  public ResponseEntity<List<GameRespones>> getAllGames() {
    List<GameInfo> games = gameService.allGames();
    List<GameRespones> gameRespones = new ArrayList<>();
    for (GameInfo game : games) {
      gameRespones.add(new GameRespones(game.getGameId(), game.getDeveloper(), game.getGameName(), game.getPublisher(),
          game.getImageUrl(), game.getDescription()));
    }
    return new ResponseEntity<>(gameRespones, HttpStatus.OK);
  }

  private static class GameRespones {
    @Getter
    private Long gameId;
    @Getter
    private String developer;
    @Getter
    private String game_name;
    @Getter
    private String publisher;
    @Getter
    private String image_url;
    @Getter
    private String description;

    public GameRespones(Long gameId, String developer, String game_name, String publisher, String image_url,
        String description) {
      this.gameId = gameId;
      this.developer = developer;
      this.game_name = game_name;
      this.publisher = publisher;
      this.image_url = image_url;
      this.description = description;
    }
  }

  @GetMapping("/{uId}/likedGames")
  public ResponseEntity<List<GameRespones>> getLikedGames(@PathVariable Long uId) {
    return null;
  }

}
