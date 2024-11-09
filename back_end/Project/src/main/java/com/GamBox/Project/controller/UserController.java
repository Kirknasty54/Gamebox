package com.GamBox.Project.controller;

import com.GamBox.Project.dto.AuthenticationResponse;
import com.GamBox.Project.dto.UserRegistrationRequest;
import com.GamBox.Project.dto.UserResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.Map;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import com.GamBox.Project.domain.UserInfo;
import com.GamBox.Project.service.UserService;
import com.GamBox.Project.service.GameService;

@RestController
@RequestMapping("/v1/users")
public class UserController {
  private final UserService userService;
  private final GameService gameService;
  private final AuthenticationManager authenticationManager;

  public UserController(UserService userService, GameService gameService, AuthenticationManager authenticationManager) {
    this.userService = userService;
    this.gameService = gameService;
    this.authenticationManager = authenticationManager;
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

  @PostMapping(value = "/auth", produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<?> authenticate(@RequestBody Map<String, String> credentials) {
    Authentication authenticationRequest = UsernamePasswordAuthenticationToken.unauthenticated(credentials.get("username"), credentials.get("password"));
    Authentication authenticationResponse = this.authenticationManager.authenticate(authenticationRequest);
    if (authenticationResponse != null && authenticationResponse.isAuthenticated()) {
      return new ResponseEntity<>(HttpStatus.OK);
    }else{
      return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
  }

  @PostMapping(value = "/register", produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<?> register(@RequestBody UserRegistrationRequest credentials) {
    var user = userService.register(credentials);
    return new ResponseEntity<>(user, HttpStatus.CREATED);
  }
}
