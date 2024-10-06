package com.GamBox.Project.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class GameInfo {
  @Id
  private Long gameId;
  @Column(unique = true, nullable = false)
  private String gameName;
  private String developer;
  private String publisher;
  private String imageUrl;
  private String description;

  @JsonIgnore
  @OneToMany(mappedBy = "game", cascade = CascadeType.ALL, orphanRemoval = true)
  private Set<LikedGamesInfo> likedByUsers = new HashSet<>();
}
