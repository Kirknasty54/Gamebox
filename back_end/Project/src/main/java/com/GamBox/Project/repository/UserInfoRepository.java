package com.GamBox.Project.repository;

import com.GamBox.Project.domain.UserDetailsInfo;
import com.GamBox.Project.domain.UserInfo;
import com.GamBox.Project.domain.GameInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {
  Optional<UserInfo> findByuId(Long uId);

  Optional<UserInfo> findByEmailAndPassword(String email, String password);

  Optional<UserInfo> findByUserName(String username);

  Optional<GameInfo> findLikedGamesInfoByuId(Long uId);

  @Transactional
  @Modifying
  @Query("update UserInfo u set u.userDetailsInfo = ?1 where u.uId = ?2")
  int updateUserDetailsInfoByUId(UserDetailsInfo userDetailsInfo, Long uId);
}
