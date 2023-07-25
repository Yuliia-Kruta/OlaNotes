package com.krutye.yuliiakruta.projects.olanotes.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserEntityDto {
    private Long id;
    @NotEmpty(message = "Username should not be empty")
    private String username;
    @NotEmpty(message = "First name should not be empty")
    private String firstName;
    @NotEmpty(message = "Last name should not be empty")
    private String lastName;
    @NotEmpty(message = "Email should not be empty")
    @Email
    private String email;
}