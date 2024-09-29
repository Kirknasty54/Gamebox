package com.GamBox.Project.repository;

import com.GamBox.Project.domain.UserInfo;
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
<<<<<<< HEAD
  // Optional<UserInfo> findByEmail(String userEmail);
=======
>>>>>>> c03f6a3be1b83ba7a87f9d5b64bec5f9a057ed99
}
