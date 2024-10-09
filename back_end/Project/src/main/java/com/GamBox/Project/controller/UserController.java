package com.GamBox.Project.controller;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.GamBox.Project.domain.UserInfo;
import com.GamBox.Project.service.UserService;
import com.GamBox.Project.service.GameService;

@RestController
@RequestMapping("/v1/users")
public class UserController {
  private final UserService userService;
  private final GameService gameService;

  public UserController(UserService userService, GameService gameService) {
    this.userService = userService;
    this.gameService = gameService;
  }

  @GetMapping
  public ResponseEntity<List<UserResponse>> getAllUser() {
    List<UserInfo> users = userService.allUsers();
    List<UserResponse> userResponses = new ArrayList<>();
    for (UserInfo user : users) {
      userResponses.add(new UserResponse(user.getUId()));
    }
    return new ResponseEntity<>(userResponses, HttpStatus.OK);
  }

  private static class UserResponse {
    @Getter
    private Long UId;

    public UserResponse(Long UId) {
      this.UId = UId;
    }
  }

  static class AuthenticationResponse {
    @Getter
    private String userEmail;
    @Getter
    private boolean authenticated;

    public AuthenticationResponse(String userEmail, boolean authenticated) {
      this.userEmail = userEmail;
      this.authenticated = authenticated;
    }
  }

  @PostMapping(value = "/auth", produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<?> authenticate(@RequestBody Map<String, String> credentials) {
    AuthenticationResponse response;
    String userEmail = credentials.get("email");
    String password = credentials.get("password");
    Optional<UserInfo> authenticatedUser = userService.auth(userEmail, password);

    if (authenticatedUser.isPresent()) {
      UserInfo user = authenticatedUser.get();
      response = new AuthenticationResponse(user.getEmail(), true);
      return new ResponseEntity<>(response, HttpStatus.OK);
    } else {
      response = new AuthenticationResponse(null, false);
      return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
    }
  }

  @PostMapping(value = "/register", produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<?> register(@RequestBody Set<String> credentials) {
    return null;
  }
}
