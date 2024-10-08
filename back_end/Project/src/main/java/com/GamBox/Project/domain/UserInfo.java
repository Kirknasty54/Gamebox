package com.GamBox.Project.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.HashSet;
// import java.sql.Timestamp;
// import java.util.ArrayList;
import java.util.List;
import java.util.Set;

//
import org.springframework.web.bind.annotation.CrossOrigin;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class UserInfo {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long uId;
  @Column(unique = true)
  private String userName;
  private String password;
  @Column(unique = true)
  private String email;

  @JsonIgnore
  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
  private Set<LikedGamesInfo> likedGamesInfos = new HashSet<>();

}
