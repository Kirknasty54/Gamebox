package com.GamBox.Project.domain;

import jakarta.persistence.*;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
public class LikedGamesInfo {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  @JoinColumn(name = "u_id")
  private UserInfo user;

  @ManyToOne
  @JoinColumn(name = "game_id")
  private GameInfo game;

  public LikedGamesInfo() {

  }

  public LikedGamesInfo(UserInfo user, GameInfo game) {
    this.user = user;
    this.game = game;
  }

  public GameInfo getGame() {
    return game;
  }

  public void setGame(GameInfo game) {
    this.game = game;
  }
}
