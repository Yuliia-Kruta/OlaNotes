package com.krutye.yuliiakruta.projects.olanotes.repositories;

import com.krutye.yuliiakruta.projects.olanotes.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByName(String name);
}
