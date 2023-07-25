package com.krutye.yuliiakruta.projects.olanotes.repositories;

import com.krutye.yuliiakruta.projects.olanotes.models.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    UserEntity findByEmail(String email);
    UserEntity findByUsername(String username);
}