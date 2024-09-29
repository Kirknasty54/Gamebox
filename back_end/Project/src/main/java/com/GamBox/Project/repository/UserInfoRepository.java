package com.GamBox.Project.repository;

import com.GamBox.Project.domain.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {
  UserInfo findByuId(Long userId);

  Optional<UserInfo> findByUserNameAndPassword(String username, String password);

  Optional<UserInfo> findByUserName(String username);

}
