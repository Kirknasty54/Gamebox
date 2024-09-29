package com.GamBox.Project.repository;

import com.GamBox.Project.domain.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

<<<<<<< HEAD
@Repository
public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {
  Optional<UserInfo> findByuId(Long uId);
=======
public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {
  UserInfo findByuId(Long userId);
>>>>>>> 4e339c4e8ee168f8dfd73db3cf1355259b88bbed

  Optional<UserInfo> findByUserNameAndPassword(String username, String password);

  Optional<UserInfo> findByUserName(String username);
<<<<<<< HEAD
=======

>>>>>>> 4e339c4e8ee168f8dfd73db3cf1355259b88bbed
}
