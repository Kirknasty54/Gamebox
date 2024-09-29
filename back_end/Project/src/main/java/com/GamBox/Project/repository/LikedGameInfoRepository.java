package com.GamBox.Project.repository;

import com.GamBox.Project.domain.LikedGamesInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.GamBox.Project.domain.GameInfo;
import java.util.List;

@Repository
public interface LikedGameInfoRepository extends JpaRepository<LikedGamesInfo, Long> {
  List<LikedGamesInfo> findByUser_uId(Long uId);

  List<GameInfo> findByGame_gameId(Long gameId);
}
