package com.GamBox.Project.repository;

import com.GamBox.Project.domain.GameInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface GameInfoRepository extends JpaRepository<GameInfo, Long> {
  Optional<GameInfo> findBygameId(Long gameId);

  Optional<GameInfo> findByGameName(String gameName);

  List<GameInfo> findAll();

  // Optional<UserInfo> findByuId(Long uId);

  // Optional<UserInfo> findByUserNameAndPassword(String username, String
  // password);

  // Optional<UserInfo> findByEmailAndPassword(String email, String password);

  // Optional<UserInfo> findByUserName(String username);
  // Optional<UserInfo> findByEmail(String userEmail);
}
