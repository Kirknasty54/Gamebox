package com.GamBox.Project.dto;

import lombok.Getter;

public class UserResponse {
  @Getter
  private Long UId;

  public UserResponse(Long UId) {
    this.UId = UId;
  }
}
