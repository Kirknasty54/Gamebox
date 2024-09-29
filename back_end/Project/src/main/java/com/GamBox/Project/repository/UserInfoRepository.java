package com.GamBox.Project.repository;

import com.GamBox.Project.domain.UserInfo;
import com.GamBox.Project.domain.GameInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {
  Optional<UserInfo> findByuId(Long uId);

  // Optional<UserInfo> findByUserNameAndPassword(String username, String
  // password);

  Optional<UserInfo> findByEmailAndPassword(String email, String password);

  Optional<UserInfo> findByUserName(String username);

  Optional<GameInfo> findLikedGamesInfoByuId(Long uId);

}
