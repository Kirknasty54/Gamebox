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
  @JoinColumn(name = "user_idsdf")
  private UserInfo user;

  @ManyToOne
  @JoinColumn(name = "game_id")
  private GameInfo game;
}
