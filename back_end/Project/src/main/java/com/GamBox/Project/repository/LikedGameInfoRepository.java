package com.GamBox.Project.repository;

import com.GamBox.Project.domain.LikedGamesInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LikedGameInfoRepository extends JpaRepository<LikedGamesInfo, Long> {
  List<LikedGamesInfo> findByUser_uId(Long uId);
}
