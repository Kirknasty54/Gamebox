package com.GamBox.Project.repository;

import com.GamBox.Project.domain.LikedGamesInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.GamBox.Project.domain.GameInfo;
import com.GamBox.Project.domain.UserInfo;
import java.util.Optional;
import java.util.List;

@Repository
public interface LikedGameInfoRepository extends JpaRepository<LikedGamesInfo, Long> {
  List<LikedGamesInfo> findByUser_uId(Long uId);

  Optional<LikedGamesInfo> findByUser_uIdAndGame_gameId(Long userId, Long gameId);

  List<GameInfo> findByGame_gameId(Long gameId);

  void deleteByUserAndGame(UserInfo user, GameInfo game); // Ensure this method is defined
}
