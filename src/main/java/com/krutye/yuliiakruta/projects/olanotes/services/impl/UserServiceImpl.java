package com.krutye.yuliiakruta.projects.olanotes.services.impl;

import com.krutye.yuliiakruta.projects.olanotes.dto.RegistrationDto;
import com.krutye.yuliiakruta.projects.olanotes.dto.UserEntityDto;
import com.krutye.yuliiakruta.projects.olanotes.models.Role;
import com.krutye.yuliiakruta.projects.olanotes.models.UserEntity;
import com.krutye.yuliiakruta.projects.olanotes.repositories.RoleRepository;
import com.krutye.yuliiakruta.projects.olanotes.repositories.UserRepository;
import com.krutye.yuliiakruta.projects.olanotes.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import static com.krutye.yuliiakruta.projects.olanotes.mappers.UserMapper.mapToUser;
import static com.krutye.yuliiakruta.projects.olanotes.mappers.UserMapper.mapToUserDto;

@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }


    @Override
    public void saveUser(RegistrationDto regUserDto) {
        UserEntity user = new UserEntity();
        user.setUsername(regUserDto.getUsername());
        user.setFirstName(regUserDto.getFirstName());
        user.setLastName(regUserDto.getLastName());
        user.setEmail(regUserDto.getEmail());
        user.setPassword(passwordEncoder.encode(regUserDto.getPassword()));

        Role role = roleRepository.findByName("USER");
        user.setRoles(Arrays.asList(role));
        userRepository.save(user);
    }

    @Override
    public UserEntityDto findUserByEmail(String email) {
        UserEntity user = userRepository.findByEmail(email);
        return user != null ? mapToUserDto(user) : null;
    }

    @Override
    public UserEntityDto findUserByUsername(String username) {
        UserEntity user = userRepository.findByUsername(username);
        return user != null ? mapToUserDto(user) : null;
    }

    @Override
    public UserEntityDto findUserById(Long userId) {
        UserEntity user = userRepository.findById(userId).orElseThrow(() -> new NotFoundException("User not found"));
        return mapToUserDto(user);
    }

    @Override
    public List<UserEntityDto> findAllUsers() {
        List<UserEntity> users = userRepository.findAll();
        return users.stream().map((user) -> mapToUserDto(user)).collect(Collectors.toList());
    }

    @Override
    public void updateUser(UserEntityDto userEntityDto) {
        UserEntity existingUser = userRepository.findById(userEntityDto.getId()).orElseThrow(() -> new RuntimeException("User not found"));
        UserEntity updatedUser = mapToUser(userEntityDto);
        updatedUser.setPassword(existingUser.getPassword());
        userRepository.save(updatedUser);
    }
}
