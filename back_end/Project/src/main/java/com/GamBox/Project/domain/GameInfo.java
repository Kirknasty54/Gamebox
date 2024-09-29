package com.GamBox.Project.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

//import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.List;

@Data
// @Entity
@AllArgsConstructor
@NoArgsConstructor
public class GameInfo {
  // @Id
  private long gameId;

}
