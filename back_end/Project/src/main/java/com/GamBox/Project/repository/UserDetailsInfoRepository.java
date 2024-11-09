package com.GamBox.Project.repository;

import com.GamBox.Project.domain.UserDetailsInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDetailsInfoRepository extends JpaRepository<UserDetailsInfo, Long> {

}
