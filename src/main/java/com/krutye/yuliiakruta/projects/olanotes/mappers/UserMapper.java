package com.krutye.yuliiakruta.projects.olanotes.mappers;

import com.krutye.yuliiakruta.projects.olanotes.dto.UserEntityDto;
import com.krutye.yuliiakruta.projects.olanotes.models.UserEntity;

public class UserMapper {

    public static UserEntity mapToUser(UserEntityDto userDto){
        if (userDto == null) {
            return null;
        }
            UserEntity user = UserEntity.builder()
                    .id(userDto.getId())
                    .username(userDto.getUsername())
                    .firstName(userDto.getFirstName())
                    .lastName(userDto.getLastName())
                    .email(userDto.getEmail())
                    .build();
            return user;
        }
    public static UserEntityDto mapToUserDto(UserEntity user){
        if (user == null) {
            return null;
        }
        UserEntityDto userDto = UserEntityDto.builder()
                .id(user.getId())
                .username(user.getUsername())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .build();
        return userDto;
    }
}
