package com.krutye.yuliiakruta.projects.olanotes.services;

import com.krutye.yuliiakruta.projects.olanotes.dto.NoteDto;
import com.krutye.yuliiakruta.projects.olanotes.dto.RegistrationDto;
import com.krutye.yuliiakruta.projects.olanotes.dto.UserEntityDto;
import com.krutye.yuliiakruta.projects.olanotes.models.UserEntity;

import java.util.List;

public interface UserService {
    void saveUser(RegistrationDto regUserDto);

    UserEntityDto findUserByEmail(String email);
    UserEntityDto findUserByUsername(String username);

    UserEntityDto findUserById(Long userId);

    List<UserEntityDto> findAllUsers();

    void updateUser(UserEntityDto userEntityDto);
}
