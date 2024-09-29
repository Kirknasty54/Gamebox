package com.GamBox.Project.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class ReviewInfo {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long reviewId;

  @OneToOne
  @JoinColumn(name = "uId", nullable = false)
  private UserInfo user;

  @OneToOne
  @JoinColumn(name = "gameId", nullable = false)
  private GameInfo game;

  private Double overallScore;

  private String reviewText;

}
